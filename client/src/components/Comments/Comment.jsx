import React from "react";
import { Image } from "../index";
import { format } from "timeago.js";

function Comment({ comment }) {
  return (
    <>
      <div className="flex gap-4">
        <Image
          src={comment.user.img || "/general/noAvatar.png"}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">
            {comment.user.displayName}
          </span>
          <p className="text-sm">{comment.description}</p>
          <span className="text-xs">{format(comment.createdAt)}</span>
        </div>
      </div>
    </>
  );
}

export default Comment;
