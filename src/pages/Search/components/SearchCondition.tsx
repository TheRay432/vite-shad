import React from "react";
import IconButton from "@/components/custom/IconButton/IconButton";
import RCheckbox from "@/components/custom/RCheckbox/RCheckbox";
import CollapseBtn from "@/components/custom/Button/CollapseBtn/CollapseBtn";
import RCollapsible from "@/components/custom/RCollapsible/RCollapsible";

/** 模擬資料 */
const applianceCategories = [
  { id: "kitchen", text: "廚房電器" },
  { id: "livingroom", text: "客廳電器" },
  { id: "bedroom", text: "臥室電器" },
  { id: "bathroom", text: "浴室電器" },
  { id: "laundry", text: "洗衣電器" },
  { id: "cleaning", text: "清潔電器" },
  { id: "homeoffice", text: "家庭辦公室電器" },
  { id: "other", text: "其他電器" },
];
const SearchCondition: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  /** 預設顯示幾個選項 */
  const displayCount = 4;
  /** 是否顯示更多 */
  const handleToggle = () => setIsOpen(!isOpen);
  /** 預設顯示的選項 */
  const displayList = applianceCategories.slice(0, displayCount);
  /** 收合起來的選項 */
  const hiddenList = applianceCategories.slice(displayCount);

  return (
    <>
      <div className="flex items-center -mx-2">
        <IconButton icon="bi bi-menu-button-wide" color="black" size="2xl" />
        <h1>條件篩選</h1>
      </div>
      <div>
        <h2 className="mb-4">分類</h2>
        {displayList.map((category) => (
          <div className="mb-6" key={category.id}>
            <RCheckbox id={category.id} labelName={category.text} />
          </div>
        ))}
        <RCollapsible isOpen={isOpen} setIsOpen={setIsOpen}>
          {hiddenList.map((category) => (
            <div className="mb-6" key={category.id}>
              <RCheckbox id={category.id} labelName={category.text} />
            </div>
          ))}
        </RCollapsible>
        <CollapseBtn isOpen={isOpen} handleToggle={handleToggle} />
      </div>
    </>
  );
};

export default SearchCondition;
