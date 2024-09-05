import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import React from "react";

interface CollapseBtnProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const CollapseBtn: React.FC<CollapseBtnProps> = ({ isOpen, handleToggle }) => {
  return (
    <div className="flex items-center cursor-pointer" onClick={handleToggle}>
      <div>{isOpen ? "收起" : "顯示更多"}</div>
      <ChevronDown
        className={classNames(
          "h-4 w-4 transition-transform duration-300 ml-2",
          { "rotate-180": isOpen }
        )}
      />
    </div>
  );
};

export default CollapseBtn;
