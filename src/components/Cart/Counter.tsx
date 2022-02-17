import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  price: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  quantity: number;
};

export const Counter: React.FC<Props> = ({
  price,
  handleIncrease,
  handleDecrease,
  quantity,
}) => {
  return (
    <CounterContainer>
      <div className="btn" onClick={handleDecrease}>
        <button className="btn" disabled={quantity === 1}>
          -
        </button>
      </div>
      <div className="amount">{quantity >= 1 && quantity}</div>
      <div className="btn" onClick={handleIncrease}>
        +
      </div>
      {quantity > 1 && <StyledPrice>${quantity * price}</StyledPrice>}
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
