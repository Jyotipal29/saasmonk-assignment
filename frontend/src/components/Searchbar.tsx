const Searchbar = ({ text, setSearch, search }) => {
  return (
    <div className="max-w-[600px] border-2 border-purple-600 h-[60px]  rounded-md ">
      <input
        placeholder={text}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" w-full h-full px-4  outline-none  rounded-md  text-lg md:text-2xl  font-semibold"
        autoFocus
      />
    </div>
  );
};

export default Searchbar;
