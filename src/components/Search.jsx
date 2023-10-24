import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ value, setvalue }) => {
  return (
    <div className="seach-bar flex justify-center items-center border-2 border-blue-500 rounded-full w-2/3 mx-auto my-12 shadow-xl">
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        className="relative w-full text-lg sm:text-2xl px-6 border-0 bg-transparent focus:outline-0"
        placeholder="Search..."
      />
      <button className="submit relative cursor-pointer text-lg sm:text-2xl text-white rounded-[500px] bg-indigo-600 sm:w-14 sm:h-14 h-10 w-10">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default Search;
