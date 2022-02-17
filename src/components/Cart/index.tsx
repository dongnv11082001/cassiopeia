import { Modal } from "antd";
import "antd/lib/modal/style/css";
import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../context";
import AddedItem from "./AddedItem";
import { CartItem } from "./CartItem";

type CartProps = {
  onShow: boolean;
  onCancel: () => void;
  onOkClick: () => void;
};

const Cart: React.FC<CartProps> = ({ onShow, onCancel, onOkClick }) => {
  const CartContext = useContext(StoreContext);

  return (
    <>
      <Modal
        title="Your cart"
        visible={onShow}
        onCancel={onCancel}
        onOk={onOkClick}
        style={{ top: 50, right: -312 }}
        mask={false}
        footer={false}
        closable={false}
      >
        {CartContext?.cartItems?.length === 0 && (
          <Text>
            <h2>Your cart is empty</h2>
            <p>Next step: add a product to your cart</p>
          </Text>
        )}
        {CartContext?.cartItems?.length! > 0 && (
          <>
            {CartContext?.cartItems?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
            <AddedItem />
          </>
        )}
      </Modal>
    </>
  );
};

const Text = styled.div`
  text-align: center;
`;

export default Cart;
