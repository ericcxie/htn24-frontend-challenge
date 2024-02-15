import React from "react";

type TabComponentProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const TabComponent: React.FC<TabComponentProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1 grid-cols-2">
      <li className="flex justify-center">
        <button
          onClick={() => setActiveTab("public")}
          className={`w-full py-2 ${
            activeTab === "public"
              ? "bg-white rounded-lg shadow text-black"
              : ""
          }`}
        >
          Public
        </button>
      </li>
      <li className="flex justify-center">
        <button
          onClick={() => setActiveTab("private")}
          className={`w-full py-2 ${
            activeTab === "private"
              ? "bg-white rounded-lg shadow text-black"
              : ""
          }`}
        >
          Hackers
        </button>
      </li>
    </ul>
  );
};

export default TabComponent;
