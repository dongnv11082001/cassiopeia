import React from "react";
import ProductList from "../../components/common/Content/ProductList/ProductList";

const DiscountsPage: React.FC = () => {
  return (
    <div>
      <ProductList endpoint={"/flowers"} />
    </div>
  );
};

export default DiscountsPage;
