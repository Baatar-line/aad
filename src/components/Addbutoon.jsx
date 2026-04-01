import React from "react";

export const Addbutoon = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="border-black flex items-center bg-green-300 border rounded-lg p-1 px-4"
    >
      add
    </button>
  );
};
