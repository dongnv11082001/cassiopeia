import React from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem/OrderItem";

type Props = {
    items: IProduct[]
    total: number
}

const Order: React.FC<Props> = ({items, total}) => {
    return (
        <OrderWrapper>
            <div>
                <Name>Order total ({items.length})</Name>
            </div>
            <div className="products">
                {items.map(item => (
                    <OrderItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <Field>
                <span>Shipping</span>
                <span>FREE</span>
            </Field>
            <Field>
                <span>Order Total</span>
                <span>${total}</span>
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