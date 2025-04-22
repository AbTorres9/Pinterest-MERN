import React, { useState } from "react";
import { Comment, CommentForm } from "../index.js";
import EmojiPicker from "emoji-picker-react";
import apiRequest from "../../utils/apiRequest.js";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

function Comments({ id }) {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "Comments not found!";

  return (
    <div className="flex flex-col flex-1 gap-4 min-h-0">
      <div className="flex flex-col flex-1 gap-4 overflow-y-auto min-h-0">
        <span className="">
          {data.length !== 0 ? `${data.length} comments` : "No comments"}
        </span>
        {/* COMMENT */}
        {data.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <CommentForm id={id} />
    </div>
  );
}

export default Comments;
