import React from "react";

const BaseContainer: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <div className="flex">
      <div className="max-w-container mx-auto grow py-2 px-4 xl:px-0">
        {children}
      </div>
    </div>
  );
};

export default BaseContainer;
