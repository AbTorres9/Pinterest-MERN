import React, { useState } from "react";
import { Image, Gallery, Boards } from "../components/index.js";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import apiRequest from "../utils/apiRequest.js";
import { FollowButton } from "./index.js";

function ProfilePage() {
  const [type, setType] = useState("saved");

  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "User not found!";
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        width="100"
        height="100"
        className="w-[100px] h-[100px] rounded-[50%]"
        src={data.img}
        alt=""
      />
      <h1 className="text-4xl font-medium">{data.userName}</h1>
      <span className="font-light text-gray">{data.displayName}</span>
      <div className="font-medium">
        {data.followerCount} followers : {data.followingCount} followings
      </div>
      <div className="flex items-center gap-8">
        <Image path="/general/share.svg" alt="" />
        <div className="flex items-center gap-4">
          <button className="border-0 p-4 rounded-4xl font-bold cursor-pointer">
            Message
          </button>
          <FollowButton
            isFollowing={data.isFollowing}
            username={data.userName}
          />
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
      {type === "created" ? (
        <Gallery userId={data._id} />
      ) : (
        <Boards userId={data._id} />
      )}
    </div>
  );
}

export default ProfilePage;
