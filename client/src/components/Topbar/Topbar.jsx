import React from "react";
import { UserButton, Image } from "../index.js";

function Topbar() {
  return (
    <>
      <div className="my-4 flex items-center gap-4">
        <div className="flex-1 bg-[#f1f1f1] rounded-2xl p-4 flex items-center gap-4">
          <Image path="/general/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent border-none outline-none text-[18px]"
          />
        </div>
        {/* USER */}
        <UserButton />
      </div>
    </>
  );
}

export default Topbar;
