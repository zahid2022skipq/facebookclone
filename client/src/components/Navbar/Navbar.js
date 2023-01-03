import React from "react";
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";

import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex w-full h-16 bg-white shadow-lg px-3 items-center justify-between fixed">
      <div className="flex flex-row">
        <img className="h-14" src={Logo} alt="logo" />

        <div className="flex-row flex ml-2 h-10 w-60 rounded-full mt-2  bg-gray-100 justify-center align-middle items-center">
          <div className="mx-2 pt-2">
            <AiOutlineSearch size={24} />
          </div>
          <div className="">
            <input
              className="align-middle border-none outline-none bg-gray-100"
              placeholder="search"
            />
          </div>
        </div>
      </div>

      <div>
        <button>
          <AiOutlineHome size={30} color="#0E8EF2" />
        </button>
      </div>

      <div></div>
      <div>
        <button className="bg-sky-500 px-8 py-2 text-black">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
