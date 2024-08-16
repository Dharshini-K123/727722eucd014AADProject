import React, { useState, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import '../styles/EyeglassProduct.css'; // Ensure you have the styles defined

const EyeglassProductWomen = () => {
  const { addToWishlist } = useContext(StoreContext);
  const navigate = useNavigate();

  // Unique data for products
  const products = [
    // (same product data as before)
    {
      id: 1,
      name: "Fastrack Oval",
      description: "Stylish Oval Rimmed Eyeglasses",
      size: "Small",
      color: "Black",
      shape: "Oval",
      price: 1200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqDzbOiwhlvhBwFVD1XdWw1--Hn-zl_c_wA&s",
    },
    {
      id: 2,
      name: "Ray-Ban Round",
      description: "Classic Round Glasses",
      size: "Medium",
      color: "Brown",
      shape: "Round",
      price: 1500,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/Brown-Tortoise-Black-Full-Rim-Round-Lenskart-Air-Flex-LA-E11482-C2-Eyeglasses_lenskart-air-la-e11482-c2-eyeglasses_g_010407_02_2022.jpg",
    },
    {
      id: 3,
      name: "Vogue Cat-Eye",
      description: "Elegant Cat-Eye Frames",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 1800,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/silver-blue-full-rim-cat-eye-lenskart-air-fusion-la-e17014--eyeglasses__dsc4726_28_05_2024_28_05_2024.jpg",
    },
    {
      id: 4,
      name: "Oakley Sport",
      description: "Durable Sports Glasses",
      size: "Medium",
      color: "Blue",
      shape: "Cat-Eye",
      price: 2000,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhISBxEQERAQEBITEhgREBUQEg4VFRIWFhcRFRYYHSkiGholHRUVITIiJjUuMC4uFyAzODMsNzQtLisBCgoKDg0OGhAQGjYlICYtKy0tLS0vLTctNS4vLS4rNzc3Nys1Kzc3LSstKy0tLS0tListLisrKzcrNy01LDctLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABDEAACAgEBBAYHBAYIBwAAAAAAAQIDEQQFEiExBgdBUWFxEyIygZGhsTNSwdFCk6Kj4fAUYmNygpKU8RUXIyQ0U4P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAJREBAAICAgIBAwUAAAAAAAAAAAECAxEEIRIxkTKx8BMicYGh/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEHa219Npob+1Lq6Yd85JZ8lzfuAnA5Vt/rnpjmPR/TWahrh6S3NNK44z3vs57ppur6ydTqIr+n6vVKclx0+gqjp1Xxfqu55nJ4xykQvfxjekbW8Y2+gdTqq61vaqcK4985KC+LMFf072XHKWspsa5qjOol5YqUjhterlKSnRsyy2fPf1Lsss987k/kzKV7U2hj1dCoJfevrjFe5My35do9Vj+7Qz25Fo9R8zDtnR/pDptbGc9lym1VY65qdU6ZRluqWHGaT5STMqcU0/WNZs6mNdOhoe9ZKUpS2irLbbJZlK2cY1cM4x3JJJdgq659XPPotJolu49vVuLeX2ZSNVLRaNw01nyjbtYOJ/84Nodmm2f/qlJ/KZbs66NdBpXaTSPKz6t0+Xuzgmlp3AHE6+vDUfp6Gh+WqnH61k/T9eFeUtVobI5+5fGfuWYoGnXQaDV1q6PdzqadTTN43IWqEJWNt8k5ZSWObSXHhk3TZeuhfVXdp87tkcrOMrvTx2p5XuDxKAAAAAAAAAAAAAAAAAAAt6nUQrjKeplGEILMpSeFFd7ZcPnXp9tzWvUaqjWaj01cNTLc3ZSrhTuze6lFNeyvVec8nzA3Xpd1pNb1fR5Y5p2zjl/wCCD/H4I0PYOydTtXVxVs7rW3m+2zM4aeOG+PHn2JZ59jWWYXS6HX2w3qo02x4cXGNb5Zx6rjl95sOzdv8ASDTVxp2WtNRVHkq6aOb5yeXxb7W+LEd+ktS2ra3Vhbp7FZsiC19O6oyqu9FC2uXDNlbeK3y5erwb5knQdDNfNrdpp0q/tZKUo+VdOU/8yNSj0i6Tt5nqp4zyhTo/h2GYp6a7crXGNlr/ALWmtr9ys/UqycSL28rVn/dM+TFjtO7/AHblp+rlPjtTW6mfDjGhQ00H70pT/aMjp+rzZUftNLG59+pss1L/AHspY9xqem6z9XFZ2npaF3+tdp8frYYJ9PW1pX9pGpPw1cJfRHtaUp6jSymOsfTHw3HS9GtBV/4mi0lf9zTVQ+kSV/wvT/8Aop/VQ/I0izrU069iuL/+/wCUGQJ9Z9trcdl1QclzUIWamS9y3cfAnuE5jXcug6vYekthKvVaeiVc04yTqjxXw4eZyTpV0Q6O6bK/pGqjbxxXp7oXSTXNPfi8Y8Xkk67VbT1SxrJThW+yyxVxaa4xddSW8vCfxIMNiVx4Xev3pLcg/OK4y/xORdTDe/qPlmvy8VOt7/ho8NlwlKa2PCVzXGLuzYovKxF7ijHll5ksE7TdFtdj171X3x06hp2/N1pJ+83aEVFJQSjFcklhLySKoMutxopHctGG8ZO9NL1HRn0NFs6q5b8UnJylmWMreku94ydx6uLFLZulcOSra88Tks+ZpsUmnvJNY4prKZ03ZeihRTXVpoxhCuEYqMUoxjhdiRiqlf2lAAkiAAAAAAAAAAAAAAAAHGeszq6u9JPVbFxOq2bndCcknTKcsysTftQy22ua7E1y7MWdZp1ZXOuz2bISg/KSaf1A4tpNNGquNdPKK59sm+Lk/FtthIk3VuMpQuWJwk4yXc08P6FnBPjz+5dT6V+olVsgxkSKpnVjuHJ5kSnQl3CVcX9ok/NZ+pahMXamMFmx+S7WUXhy5tFe5la2hoadyU/Rw3klhpY7fDzKNhWtTaXJwfyaMVt3pAq4espYlwjGKTlPHF8XySxlv+Bi9m9KoQsi36NqT3XuW70oJ9sk4rhy5ZwQ8orHjM9sv6OTNkjNjrM1j3P57b/bIg24K46lSWYPh80+5kW6wvx1lppMWnpbsZajPiUWWFzZ2ksvsjXo4705fCK7ZSfYl3keTaIq+j4dfGm5Z3ozpHddGMV6kGpWPsUU+Xv5fE6UY7YeyYaapV1cZPjOWMOcu/wXcjIs5cQnM7lRZYl7RHlqpfoR/nyeDxrjmXPj5IM9eDvn2Y+H8T1aiX6S/D6ZPCqIF+qxSXD3+BWQYqW9iqLS45bbSXHPDv5/UvNzj7TTT+TAkAi+kbKXJ9jYEwEL001y4+a/n8S/VqU+fB/z8PeBeAAAAAAABgukPRmrU5nD/p3Y9pLKnjkprt8+f0OdbX2Zfppbuug45eIyXGuf92X4PD8DsRRdVGcXG+MZRksNSSlGS7mnzEdTtKttOIK0u13G+bX6AUWZls2cqJd2PSV/BvK9zx4GnbT6J66jLdXpYr9Kl7/7LxLPkmdDDnrPUq8+OMkPKryI65WTbu4RT+K7EiHOyyH21dsX/WrlF/NGf6MbC1OrmnbXZVp0/XnOLg5L7tafFt9/JcePY7rXrEb24ebgzeYjTO9Gei+n1O7dtOiFkKm1QprMc5W9LHKSzFLDysp9xuOv2TRdU6dRXW62uC3ItRa5SSaxlPDXkSaKYwjGFKUYxSUUuSS5IuHLvbytt2cOKMeOKOObU0M9NfKFj3Wuax6s0+Uo+D+XFEG7UnW+kGwKdXFLVZjKOdycHicM81yaa8GYfZ3V7o63vax2ahrssaUP8sUs+/Jtry48e/bHi4FcduvTR9hbGv1kv+1W7XnErJp7ke9L70vBe/B1PYWxadLDd0qbk8b85e3Y/HuXcuS+JkKaYwSjRGMYpYSilFJdySKzJkyzedy6W+tBTY+D8mVBrvK3iHF8EeB6aUfsuK+a/MRj954fimgPSqEc8ipaf+t8F+ZehBJYiB7FY5Hk45TT7UVACJHlw739Txiaw2nyfFHjAFLgnz8s9qKj1AeU2OHC15j2P+HY/l5ciaRZLhxWfzJKA9AAAAAAAAAAAAAAAAAAAAAAAADXeABTursKgAAAApnBNYl/sRZ0yXs+svmTDxxXaBAVnZLKfisFxSRIlTF8/qylaaPd8wKKPWeX2cvDxJJ4ljkegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=",
    },
    {
      id: 5,
      name: "Gucci Fashion",
      description: "High-Fashion Frames",
      size: "Medium",
      color: "Brown",
      shape: "Oval",
      price: 2500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzsvYto5YDDyfvQ37g2Rc8YeEyyLvxXPVxg&s",
    },
    {
      id: 6,
      name: "Prada Luxury",
      description: "Luxurious Designer Glasses",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 3000,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12896-c12-eyeglass__dsc0194_30_04_2024.jpg",
    },
    {
      id: 7,
      name: "Titan Tough",
      description: "Tough and Durable Frames",
      size: "Small",
      color: "Black",
      shape: "Round",
      price: 900,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/matte-black-gunmetal-grey-transparent-full-rim-round-vincent-chase-sleek-steel-vc-e13784-c2-eyeglasses_g_3009.jpg",
    },
    {
      id: 8,
      name: "Lenskart Basic",
      description: "Affordable Everyday Glasses",
      size: "Medium",
      color: "Brown",
      shape: "Oval",
      price: 700,
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEhAQEBAQEBIRFRAODg8VFQ8VEREQFRIXGBYSFRcZHSgsGBonGxYWIjEhKCkrLi4uGSs/ODMsNygtLisBCgoKDg0OGxAQGzAlICUrLTUtNysrLy4tNy0tNS0tLy0tKzAtLzgtLTc1Ky0tLSstLS0tLSstNS0tLS0tLS0rLf/AABEIALwBDAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABQcEBgECAwj/xABBEAACAgADBAcFBQUGBwAAAAAAAQIDBAURBhIhMQcTQVFhcYEUIjKRoUJSkrHBI2KCotEVFjNDcsIXJFNzsuHw/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKxEBAAIBAwIEBQUBAAAAAAAAAAECEQMSIQQxUWGBoRNBcZHRIjJSwfBC/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDzLMIUR1lxb4QgucmZhrd+DeKxKsT/Z1e5LXt5/CvMraZjstWM92Vhcwv+KyKcX2JfD4a9pK0XxmtYvXw7Tsq46bui05aEdisHKt79Wve1/9zKTurz3T+mfJKAjsBmO/wmtH+ZIJl62i0ZhWYmO7kAFkAAAAAAAAAAAAAAAdZzSWrAWTUVqyHxKsxGu7qork09OPgejk8RPdT0jH4v6EpXBRSSWiRlEzefJpxT6ojJ8zcpPD2v8AaR4xf349/mTJEYrLIQu9pWu9oopdifHivPkSdNqmk12/R9xes/KVbRHeHoACyoAAAAAAAAAAMPM7pRg1Baylwj+rGV4Xqq4xfxP3pv8AeZC7R7SUYKPX3b8+apprW9ZY191di46uT0S1RVGfdMmZW6rC014SD1Sk1113g9XpFeW6/MzzG7LWKWmvEL7nNRTcmklzbaSXqQWL2yy+tuKvjdJcHGr9o9e5tcE/Nnz/AIfC5rm0/wBvdibtdHuy356r92paJLx4I3PKuiW2STshp/3bXH+Wnl6srfUt2pDWmlSOdSWxZvts4tyow0Ya/wDWsitX2Pchr/5Gv09IGaTurjbfRhaHJKy2FDe7DXi/fctTZsD0YQh/nqPhBXP6ysM3/hrhX8dtkvSH6pnPSvUROZdVr9HtxiUnl+YSuSeGzLCYldqlGDm/Wqcd38LJBY3Fw/xMIpeNFsJ+rVir08lqanZ0TZe3rrNS5qW7Tqv5SQp2SxdC0w2Y2wS5QlBTh5aNs6t1vBxbdOe1vvE/0nlnlC/xHOjv62E64/jkt1+jM+m6M0pQlGcXylFpp+qNNxN+0OH49TgcfBc1Fzptfz4fQgrNt8vhNxx+XYrLrvtWQjJPzU6XGbXjoWiVLUiOy0gVti9vMPh413YXH146l21VX4WyUFiK65vTrK3pGT3Xxakpa965ljVWKSUovVNJp96ZZSYw7gAIDhsrjbnbPHxtlhstrjpWtMRjJJSUZ9sK0+Gq7W9ePDTgVRmGOzHGWOu7EX4h8pJzl1Sb7N1aR18EjP4tM4y2jp74i0xxL6EzLa3LsNqrcXRGS5wUlOf4Y6v6Gu4npVwGulKnY+yUtK6/m9X/AClfZJ0ZYq1JyhZFcOe7TFfiTlJeiNqwnQ/U9OtnFeEXdL85IrN7T+2Pb8tK006/un3/ABlkS2+xdybp9irXhKd0l6vc/Ij8TtXi1VKbzOvrt7hh3RS63DtblpwfqTuF6KMvr4pzT71r+rZ62dGGDf8Am3/yf0MPh6+ebcejpjV6SK42/wC9YatlnSrfhvdxGEqujzlbRNwk/HclvJv+JG4ZP0nZTidE73h5PT3L4uvR92/xj/Ma7mXQ1h58a8TOH8Gv5TRreYdDeOgm8PiKrtOUW5Qk/mtPqdVItEYly6s6VpzWMeq867K7Y6xlGcJcpRalF+TRh0ydU2n8L01/SR82X4LNsnnru4nCS14ShKShP8L0n9TZsl6V8xjuxxFVeMiuctOqu07feit1+W76i3ipWkzxHK/waxsVtfhcyhJVOUbK0nZRYt22EXybX2l4pteps5aJyymMTiQAEoAAAAAAjM+zOGGrTm9N9qtevN/LUkyIz/dfUw4Oc56VJrX3lFttcOGiTepS8zFZmFqRmVZZtlax+MxNuMsddFcZww1Cbi5UVx162Wnwpvelpzaa5aGJsnsosXZGqGkaoxU7rFuuSjrokm/tPR8+Wh12zzqc5zoglXGLcLXw37HGXJvsjquXb9Dcuhzd9luf2nb7z8NxKK/P5mFNPdO6XdbVtp0msNzyzLKMLBV01xhFd3Nvvk+bfizMAOp54AAAAAGDm2U4fFwdWIqjZF8tecX3xfOL8UZwAoXbHo/9lu3VpOqxSdNj4T4c4Nr7S1XmZmy21mZ4RSS3MRUpaKqeqk3pxlCS+DXtT14vguJY/SNTF4G2b51OuyL7m5qL+kmVdleLpd0476UZJTT4L3tOK4+Rza170nMO/p9PT1K4t4rBq6QXu6zy7GJ6cVBVzjr4PVfkaptb0l42VcoYbDywil7u/Np4hp/ci9N3z0enhzO1l2F3WnbDX/VE1jOHXFe64tyemsdOXaZ6PU2vOJhprdHp0jNbOmzHtN0oYeHv2WvSKb1Ue1t+CWrb8y6tmtlMPgopqKsufGd0ktdXz3F9lfXvNM6GcBFyxWIa4x3Ka/BS1lL8oFpnVXTrE5iHHqa17RFZniAAF2AAAOJI8UtGe5wwPHF4Su6DrthGyElpKEknF+jKk2z2NhhJx6lfsLt5Q+9XNLXq3Lm1pq15Pu43Caj0o4jq8C5a6S62rcfc9X+mpnqU3Vw36fUnTvEtAyDKvZLMFjKLt26M7YYimT4XVNtOK7tE4cO3h2rjcuX42vEVwtre9Ca1T/NfMofJdpHC2HWQ6yDaTSS3lJvRTj4l1bOabk9NNFOUWlyUlwl668zPS3V/TLTqZraZtEpcAHQ5AAAAAAIzOa3KMZR+KuW/CWmri91x107eEmSM2eK4si1d0YTWcTlR+3WRYlW2YqNKlXPWd7qcpJT7bFB8Yp82veSevEm+hjMd2y2jX3bFvQffJLXRem8WbmGU13QlHjDeWm9FtP6FWbT4WrKL6raGoW7y36nvaTXNXxfdvLSXH9TGN9eJ5b5pbyXGCOyDN6sbTC+p6qS0lHthNfFCXc0yRN3P2AAAAAAAAaf0rYhQy+yHbdOquPpNTf0gzSuivZaGJsnir4KdVL3a4SWsZ3c9Wu1RWnDva7jK6Ts0eKxNWDp991tVpL7V9jS09OC9WWTs7lMcFh6sPHT3I+9L703xlL1bZETle0bYhnKiCWihFLu0WnyNG6S9l6bKHiq4QrspalbKMUt+p8HvJc2uD17kzfTzxFMbIyhNaxnGUJrvjJaNfISrE4nLQOiGdahiqoyUmpVWvykpL/aWGUzsle8pzSeHtekJOWGlJ8tG1Kqx/T8TLmERiE3nM5AASqAAAAAOCrumnNEo0YfXhxtn59ny4/iLIzPHV4aqy62W7CuLnJ+Hcu9t8Eu9lVZRTVnWJttualJNqrD89Fon1su+K4RXZrFc+BS9sfJrp1ieZlrOwuV2XYiu/qJzoras33pCuc09YrWXFxT4vdT5aduqvbJcOq6kuOs5WWy8ZWTcm/mzxynJYUQjGUna48nLz5aEqRWLTObItNcYgABozAAAAOJAeVszrTJGPiX4nhHH11/EyUpc17bXZivMqHW9I2w1nh7Puz+6/wB18n8+w9Z7UYZcNZPyTZ0ntVV9mq+XlD+pBhS+T51i8kvs3dee7icNPVQco9/3X3TWvqi1sg6SctxaSlb7NZ213e6k/Cfwv5+hq23uFqzBq6ujE04hJRc9zehZFclNR46rsa+vDSvns5jq5axw10tPu137vycVp6GdYmG95raI4w+l6L4WLehKM4vlKLTT9Ueh85YerMK3qsFi4y+8oWa/zQf5mbHOs7r+GrHesLf0gTN5j5KxpRPz9pfQAKSwW1Oc8FPB4ixeM8VW/wCn0My7OMysWn9nS4/fulNfJoytr2j/AJ94Wjp4/l7StnFY6mpN2211pcW5SjHRerK92t6TaFGVGAl1tj92WIWvVwT7Yv7T8eXmariMDj7P8SvC0xfNJTWnnopP5aGRkWy2XqyMsVjFKKabw9ddkIzfdKyXFry0fiWpqWt3jHqm+lSnMTn0TnRXsy5P+0b9X8Xsqfa3wld+aXq+4tAj8HmNMko16KKSjFJaJJckl2IzVbHvNnPM5l3BjXY2uHNkZftThoPSTl8mENb6UtnusisdXFuVMd29Lm609VZ/Dx18H4EVst0m11KNGOUlFaRrxMU5aLusS4+q18V2vdpbXYHT3rHo+DW7J/oVltFs5ll0pTwuJnSpPXqZVOVSf7j1TivDjoVnvlrWeNswtvK88wmKWuHxFN3hCcXJecea9SRPmmzZbERf7OVVunw6N/7kn9SWy6Wb0rRRxy05dXN7unl/7K70/Cjx9n0ACjP71ZpV8X9oL/VXZL675w9v8wXD/mH/AASX+8nf5I+F5x7/AIXoRmcZ9hcHFu+2MXpvKte9bJeEFxfnyKh/vtjprSWExEvFzxmj/g5fUwHmGInrFYfq03q1FV1R173x118eZjbWv2rX7zDfT6ak82tx9HvtbtPic6uhRTCddMZpVUfbssfBSnp9ruXKPPnxLS2J2ary2hRejunpK+a7+yEf3UazsLVl+EfX22weIa3Y6Rmq6Yvmotpat9su7gu3XdFm1Fj92afkb0zjljrbc4r2S8ZanYxsK12GSWYgAAAAAcNHIA8LMOmeEssg+aRnADAjlda+yvkeiwUVySXoZYBlj+zj2YyADLH9nOfZz3AHh7OcPDeJkAGWJLBRfPQ8J5RW+xfIkgE5lHwy1R5Hp7I+8zADLAllyfMLK6+5GeAZYSy2tfZj8jusFFclFeiMoAyxvZkc+zGQAZY/s/iPZ/EyADLGeER1lgIPsXyRlgGUfLKa32I4qyimL1UUn5EiAZdK60uR3ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z",
    },
    {
      id: 9,
      name: "Polaroid Retro",
      description: "Retro Style Eyewear",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 1100,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12896-c12-eyeglass__dsc0194_30_04_2024.jpg",
    },
    {
      id: 10,
      name: "Fossil Flex",
      description: "Flexible Frames for Comfort",
      size: "Medium",
      color: "Black",
      shape: "Oval",
      price: 1400,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGIdCLT-p4GgzV1hwRHIkMbdZekWogL3sp8g&s",
    },
    {
      id: 11,
      name: "Burberry Classic",
      description: "Timeless Classic Design",
      size: "Medium",
      color: "Brown",
      shape: "Round",
      price: 2200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnl2bpG35llptxRTAVarBWKeAPzY-oK0OM2w&s",
    },
    {
      id: 12,
      name: "Tom Ford Elegant",
      description: "Elegant and Stylish",
      size: "Large",
      color: "Blue",
      shape: "Cat-Eye",
      price: 3500,
      image: "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//v/i/blue-transparent-silver-full-rim-cat-eye-vincent-chase-blend-edit-vc-e14973-c3-eyeglasses_g_3531_10_14_22.jpg",
    },
  ];

  // State to manage products and their favorited status
  const [productList, setProductList] = useState(
    products.map((product) => ({ ...product, isFavorited: false }))
  );

  // State to manage selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    shape: { oval: false, round: false, catEye: false },
    color: { black: false, brown: false, blue: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan1000: false, lessThan2000: false },
  });

  // Handler to toggle the favorited status
  const toggleFavorite = (productId) => {
    const updatedProducts = productList.map((product) => {
      if (product.id === productId) {
        const updatedProduct = {
          ...product,
          isFavorited: !product.isFavorited,
        };
        if (!product.isFavorited) {
          addToWishlist(updatedProduct);
        }
        return updatedProduct;
      }
      return product;
    });
    setProductList(updatedProducts);
  };

  // Handler to toggle filter selection
  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

  const getFilteredProducts = () => {
    return productList.filter((product) => {
      const { size, color, shape, price } = selectedFilters;

      const matchesSize = Object.entries(size).some(
        ([key, value]) => value && product.size.toLowerCase() === key
      );

      const matchesColor = Object.entries(color).some(
        ([key, value]) => value && product.color.toLowerCase() === key
      );

      const matchesShape = Object.entries(shape).some(
        ([key, value]) => value && product.shape.toLowerCase() === key
      );

      const matchesPrice =
        (price.lessThan1000 && product.price < 1000) ||
        (price.lessThan2000 && product.price < 2000) ||
        (!price.lessThan1000 && !price.lessThan2000);

      return (
        (matchesSize || Object.values(size).every((v) => !v)) &&
        (matchesColor || Object.values(color).every((v) => !v)) &&
        (matchesShape || Object.values(shape).every((v) => !v)) &&
        matchesPrice
      );
    });
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="eyeglass-page">
      <nav className="navbar1">
        <button
          className="nav-button"
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('/wishlist')}
        >
          Wishlist ❤️
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('/cart')}
        >
          Cart 🛒
        </button>
      </nav>
      <aside className="filters">
        <h2>Filters</h2>
        <button
          className="reset"
          onClick={() =>
            setSelectedFilters({
              shape: { oval: false, round: false, catEye: false },
              color: { black: false, brown: false, blue: false },
              size: { small: false, medium: false, large: false },
              price: { lessThan1000: false, lessThan2000: false },
            })
          }
        >
          Reset
        </button>
        <div className="filter-group">
          <h3>Frame Shape</h3>
          {["oval", "round", "catEye"].map((shape) => (
            <div key={shape} className="filter-option">
              <input
                type="checkbox"
                id={shape}
                checked={selectedFilters.shape[shape]}
                onChange={() => toggleFilter("shape", shape)}
              />
              <label
                htmlFor={shape}
                style={{
                  color: selectedFilters.shape[shape] ? "orange" : "black",
                }}
              >
                {shape.charAt(0).toUpperCase() + shape.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Frame Color</h3>
          {["black", "brown", "blue"].map((color) => (
            <div key={color} className="filter-option">
              <input
                type="checkbox"
                id={color}
                checked={selectedFilters.color[color]}
                onChange={() => toggleFilter("color", color)}
              />
              <label
                htmlFor={color}
                style={{
                  color: selectedFilters.color[color] ? "orange" : "black",
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Frame Size</h3>
          {["small", "medium", "large"].map((size) => (
            <div key={size} className="filter-option">
              <input
                type="checkbox"
                id={size}
                checked={selectedFilters.size[size]}
                onChange={() => toggleFilter("size", size)}
              />
              <label
                htmlFor={size}
                style={{
                  color: selectedFilters.size[size] ? "orange" : "black",
                }}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="filter-group">
          <h3>Price</h3>
          {[
            { label: "Less than ₹1000", value: "lessThan1000" },
            { label: "Less than ₹2000", value: "lessThan2000" },
          ].map(({ label, value }) => (
            <div key={value} className="filter-option">
              <input
                type="checkbox"
                id={value}
                checked={selectedFilters.price[value]}
                onChange={() => toggleFilter("price", value)}
              />
              <label
                htmlFor={value}
                style={{
                  color: selectedFilters.price[value] ? "orange" : "black",
                }}
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </aside>
      <main className="products">
        <div className="product-header">
          <h2>Eyeglasses</h2>
          
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card1" key={product.id}>
              <img src={product.image} alt={product.name} />
              <button
                className="wishlist"
                onClick={() => toggleFavorite(product.id)}
                style={{
                  color: product.isFavorited ? "red" : "transparent",
                  border: "1px solid red",
                }}
              >
                ❤️
              </button>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <p>Inclusive of all taxes</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EyeglassProductWomen;
