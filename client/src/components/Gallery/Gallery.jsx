import React from "react";
import { GalleryItem } from "../index.js";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

// const fetchPins = async () => {
//   const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins`);
//   console.log(response, "RES");
//   return response.data;
// };

const fetchPins = async ({ pageParam, search, userId, boardId }) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${
      search || ""
    }&userId=${userId || ""}&boardId=${boardId || ""}`
  );
  return res.data;
};

function Gallery({ search, userId, boardId }) {
  // const { error, data, isPending } = useQuery({
  //   queryKey: ["pins"],
  //   queryFn: fetchPins,
  // });

  // if (error) return "An error occured" + error.message;
  // if (isPending) return "LOADING...";

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    // queryKey: ["pins"],
    // FIXED QUERY KEY
    queryKey: ["pins", search, userId, boardId],
    queryFn: ({ pageParam = 0 }) =>
      fetchPins({ pageParam, search, userId, boardId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  // FIXED: ADD SKELETON LOADING
  if (status === "pending") return "Loading...";
  // if (status === "pending") return <Skeleton />;
  if (status === "error") return "Something went wrong...";

  const allPins = data?.pages.flatMap((page) => page.pins) || [];

  return (
    <>
      <InfiniteScroll
        dataLength={allPins.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<h4>Loading more pins</h4>}
        endMessage={<h3>All Posts Loaded!</h3>}
      >
        <div
          className="grid grid-cols-7 gap-4 auto-rows-[10px]
      2xl:grid-cols-6 
      xl:grid-cols-5 
      lg:grid-cols-4 
      md:grid-cols-3 
      sm:grid-cols-2 
      max-[639px]:grid-cols-1
      "
        >
          {allPins?.map((item) => (
            <GalleryItem key={item._id} item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Gallery;
