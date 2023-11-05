import React from "react";

const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;
      case "started":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-red-200";
        return color;
    }
    return color;
  };
  return (
    <div
      className={`inline-block rounded-full px-2 py-1 tet-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
