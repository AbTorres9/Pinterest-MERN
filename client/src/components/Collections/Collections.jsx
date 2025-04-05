import React from "react";
import { Image } from "../index.js";

function Collections() {
  return (
    <div className="w-full grid grid-cols-7 gap-4">
      {Array.from({ length: 25 }).map((_, index) => (
        <div key={index} className="mb-16 cursor-pointer">
          <Image
            className="w-full h-full object-cover rounded-2xl"
            path={`/pins/pin${(index % 5) + 1}.jpeg`} // Cycles through pin1.jpeg to pin5.jpeg
            alt=""
          />
          <div className="flex flex-col gap-2 mt-2">
            <h1 className="font-medium text-sm">Minimalist Bedrooms</h1>
            <span className="text-gray-400 text-sm">12 Pins : 1w</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collections;
