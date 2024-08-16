import React, { useRef, useEffect, useState } from "react";
import { FaceMesh } from "@mediapipe/face_mesh";
import * as cam from "@mediapipe/camera_utils";
import Webcam from "react-webcam";


const Shape = () => {
  const [faceShape, setFaceShape] = useState("No face detected");
  const [confidence, setConfidence] = useState(0);
  const [recommendation, setRecommendation] = useState("");
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let camera = null;

  const calculateDistance = (landmark1, landmark2) => {
    const x1 = landmark1.x;
    const y1 = landmark1.y;
    const x2 = landmark2.x;
    const y2 = landmark2.y;
    return Math.sqrt((x2 - x1) * 2 + (y2 - y1) * 2);
  };

  const detectFaceShape = (landmarks) => {
    const jawWidth = calculateDistance(landmarks[0], landmarks[16]);
    const cheekboneWidth = calculateDistance(landmarks[2], landmarks[14]);
    const faceLength = calculateDistance(landmarks[8], landmarks[27]);
    const foreheadWidth = calculateDistance(landmarks[10], landmarks[151]);
    const jawToChinLength = calculateDistance(landmarks[152], landmarks[8]);

    const ovalScore = (faceLength > cheekboneWidth && cheekboneWidth > jawWidth) ? 1 : 0;
    const rectangleScore = (faceLength > cheekboneWidth && cheekboneWidth < jawWidth) ? 1 : 0;
    const triangleScore = (foreheadWidth > cheekboneWidth && cheekboneWidth < jawWidth) ? 1 : 0;
    const heartScore = (jawToChinLength > foreheadWidth) ? 1 : 0;
    const roundScore = (jawWidth === cheekboneWidth && cheekboneWidth === faceLength) ? 1 : 0;
    const squareScore = (
      Math.abs(jawWidth - faceLength) <= 0.05 * faceLength &&
      Math.abs(cheekboneWidth - faceLength) <= 0.05 * faceLength &&
      Math.abs(jawWidth - cheekboneWidth) <= 0.05 * cheekboneWidth
    ) ? 1 : 0;
    const diamondScore = (cheekboneWidth > jawWidth && cheekboneWidth > foreheadWidth) ? 1 : 0;

    const scores = [
      { shape: "Oval", score: ovalScore },
      { shape: "Rectangle", score: rectangleScore },
      { shape: "Triangle", score: triangleScore },
      { shape: "Heart", score: heartScore },
      { shape: "Round", score: roundScore },
      { shape: "Square", score: squareScore },
      { shape: "Diamond", score: diamondScore }
    ];

    const bestMatch = scores.reduce((max, shape) => shape.score > max.score ? shape : max, scores[0]);

    return {
      shape: bestMatch.shape,
      confidence: bestMatch.score * 100
    };
  };

  const getRecommendation = (shape) => {
    switch (shape) {
      case "Square":
        return "Wayfarer frames";
      case "Heart":
      case "Oval":
        return "Rectangle frames";
      case "Round":
        return "No specific recommendation";
      case "Triangle":
        return "Circular/Round frames";
      case "Diamond":
        return "Cat-eye frames";
      default:
        return "No specific recommendation.";
    }
  };

  const onResults = (results) => {
    if (!results.multiFaceLandmarks) {
      setFaceShape("No face detected");
      setConfidence(0);
      setRecommendation("");
      return;
    }

    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    for (const landmarks of results.multiFaceLandmarks) {
      const { shape, confidence } = detectFaceShape(landmarks);
      setFaceShape(shape);
      setConfidence(confidence);
      setRecommendation(getRecommendation(shape));

      for (let i = 0; i < landmarks.length; i++) {
        const x = landmarks[i].x * canvasElement.width;
        const y = landmarks[i].y * canvasElement.height;
        canvasCtx.beginPath();
        canvasCtx.arc(x, y, 1, 0, 2 * Math.PI);
        canvasCtx.fillStyle = "red";
        canvasCtx.fill();
      }
    }
    canvasCtx.restore();
  };

  useEffect(() => {
    const faceMesh = new FaceMesh({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    faceMesh.onResults(onResults);

    if (webcamRef.current) {
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMesh.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }
  }, []);

  return (
    <div className="Shape">
      <header className="Shape-header">
        <center>
          <div className="Shape-container">
            <Webcam
              ref={webcamRef}
              style={{
                textAlign: "center",
                zIndex: 9,
                width: 300,
                height: "auto",
                display: 'none'
              }}
            />
            <canvas
              ref={canvasRef}
              className="output_canvas"
              style={{
                zIndex: 9,
                width: 300,
                height: "auto"
              }}
            ></canvas>
          </div>
        </center>
        <p>
          Detected face shape: <code className="Shape-link">{faceShape}</code> (Confidence: {confidence}%).
        </p>
        <p>
          Recommendation: <code className="Shape-link">{recommendation}</code>.
        </p>
      </header>
    </div>
  );
}

export default Shape;