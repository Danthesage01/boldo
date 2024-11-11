import React from "react";

// const Container = ({ children }) => {
//   return (
//     <div className="w-full xl:max-w-[1400px] lg:max-w-[1300px] md:max-w-[900px] sm:max-w-[700px] mx-auto px-6">
//       {children}
//     </div>
//   );
// };
const Container = ({ children }) => {
  return <div className="w-full lg:w-[90%] mx-auto px-6">{children}</div>;
};
export default Container;
