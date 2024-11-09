import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full xl:max-w-[1400px] lg:max-w-[1400px] md:max-w-[1000px] sm:max-w-[800px] mx-auto px-6">
      {children}
    </div>
  );
};

export default Container;
