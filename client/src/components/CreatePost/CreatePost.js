import React from "react";

import { FaFileUpload } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";

import Profile from "../../assets/images/profile.jpg";

const CreatePost = () => {
  return (
    <div className="flex bg-gray-100 pt-24 justify-center p-4">
      <div className="bg-white p-2 w-5/12 shadow rounded-lg">
        <div className=" flex flex-row justify-between items-center border-b-2 pb-3">
          <img
            className="rounded-full"
            src={Profile}
            alt="profile"
            height="60px"
            width="60px"
          />

          <div className="flex-1 bg-gray-100 h-14  ml-2 rounded-full items-center p-2">
            <input
              className="bg-gray-100 rounded-full p-2 outline-none w-full"
              placeholder="what's on your mind ?"
            />
          </div>
        </div>

        <div className="flex flex-row p-4 justify-around items-center">
          <div className="flex flex-row justify-center items-center px-10 py-3 rounded-lg  hover:bg-gray-100 ">
            <FaFileUpload size={30} color="lighgreen" className="mr-1" />
            <h1>Photo/Video</h1>
          </div>
          <div>
            <BsEmojiSmile />
            <h1>Feeling/activity</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
