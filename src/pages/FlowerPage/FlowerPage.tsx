import React from "react";
import ProductList from "../../components/common/Content/ProductList/ProductList";

const FlowerPage: React.FC = () => {
  return (
    <div>
      <ProductList endpoint={"/flowers"} />
    </div>
  );
};

export default FlowerPage;
