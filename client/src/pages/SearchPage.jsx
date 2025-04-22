import React from "react";
import { useSearchParams } from "react-router";
import { Gallery } from "../components/index.js";

function SearchPage() {
  let [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const boardId = searchParams.get("boardId");
  return (
    <>
      <Gallery search={search} boardId={boardId} />
    </>
  );
}

export default SearchPage;
