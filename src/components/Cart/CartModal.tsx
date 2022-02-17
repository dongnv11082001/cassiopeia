import styled from "styled-components";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import React from "react";
import { Counter } from "./Counter";

type Props = {
  id: string;
  image: string;
  name: string;
  price: number;
  amount: number;
  onRemove: (id: string) => void;
  cartItems: IFlower[]
};

export const CartModal: React.FC<Props> = ({
  id,
  image,
  name,
  price,
  amount,
  onRemove,
  cartItems
}) => {
  return (
    <CartItemContainer>
      <div className="image-wrapper">
        <Img src={image} alt="avatar" />
        <div className="detail-btn-wrapper">
          <Link to={"/flowers/1"}>
            <div className="detail-button">
              <SearchOutlined />
            </div>
          </Link>
        </div>
      </div>
      <div className="control-center">
        <div className="top-center">
          <div className="product-name">{name}</div>
          <div className="price">${price}</div>
        </div>
        <div className="bottom-center">
          <div className="left-bottom-center">
            <Counter cartItems={cartItems} id={id} quantity={amount} />
            <div className="total-price">
              {amount > 1 && "$" + amount * price}
            </div>
          </div>
          <div className="delete-btn" onClick={() => onRemove(id)}>
            {<DeleteOutlined />}
          </div>
        </div>
      </div>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  .image-wrapper {
    width: 100px;
    position: relative;
    .detail-btn-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: opacity 0.2s ease;
      opacity: 0;
      .detail-button {
        background: white;
        font-size: 17px;
        width: 35px;
        height: 35px;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.2s ease;
        :hover {
          background: rgba(255, 255, 255, 0.8);
          transition: background-color 0.2s ease;
        }
      }
    }
    :hover {
      .detail-btn-wrapper {
        transition: opacity 0.2s ease;
        opacity: 1;
      }
    }
  }
  .control-center {
    flex: 1;
    .top-center {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 450;
      white-space: normal;
      .product-name {
        max-width: 235px;
      }
      .price {
        font-weight: 500;
      }
    }
    .bottom-center {
      .left-bottom-center {
        display: flex;
        align-items: center;
        gap: 20px;
        .total-price {
          color: red;
          font-size: 16px;
          font-weight: 400;
        }
      }
      .delete-btn {
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
  }
  .top-center,
  .bottom-center {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const Img = styled.img`
    width: 100px;
`
