import classNames from "classnames";
import React from "react";

/** props type */
interface IconButtonProps {
  /** 圖示 */
  icon: string;
  /** 圖示顏色 */
  color?: "white" | "black";
  /** 是否有外框 */
  hasborder?: boolean;
  /** 圖示大小 */
  size?: | "md" | "2xl";
  /** 點擊事件 */
  clickEvent?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = "white",
  hasborder,
  size,
  clickEvent
}) => {
  // icon樣式 
  const iconClassName = classNames(
    /** 固定樣式 */
    ["py-2", 'px-3', "rounded-md", "cursor-pointer"],
    //動態樣式
    {
      [`${icon}`]: true,
      [`text-${color}`]: color,
      [`text-${size}`]: size,
      "border border-white": hasborder,
    }
  );
  /** 點擊事件 */
  const handleClick = () => {
    clickEvent && clickEvent();
  }
  return (
    <>
      <i className={iconClassName} onClick={handleClick}></i>
    </>
  );
};

export default IconButton;
