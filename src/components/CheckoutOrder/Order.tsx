import React from "react";
import styled from "styled-components";

const Order = () => {
  return (
      <OrderWrapper>
          <div>
              <Name>Order total ({0})</Name>
          </div>
          <Field>
              <span>Shipping</span>
              <span>FREE</span>
          </Field>
          <Field>
              <span>Order Total</span>
              <span>${0.00}</span>
          </Field>
      </OrderWrapper>
  )
}

const OrderWrapper = styled.div`
  width: 440px;
  padding: 20px;
  border: 1px solid #f0f0f5;
  border-radius: 8px;
`

const Name = styled.h2`
  margin-bottom: 40px;
`

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f0f0f5;
  padding: 14px 0;
`

export default Order