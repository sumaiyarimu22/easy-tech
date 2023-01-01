import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://t3.ftcdn.net/jpg/02/78/57/76/360_F_278577660_RjmZ7DfiMUAcAi90j7XlGwhcZHLUdRNu.jpg",
    headline: "DSLR cameras for stunning photos",
    body: "Are you an aspiring photographer looking to take your skills to the next level? Our DSLR cameras offer advanced features and high-quality image sensors to help you capture stunning photos. From landscape shots to portraits, these cameras are perfect for capturing all types of subjects.",
    cta: "Shop DSLR cameras now",
    category: "camera",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/6976102/pexels-photo-6976102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Upgrade your home entertainment with our TVs",
    body: "Experience the latest in home entertainment with our selection of TVs. From sleek and modern designs to advanced features like 4K resolution and smart capabilities, our TVs will bring your favorite movies, TV shows, and streaming content to life.",
    cta: "Shop TVs and upgrade now",
    category: "tv",
  },
  {
    id: 3,

    src: "https://img.freepik.com/premium-photo/hand-holds-headphones-through-hole-yellow-background_253401-7350.jpg",
    headline: "Enhance your listening experience",
    body: "Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.",
    cta: "Experience enhanced sound",
    category: "earphone",
  },
  {
    id: 4,

    src: "https://img.freepik.com/premium-photo/gamepad-connected-wire-from-game-console-yellow-background_81262-800.jpg?w=2000",

    headline: "Take your gaming to the next level",
    body: "Elevate your gaming experience with our selection of gaming consoles. From the latest models to classic systems, we have a console for every type of gamer. Our consoles offer advanced graphics, fast processing speeds, and a variety of exclusive games to choose from.",
    cta: "Shop consoles and play now",
    category: "consoles",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1597038519284-aa729dd6d720?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2MzMwOTYzN3x8ZW58MHx8fHw%3D&w=1000&q=80",
    headline: "Stay connected with smart watches",
    body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
    cta: "Connect with a smart watch",
    category: "watch",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className="btns absolute left-0 right-0 bottom-20 m-auto w-fit z-[1] text-2xl flex gap-10">
        <button
          onClick={prevSlide}
          className="prev-btn h-14 w-20 flex justify-center items-center hover:bg-cyan-900 hover:text-cyan-200 border-1 hover:border-cyan-200 bg-teal-600 text-teal-200 border-teal-200 duration-300"
        >
          <span>
            <GoChevronLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn  h-14 w-20 flex justify-center items-center hover:bg-cyan-900 hover:text-cyan-200 border-1 hover:border-cyan-200 bg-teal-600 text-teal-200 border-teal-200 duration-300"
        >
          <span>
            <GoChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
