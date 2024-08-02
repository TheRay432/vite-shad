import ProductGroup from "@/components/custom/ProductGroup/ProductGroup";
import React from "react";

export interface ProductData {
  id: number;
  title: string;
  content: string;
}
const TodayNew: React.FC = () => {
  // 模擬產品數據
  const products: ProductData[] = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    content: `This is the content for card ${
      i + 1
    }. It might be a bit longer to show how the cards handle varying content lengths.`,
  }));
  return (
    <>
      <div className="text-center text-primary my-4 shadow-lg pb-4 border-b-4 border-primary">
        每日新發現
      </div>
      <ProductGroup products={products} />
    </>
  );
};

export default TodayNew;
