import React from "react";
import "./UserTitleCard.css";

export default function UserTitleCard() {
  return (
    <div className="max-w-sm ml-64">
      <div className="flex flex-col items-start pb-10">
        <img
          className="w-28 h-28 mb-3 rounded-full shadow-lg border"
          src="/preethamprofileimage.jpeg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-4xl font-medium text-gray-900 dark:text-white">
          Preetham B
        </h5>
        <span className="text-md text-gray-500 dark:text-gray-400">
          Senior Frontend Engineer | Bangalore, IN
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          I develop scalable, efficient software solutions and dynamic
          micro-frontends, enhancing system performance and reducing integration
          time.
        </span>
      </div>
    </div>
  );
}
