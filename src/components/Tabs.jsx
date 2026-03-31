import React from "react";

const Tabs = ({ setCurrentFilter, currentFilter }) => {
  const tabsData = [
    { isActive: true, tabName: "All", id: Math.random() },
    { isActive: false, tabName: "Active", id: Math.random() },
    { isActive: false, tabName: "Completed", id: Math.random() },
  ];

  return (
    <div className="flex gap-4">
      {tabsData.map((tab, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setCurrentFilter(tab.tabName);
            }}
            className={`border rounded-lg border-black-500 py-2 px-3
        ${tab.tabName == currentFilter ? "bg-green-300" : null} `}
          >
            {tab.tabName}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
