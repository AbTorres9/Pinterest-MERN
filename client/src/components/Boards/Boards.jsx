import React from "react";
import { Image } from "../index.js";
import apiRequest from "../../utils/apiRequest.js";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import { Link } from "react-router";

function Boards({ userId }) {
  const { isPending, error, data } = useQuery({
    queryKey: ["collections", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "Collection not found!";
  return (
    <div className="w-full grid grid-cols-7 gap-4">
      {data.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          key={board._id}
          className="mb-16 cursor-pointer"
        >
          <Image
            className="w-full h-full object-cover rounded-2xl"
            src={board.firstPin.media} // Cycles through pin1.jpeg to pin5.jpeg
            alt=""
          />
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="font-medium text-sm">{board.title}</h1>
            <span className="text-gray-400 text-sm">
              {board.pinCount} Pins : {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Boards;
