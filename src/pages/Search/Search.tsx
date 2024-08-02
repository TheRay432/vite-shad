import React from "react";
import SearchCondition from "@/pages/Search/components/SearchCondition";

const Search: React.FC = () => {
  return (
    <>
      {/* 條件篩選 */}
      <div className="w-1/3">
        <SearchCondition />
      </div>
      <div className="w-2/3"></div>
      {/* 產品列表 */}
    </>
  );
};

export default Search;
