import React from "react";

export const Register = ({ completedCount, totalCount }) => {
  return (
    <p>
      {completedCount} of {totalCount} tasks completed
    </p>
  );
};
