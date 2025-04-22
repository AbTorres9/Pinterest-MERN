import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import apiRequest from "../../utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addComment = async (comment) => {
  const res = await apiRequest.post("/comments", comment);
  return res.data;
};

function CommentForm({ id }) {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + " " + emoji.emoji);
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
      setDesc("");
      setOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutation.mutate({
      description: desc,
      pin: id,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-4 rounded-2xl flex items-center gap-4"
      >
        <input
          type="text"
          placeholder="Add a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="flex-1 border-none outline-none bg-transparent text-base"
        />
        <div className="cursor-pointer text-xl relative">
          <div onClick={() => setOpen((prev) => !prev)}>:)</div>
          {open && (
            <div className="absolute right-0 bottom-12">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      </form>
    </>
  );
}

export default CommentForm;
