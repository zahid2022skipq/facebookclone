import React from "react";
import Post from "../Post/Post";

const Posts = () => {
  const data = [
    {
      id: "01",
      name: "Zahid Ali",
      desc: "this is test post for development demo",
      image:
        "https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=",
    },
    {
      id: "01",
      name: "Zahid Ali",
      desc: "this is test post for development demo",
      image:
        "https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=",
    },
    {
      id: "01",
      name: "Zahid Ali",
      desc: "this is test post for development demo",
      image:
        "https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=",
    },
    {
      id: "01",
      name: "Zahid Ali",
      desc: "this is test post for development demo",
      image:
        "https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=",
    },
    {
      id: "01",
      name: "Zahid Ali",
      desc: "this is test post for development demo",
      image:
        "https://media.istockphoto.com/id/184944186/photo/quaid-e-azam.jpg?s=612x612&w=0&k=20&c=7mRHDKfBWbpmiTto_w_oMm4EeboU9tEDO_JXke01P5I=",
    },
  ];

  return (
    <div className="flex flow-row w-full bg-gray-100 pt-20 justify-center p-10">
      <div>
        {data.map((data) => (
          <Post data={data} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
