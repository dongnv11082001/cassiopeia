import { Modal } from "antd";
import "antd/lib/modal/style/css";

type CartProps = {
  cartItems: IFlower[] | undefined;
  onShow: boolean;
  onCancel: () => void;
  onOkClick: () => void;
};

const Cart: React.FC<CartProps> = ({
  onShow,
  onCancel,
  onOkClick,
  cartItems,
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
      >
        <p>Your cart goes here</p>
      </Modal>
    </>
  );
};

export default Cart;
