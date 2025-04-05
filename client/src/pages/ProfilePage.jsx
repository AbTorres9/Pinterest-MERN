import React, { useState } from "react";
import { Image, Collections, Gallery } from "../components/index.js";

function ProfilePage() {
  const [type, setType] = useState("saved");
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        width="100"
        height="100"
        className="w-[100px] h-[100px] rounded-[50%]"
        path="/general/noAvatar.png"
        alt=""
      />
      <h1 className="text-4xl font-medium">John Doe</h1>
      <span className="font-light text-gray">@johndoe</span>
      <div className="font-medium">10 followers : 20 followings</div>
      <div className="flex items-center gap-8">
        <Image path="/general/share.svg" alt="" />
        <div className="flex items-center gap-4">
          <button className="border-0 p-4 rounded-4xl font-bold cursor-pointer">
            Message
          </button>
          <button className="border-0 p-4 rounded-4xl font-bold cursor-pointer bg-red-500 text-white">
            Follow
          </button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="flex gap-4 mt-8 mb-4 font-medium">
        <span
          onClick={() => setType("created")}
          className={`cursor-pointer py-2 hover:text-gray-500 border-b-2 transition-all duration-300 ${
            type === "created" ? "border-black" : "border-transparent"
          }`}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={`cursor-pointer py-2 hover:text-gray-500 border-b-2 transition-all duration-300 ${
            type === "saved" ? "border-black" : "border-transparent"
          }`}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
}

export default ProfilePage;
