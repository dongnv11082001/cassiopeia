import React from "react";
import ProductList from "../../components/Content/ProductList/ProductList";

const GiftPage: React.FC = () => {
    return (
        <div>
            <ProductList endpoint={'/flowers'}/>
        </div>
    )
}

export default GiftPage