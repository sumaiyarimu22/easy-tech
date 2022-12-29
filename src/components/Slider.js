import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/440320/pexels-photo-440320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/9227558/pexels-photo-9227558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/7776215/pexels-photo-7776215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
          <div
            className="slide"
            style={{ backgroundImage: `url(${image.src})` }}
            key={image.id}
          ></div>
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
