import React from "react";
import { Gallery, Leftbar, Topbar } from "../components/index";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <div className="w-full flex gap-4">
        <Leftbar />
        <div className="flex-1 mr-4">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
