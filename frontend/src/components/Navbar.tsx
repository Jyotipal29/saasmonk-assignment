import { useCritic } from "../context.tsx";
const Navbar = () => {
  const { setMovieMode, setReviewMode } = useCritic();
  return (
    <div className=" bg-gray-200 ">
      <div className="h-[80px]  flex justify-between  items-center  w-full  max-w-[1400px] px-[20px] m-auto ">
        <div className="uppercase text-2xl font-bold  ">moviecritic</div>

        <div className="flex gap-10">
          <button
            className=" border-2 border-purple-500   py-2 text-[20px]  capitalize text-purple-600  bg-white rounded-md px-2"
            onClick={() => setMovieMode("add")}
          >
            add new movie
          </button>
          <button
            className=" border-2 border-purple-500   py-2 text-[20px]  text-white  capitalize  bg-purple-600 rounded-md px-2"
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
