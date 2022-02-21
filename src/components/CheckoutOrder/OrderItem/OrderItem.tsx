import React from "react";
import { CartItemContainer } from "../../common/Cart/CartItem";

type Props = {
  item: IProduct;
};

const OrderItem: React.FC<Props> = ({ item }) => {
  return (
    <CartItemContainer>
      <div className="image-wrapper">
        <img src={item.image} alt="avatar" style={{ width: "100px" }} />
      </div>{" "}
      <div className="control-center">
        <div className="top-center">
          <div className="product-name">{item.name}</div>
          <div className="price">${item.price}</div>
        </div>
        <div className="bottom-center">
          <div className="left-bottom-center">
            <div className="quantity">
              <span>Quantity: {item.amount}</span>
            </div>
            <div className="total-price">
              {item.amount > 1 && "$" + item.amount * item.price}
            </div>
          </div>
        </div>
      </div>
    </CartItemContainer>
  );
};

export default OrderItem;
