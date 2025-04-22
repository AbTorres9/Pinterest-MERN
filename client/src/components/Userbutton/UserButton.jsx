import React, { useState } from "react";
import { Image } from "../index.js";
import { Link, useNavigate } from "react-router";
import apiRequest from "../../utils/apiRequest.js";
import useAuthStore from "../../utils/authStore.js";

const UserOption = ({ children, to, ...props }) => {
  const className =
    "cursor-pointer p-2 rounded-md hover:bg-gray-100 hover:text-gray-500";

  return to ? (
    <Link to={to} {...props} className={className}>
      {children}
    </Link>
  ) : (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

function UserButton() {
  const [open, setOpen] = useState(false);

  const { currentUser, removeCurrentUser } = useAuthStore();
  console.log(currentUser, "ub");

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return currentUser ? (
    <div className="max-[475px]:hidden flex items-center gap-4 relative">
      <Image
        path={currentUser.img || "/general/noAvatar.png"}
        alt=""
        className="w-9 h-9 rounded-full object-cover"
      />
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Image
          path="/general/arrow.svg"
          alt=""
          className="w-4 h-4 cursor-pointer"
        />
      </div>

      {open && (
        <div
          className="  absolute right-0 top-[120%]
        p-4 rounded-lg bg-white
        z-[999]
        flex flex-col
        text-sm
        shadow-[0_0_4px_1px_rgba(0,0,0,0.177)]"
        >
          <UserOption to={`/user/${currentUser.userName}`}>Profile</UserOption>
          <UserOption>Setting</UserOption>
          <UserOption onClick={handleLogout}>Logout</UserOption>
        </div>
      )}
    </div>
  ) : (
    <Link
      to="/auth"
      className="text-xl p-4 rounded-4xl hover:bg-[#f1f1f1] transition-colors duration-300"
    >
      Login/Signup
    </Link>
  );
}

export default UserButton;
