import React from "react";
import { Image } from "../components/index.js";

function CreatePage() {
  return (
    <div className="">
      <div className="border-t border-b border-gray-200 py-4 flex items-center justify-between">
        <h1 className="text-xl font-medium">Create Pin</h1>
        <button className="bg-red-600 text-white font-medium border-none outline-none px-4 py-3 rounded-full cursor-pointer text-sm hover:bg-red-700">
          Publish
        </button>
      </div>
      <div className="flex justify-center gap-16 mt-8 max-[1104px]:flex-col max-[1104px]:items-center max-[1104px]:mb-16">
        <div className="bg-white cursor-pointer text-lg flex items-center justify-center border-2 border-dashed border-gray-300 rounded-4xl w-[375px] h-[574px] relative max-[475px]:w-full">
          <div className="flex flex-col gap-4 items-center">
            <Image path="/general/upload.svg" alt="" />
            <span>Choose a file</span>
          </div>
          <div className="absolute bottom-8 text-xs text-center text-gray-500">
            We recomment using high quality jpg files less than 20 MB or mp4
            files less than 200 MB
          </div>
        </div>
        <form
          action=""
          className="flex flex-col gap-4 w-[584px] max-[768px]:w-full"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm text-gray-500">
              Title
            </label>
            <input
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
              className="text-base border-solid border-[#e9e9e9] border-2 p-4 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm text-gray-500">
              Description
            </label>
            <textarea
              rows={6}
              type="text"
              placeholder="Add a Description"
              name="description"
              id="description"
              className="text-base border-solid border-[#e9e9e9] border-2 p-4 rounded-md resize-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="link" className="text-sm text-gray-500">
              Link
            </label>
            <input
              type="text"
              placeholder="Add a Link"
              name="link"
              id="link"
              className="text-base border-solid border-[#e9e9e9] border-2 p-4 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="board" className="text-sm text-gray-500">
              Board
            </label>
            <select
              name="board"
              id="board"
              className="text-base border-solid border-[#e9e9e9] border-2 p-4 rounded-md"
            >
              <option>Choose a board</option>
              <option value="1">Board 1 </option>
              <option value="2">Board 2 </option>
              <option value="3">Board 3</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="tags" className="text-sm text-gray-500">
              Tagged topics
            </label>
            <input
              type="text"
              placeholder="Add tags"
              name="tags"
              id="tags"
              className="text-base border-solid border-[#e9e9e9] border-2 p-4 rounded-md"
            />
            <small className="text-[#a6a6a6] text-sm pb-15">
              Don't worry people won't see your tags.
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
