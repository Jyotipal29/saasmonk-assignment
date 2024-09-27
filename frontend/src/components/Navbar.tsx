import { useCritic } from "../context.tsx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setMovieMode, setReviewMode } = useCritic();
  return (
    <div className=" bg-gray-200 ">
      <div className="h-[80px] flex flex-col  items-center   md:flex-row md:justify-between  md:items-center  w-full  max-w-[1400px] px-[20px] m-auto ">
        <div className="uppercase  text-lg md:text-2xl font-bold mt-2 ">
          <Link to="/">moviecritic</Link>
        </div>

        <div className="flex  gap-5 md:gap-10">
          <button
            className=" border-2 border-purple-500 p-1  md:py-2  text-[14px] md:text-[20px]  capitalize text-purple-600  bg-white rounded-md md:px-2"
            onClick={() => setMovieMode("add")}
          >
            add new movie
          </button>
          <button
            className=" border-2 border-purple-500  p-1  md:py-2  text-[14px] md:text-[20px]  text-white  capitalize  bg-purple-600 rounded-md md:px-2"
            onClick={() => setReviewMode("add")}
          >
            add new review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
