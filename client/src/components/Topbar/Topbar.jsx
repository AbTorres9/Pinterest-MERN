import React from "react";
import { UserButton, Image } from "../index.js";
import { useNavigate } from "react-router";

function Topbar() {
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    e.preventDefault();

    navigate(`/search?search=${e.target[0].value}`);
  };
  return (
    <>
      <div className="my-4 flex items-center gap-4">
        <form
          onSubmit={handleSumbit}
          className="flex-1 bg-[#f1f1f1] rounded-2xl p-4 flex items-center gap-4"
        >
          <Image path="/general/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent border-none outline-none text-[18px]"
          />
        </form>
        {/* USER */}
        <UserButton />
      </div>
    </>
  );
}

export default Topbar;
