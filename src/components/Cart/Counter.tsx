import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  item: IProduct
  handleIncrease: (item: IProduct) => void;
  handleDecrease: () => void;
};

export const Counter: React.FC<Props> = ({
  item,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <CounterContainer>
      <div className="btn" onClick={handleDecrease}>
        <button className="btn" disabled={item.amount > 0 && item.amount <= 1}>
          -
        </button>
      </div>
      <div className="amount">{item.amount >= 1 && item.amount}</div>
      <div className="btn" onClick={() => handleIncrease(item)}>
        +
      </div>
      {item.amount > 1 && <StyledPrice>${item.amount * item.price}</StyledPrice>}
    </CounterContainer>
  );
};
export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;

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
    outline: none;
    border: none;
  }
`;

const StyledPrice = styled.p`
  color: red;
  text-align: center;
  padding: 0;
  margin: 0;
`;
