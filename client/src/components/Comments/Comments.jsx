import React, { useState } from "react";
import { Image } from "../index.js";
import EmojiPicker from "emoji-picker-react";

function Comments() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 gap-4 min-h-0">
      <div className="flex flex-col flex-1 gap-4 overflow-y-auto min-h-0">
        <span className="">5 comments</span>
        {/* COMMENT */}
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Doe</span>
            <p className="text-sm">this is random comment</p>
            <span className="text-xs">1h</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Doe</span>
            <p className="text-sm">this is random comment</p>
            <span className="text-xs">1h</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Doe</span>
            <p className="text-sm">this is random comment</p>
            <span className="text-xs">1h</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Doe</span>
            <p className="text-sm">this is random comment</p>
            <span className="text-xs">1h</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            path="/general/noAvatar.png"
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">John Doe</span>
            <p className="text-sm">this is random comment</p>
            <span className="text-xs">1h</span>
          </div>
        </div>
      </div>
      <form className="bg-gray-200 p-4 rounded-2xl flex items-center gap-4">
        <input
          type="text"
          placeholder="Add a comment"
          className="flex-1 border-none outline-none bg-transparent text-base"
        />
        <div className="cursor-pointer text-xl relative">
          <div onClick={() => setOpen((prev) => !prev)}>:)</div>
          {open && (
            <div className="absolute right-0 bottom-12">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Comments;
