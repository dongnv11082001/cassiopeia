import React from "react";
import ProductList from "../../components/Content/ProductList/ProductList";

const PlantPage: React.FC = () => {
    return (
        <div>
            <ProductList endpoint={'/plants'}/>
        </div>
    )
}

export default PlantPage