import React from "react";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const PageIndicator: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  return (
    <div
      className="capitalize border-b dark:border-b-light-gray-100 py-6 flex 
    flex-col md:flex-row gap-6 md:items-center justify-between dark:text-white"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaHome size={23} />
          Home
        </div>{" "}
        <span className="text-deep-grey-500">/</span>{" "}
        {location.pathname.slice(11).replace("-", " ")}
      </div>
      {children}
    </div>
  );
};

export default PageIndicator;
