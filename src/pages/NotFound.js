import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto mt-20 text-center">
      <h2 className="text-8xl font-bold text-rose-500">404</h2>
      <p className="text-4xl mb-10">Page not found</p>
      <Link to="/">
        <button className="bg-gray-700 text-gray-50 px-6 py-3 uppercase tracking-widest font-medium hover:bg-teal-500 duration-300">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
