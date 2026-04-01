import React from "react";

export const Delete = ({ clearCompleted }) => {
  return (
    <button
      onClick={() => {
        if (window.confirm("Бүх completed tasks-ийг устгах уу?")) {
          clearCompleted();
        }
      }}
      className="text-red-500"
    >
      clear completed
    </button>
  );
};
