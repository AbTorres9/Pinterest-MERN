import React, { useState } from "react";

const UserOption = ({ children }) => (
  <div className="cursor-pointer p-2 rounded-md hover:bg-gray-100 hover:text-gray-500">
    {children}
  </div>
);

function UserButton() {
  const [open, setOpen] = useState(false);
  let currentUser = true;

  return currentUser ? (
    <div className="max-[475px]:hidden flex items-center gap-4 relative">
      <img
        src="/general/noAvatar.png"
        alt=""
        className="w-9 h-9 rounded-full object-cover"
      />
      <img
        src="/general/arrow.svg"
        alt=""
        className="w-4 h-4 cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
      {open && (
        <div
          className="  absolute right-0 top-[120%]
        p-4 rounded-lg bg-white
        z-[999]
        flex flex-col
        text-sm
        shadow-[0_0_4px_1px_rgba(0,0,0,0.177)]"
        >
          <UserOption>Profile</UserOption>
          <UserOption>Setting</UserOption>
          <UserOption>Logout</UserOption>
        </div>
      )}
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
