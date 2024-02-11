import React from "react";
import Header from "../header/header";

const Events: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center bg-background min-h-screen py-2">
        <h1 className="text-4xl font-bold font-satoshiBold text-[#C4CDCF]">
          Events
        </h1>
      </div>
    </div>
  );
};

export default Events;
