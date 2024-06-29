import React from "react";

interface ScrollableContainerProps {
  children: React.ReactNode;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
}) => {
  return (
    <div className="bg-gray-400 h-[400px] overflow-y-scroll p-5">
      {children}
    </div>
  );
};

export default ScrollableContainer;
