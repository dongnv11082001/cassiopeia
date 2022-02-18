import "antd/lib/modal/style/css";
import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context/StoreContext";
import AddedItem from "./AddedItem";
import { CartItem } from "./CartItem";

const Cart: React.FC = () => {
  const CartContext = useContext(StoreContext);
  const cartItems = CartContext?.cartItems

  return (
    <>
      {cartItems?.length === 0 && (
        <Text>
          <h2>Your cart is empty</h2>
          <p>Next step: add a product to your cart</p>
        </Text>
      )}
      {cartItems?.length! > 0 && (
        <>
          {CartContext?.cartItems?.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <AddedItem />
        </>
      )}
    </>
  );
};

const Text = styled.div`
  text-align: center;
`;

export default Cart;
