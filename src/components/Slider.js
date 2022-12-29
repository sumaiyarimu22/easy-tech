import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "DSLR cameras for stunning photos",
    body: "Are you an aspiring photographer looking to take your skills to the next level? Our DSLR cameras offer advanced features and high-quality image sensors to help you capture stunning photos. From landscape shots to portraits, these cameras are perfect for capturing all types of subjects.",
    cta: "Shop DSLR cameras now",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Upgrade your home entertainment with our TVs",
    body: "Experience the latest in home entertainment with our selection of TVs. From sleek and modern designs to advanced features like 4K resolution and smart capabilities, our TVs will bring your favorite movies, TV shows, and streaming content to life.",
    cta: "Shop TVs and upgrade now",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/9227558/pexels-photo-9227558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Enhance your listening experience",
    body: "Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.",
    cta: "Experience enhanced sound",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Take your gaming to the next level",
    body: "Elevate your gaming experience with our selection of gaming consoles. From the latest models to classic systems, we have a console for every type of gamer. Our consoles offer advanced graphics, fast processing speeds, and a variety of exclusive games to choose from.",
    cta: "Shop consoles and play now",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/7776215/pexels-photo-7776215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Stay connected with smart watches",
    body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
    cta: "Connect with a smart watch",
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
          className="prev-btn h-14 w-20 flex justify-center items-center hover:bg-cyan-900 hover:text-cyan-200 border-2 hover:border-cyan-200 bg-teal-600 text-teal-200 border-teal-200 duration-300"
        >
          <span>
            <GoChevronLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn  h-14 w-20 flex justify-center items-center hover:bg-cyan-900 hover:text-cyan-200 border-2 hover:border-cyan-200 bg-teal-600 text-teal-200 border-teal-200 duration-300"
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
