import { useContext, useState } from "react";
import styled from "styled-components";

type CounterProps = {
  id?: string;
  cartItems: IFlower[]
  quantity: number;
};

export const Counter = ({ id, quantity, cartItems }: CounterProps) => {
    const [itemQuantity, setItemQuantity] = useState<IFlower[]>([])

  const handleIncrease = () => {
    const updater = cartItems?.map((item) => {
      if (item.id === id) return { ...item, amount: item.amount + 1 };
      return item;
    });
    setItemQuantity(updater);
    localStorage.setItem("products", JSON.stringify(updater));
  };
  const handleDecrease = () => {
    if (quantity <= 1) return;

    const updater = cartItems?.map((item) => {
      if (item.id === id) return { ...item, amount: item.amount - 1 };
      return item;
    });
    setItemQuantity(updater);
  };

  return (
    <CounterContainer>
      <div className="btn" onClick={handleDecrease}>
        -
      </div>
      <div className="amount">{quantity}</div>
      <div className="btn" onClick={handleIncrease}>
        +
      </div>
    </CounterContainer>
  );
};
export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  .amount {
    font-size: 1.1rem;
  }
  .btn {
    cursor: pointer;
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: #eee;
    text-align: center;
    line-height: 22px;
    font-size: 1.4rem;
    user-select: none;
  }
`;
