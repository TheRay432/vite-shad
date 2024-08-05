import IconButton from "@/components/custom/IconButton/IconButton";
import RCheckbox from "@/components/custom/RCheckbox/RCheckbox";
import React from "react";

/** 模擬資料 */
const applianceCategories = [
  { id: "kitchen", label: "廚房電器" },
  { id: "livingroom", label: "客廳電器" },
  { id: "bedroom", label: "臥室電器" },
  { id: "bathroom", label: "浴室電器" },
  { id: "laundry", label: "洗衣電器" },
];
const SearchCondition: React.FC = () => {
  return (
    <>
      <div className="flex items-center -mx-2">
        <IconButton icon="bi bi-menu-button-wide" color="black" size="2xl" />
        <h1>條件篩選</h1>
      </div>
      <div>
        <h2>分類</h2>
        {applianceCategories.map((category) => (
          <div className="my-6" key={category.id}>
            <RCheckbox id={category.id} labelName={category.label} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchCondition;
