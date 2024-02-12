import React, { useState } from "react";

type Tab = "HTML" | "React" | "Vue" | "Angular" | "Svelte";

const EventTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("HTML");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full">
      <div className="relative right-0">
        <ul
          className="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60"
          data-tabs="tabs"
          role="list"
        >
          {["HTML", "React", "Vue", "Angular", "Svelte"].map((tab) => (
            <li key={tab} className="z-30 flex-auto text-center">
              <a
                className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ${
                  activeTab === tab ? "bg-white shadow" : ""
                }`}
                onClick={() => handleTabChange(tab as Tab)}
                role="tab"
                aria-selected={activeTab === tab}
              >
                <span className="ml-1">{tab}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventTabs;
