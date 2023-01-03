import React from "react";
import { AiOutlineLike } from "react-icons/ai";

const Post = ({ data }) => {
  return (
    <div className="py-5 bg-white rounded-lg shadow my-5">
      <div className="py-3 px-5">
        <h1 className="text-md font-medium">{data.name}</h1>
      </div>

      <div className="pb-2 px-5">
        <p>{data.desc}</p>
      </div>

      <div>
        <img src={data.image} alt="post" height={500} width={500} />
      </div>

      <div className="px-4 py-2">
        <AiOutlineLike size={22} />
      </div>

      <div className="px-4">
        <div className="flex border-t-2 border-b-2 p-1 justify-between">
          <button className=" px-20 py-2 hover:bg-gray-200 rounded-sm duration-75">
            Like
          </button>
          <button className=" px-20 py-2 hover:bg-gray-200 rounded-sm duration-75">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
