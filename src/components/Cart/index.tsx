import { Modal } from "antd";
import "antd/lib/modal/style/css";
import styled from "styled-components";
import { CartModal } from "./CartModal";

type CartProps = {
  cartItems: IFlower[] | undefined;
  onShow: boolean;
  onCancel: () => void;
  onOkClick: () => void;
  onRemove: (id: string) => void;
};

const Cart: React.FC<CartProps> = ({
  onShow,
  onCancel,
  onOkClick,
  cartItems,
  onRemove,
}) => {
  return (
    <>
      <Modal
        title="Your cart"
        visible={onShow}
        onCancel={onCancel}
        onOk={onOkClick}
        style={{ top: 50, right: -312 }}
        mask={false}
        closable={false}
      >
        {cartItems?.length === 0 && (
          <Text>
            <h2>Your cart is empty</h2>
            <p>Next step: add a product to your cart</p>
          </Text>
        )}
        {cartItems?.length! > 0 &&
          cartItems?.map((item) => (
            <CartModal
              cartItems={cartItems}
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={onRemove}
            />
          ))}
      </Modal>
    </>
  );
};

const Text = styled.div`
  text-align: center;
`;

export default Cart;
