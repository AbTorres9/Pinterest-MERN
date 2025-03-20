import React from "react";
import { Link } from "react-router";
import { IKImage } from "imagekitio-react";

function GalleryItem({ item }) {
  return (
    <div
      className="group flex relative
       [grid-row-end:span_5]  /* Dynamic row span */
      "
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img
        src={item.media}
        alt={item.id}
        className="w-full rounded-2xl object-cover"
      /> */}

      {/* https://ik.imagekit.io/c9kxki09y/pins/pin25.jpeg?updatedAt=1742478499835 */}

      <IKImage
        urlEndpoint={import.meta.env.VITE_URL_IMAGEKIT_ENDPOINT}
        path={item.media}
        className="w-full rounded-2xl object-cover"
        transformation={[
          {
            // height: 200,
            width: 500,
          },
        ]}
        loading="lazy"
        lqip={{ active: true, quality: 30 }}
      />

      {/* Overlay */}

      <Link
        to={"/pin/item.id"}
        className=" hidden group-hover:block
        absolute inset-0 bg-black/30
        rounded-2xl"
      ></Link>

      {/* Save Button */}

      <button
        className="  hidden group-hover:block
        absolute top-4 right-4
        bg-[#e50829] text-white
        rounded-[24px] py-3 px-4
        font-medium cursor-pointer border-none w-max"
      >
        Save
      </button>

      {/* Overlay Icons */}

      <div
        className=" hidden group-hover:flex
        absolute bottom-4 right-4
        items-center gap-2"
      >
        <button
          className="  w-8 h-8 rounded-full bg-white
        flex items-center justify-center
        cursor-pointer border-none
        hover:bg-[#f1f1f1]"
        >
          <img src="/general/share.svg" alt="" />
        </button>
        <button
          className="  w-8 h-8 rounded-full bg-white
        flex items-center justify-center
        cursor-pointer border-none
        hover:bg-[#f1f1f1]"
        >
          <img src="/general/share.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default GalleryItem;
