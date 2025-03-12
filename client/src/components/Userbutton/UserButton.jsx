import React from "react";

function UserButton() {
  let currentUser = true;

  return currentUser ? (
    <div className="flex items-center gap-4">
      <img
        src="/general/noAvatar.png"
        alt=""
        className="w-9 h-9 rounded-full object-cover"
      />
      <img src="/general/arrow.svg" alt="" className="w-4 h-4 cursor-pointer" />
      <div className=""></div>
    </div>
  ) : (
    <a
      href="/"
      className="text-xl p-4 rounded-4xl hover:bg-[#f1f1f1] transition-colors duration-300"
    >
      login/Signup
    </a>
  );
}

export default UserButton;
