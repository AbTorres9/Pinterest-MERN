import React from "react";
import { Image } from "../index.js";
import { Link } from "react-router";

const links = [
  { path: "/general/logo.png", alt: "Logo" },
  { path: "/general/home.svg", alt: "Home" },
  { path: "/general/create.svg", alt: "Create" },
  { path: "/general/updates.svg", alt: "Updates" },
  { path: "/general/messages.svg", alt: "Messages" },
];

// function Leftbar() {
//   return (
//     <>
//       <div className="flex flex-col justify-between  w-[72px] h-screen items-center sticky top-0 p-4 border-r border-[#e9e9e9]">
//         <div className="flex flex-col items-center gap-[24px]">
//           <a
//             href="/"
//             className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
//           >
//             <img src="/general/logo.png" alt="" className="w-6 h-6" />
//           </a>
//           <a
//             href="/"
//             className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
//           >
//             <img src="/general/home.svg" alt="" />
//           </a>
//           <a
//             href="/"
//             className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
//           >
//             <img src="/general/create.svg" alt="" />
//           </a>
//           <a
//             href="/"
//             className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
//           >
//             <img src="/general/updates.svg" alt="" />
//           </a>
//           <a
//             href="/"
//             className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
//           >
//             <img src="/general/messages.svg" alt="" />
//           </a>
//         </div>
//         <a
//           href="/"
//           className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1]"
//         >
//           <img src="/general/messages.svg" alt="" />
//         </a>
//       </div>
//     </>
//   );
// }

// Better DRY CODE below
function Leftbar() {
  return (
    <div className="flex flex-col justify-between w-[72px] h-screen items-center sticky top-0 p-4 border-r border-[#e9e9e9]">
      <div className="flex flex-col items-center gap-6">
        {links.map((link, index) => (
          <Link
            key={index}
            href="/"
            className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1] rounded-lg cursor-pointer"
          >
            <Image path={link.path} alt={link.alt} className="w-6 h-6" />
          </Link>
        ))}
      </div>
      <Link
        href="/"
        className="w-12 h-12 flex items-center justify-center hover:bg-[#f1f1f1] rounded-lg cursor-pointer"
      >
        <Image path="/general/settings.svg" alt="Setting" />
      </Link>
    </div>
  );
}

export default Leftbar;
