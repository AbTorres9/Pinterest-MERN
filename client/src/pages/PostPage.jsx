import React from "react";
import { Image, PostInteractions, Comments } from "../components/index.js";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../utils/apiRequest.js";

function PostPage() {
  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "Pin not found!";

  return (
    <>
      <div className="flex justify-center gap-8">
        <svg
          height="20"
          viewBox="0 0 24 24"
          width="20"
          style={{ cursor: "pointer" }}
        >
          <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
        </svg>
        <div className="w-[70%] max-h-[820px] flex border border-[#e9e9e9] rounded-2xl overflow-hidden">
          {/* lg:w-full lg:mr-4  
           md:flex-col md:max-h-none */}
          <div className="bg-[#c8bcaf]">
            <Image
              src={data.media}
              alt={""}
              width={"736"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 h-full flex flex-col gap-8 p-4 overflow-hidden">
            <PostInteractions />
            <Link
              to={`/${data.user.userName}`}
              className="flex items-center gap-2"
            >
              <Image
                src={data.user.img || "/general/noAvatar.png"}
                className="w-4 h-4 rounded-full"
              />
              <span className="text-sm">{data.user.displayName}</span>
            </Link>
            <Comments id={data._id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
