import { Link } from "react-router-dom";
const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-texts sm:mx-5 container mx-auto flex flex-col items-start justify-center h-full gap-5 text-gray-400">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl  uppercase font-semibold space-font w-4/5">
          {image.headline}
        </h1>
        <p className="w-3/5  md:text-sm text-xs sm:w-4/5 md:w-3/5">
          {image.body}
        </p>
        <Link
          to={`/products/${image.category}`}
          className="slide-btn uppercase border-1 border-cyan-50 h-14 w-72 hover:text-teal-50 duration-300 font-medium mt-5"
        >
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
