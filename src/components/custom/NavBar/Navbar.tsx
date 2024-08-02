import React from "react";
import BaseContainer from "@/components/custom/Container/BaseContainer";
import IconButton from "@/components/custom/IconButton/IconButton";
import { Input } from "@/components/ui/input";
import { createSearchParams, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  /** 點擊搜尋事件 */
  const handleSearch = () => {
    if(!inputRef.current) return;
    navigate({
      pathname: '/search',
      search: createSearchParams({ keyword: inputRef.current.value }).toString()
    })
    
  }
  /** 回首頁 */
  const handleToHome = () => {
    navigate('/');
  }
  return (
    <>
      <nav className="bg-primary w-full">
        <BaseContainer>
          {/* 使用者資訊 */}
          <div className="flex justify-between items-center">
            {/* 左邊資訊 */}
            <div className="flex text-white text-sm gap-x-2">
              <span>賣家中心</span>
              <div className="w-1 bg-orange-400"></div>
              <span>下載</span>
            </div>
            {/* 右邊登出功能 */}
            <div className="flex text-white text-sm gap-x-2">
              <span>使用者1</span>
              <div className="w-1 bg-orange-400"></div>
              <span>登入</span>
            </div>
          </div>
          {/* 搜尋列 */}
          <div className="mt-4 flex items-center flex-wrap">
            <h1 className="text-white text-3xl cursor-pointer" onClick={handleToHome}>XX拍賣</h1>
            <div className="flex grow items-center gap-x-4">
              <div className="w-full ml-4">
                <Input type="search" ref={inputRef} />
              </div>
              <IconButton icon="bi bi-search" clickEvent={handleSearch} hasborder />
              <IconButton icon="bi bi-cart-plus" hasborder />
            </div>
          </div>
        </BaseContainer>
      </nav>
    </>
  );
};

export default Navbar;
