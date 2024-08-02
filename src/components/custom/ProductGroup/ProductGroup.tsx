import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductData } from "@/pages/Home/components/TodayNew";

interface ProductGroupProps {
  products: ProductData[];
  noPaginator?: boolean;
}

const ProductGroup: React.FC<ProductGroupProps> = ({ products }) => {
  return (
    <>
      <div className="flex flex-wrap -mx-2">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 p-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{product.content}</CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGroup;
