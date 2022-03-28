import styled from "styled-components";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Counter } from "./Counter";
import { StoreContext } from "../../../context/StoreContext";

type Props = {
  item: IProduct;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const CartModalContext = useContext(StoreContext);
  const handleRemove = CartModalContext?.handleRemoveFromCart!;
  const handleIncrease = CartModalContext?.handleAddToCart!;

  const handleDecrease = (clickedItem: IProduct) => {
    CartModalContext?.setCartItems!((prev) => {
      const isItemInCart = prev?.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) => {
          return item.id === clickedItem.id
            ? { ...item, amount: item.amount - 1 }
            : item;
        });
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  return (
    <CartItemContainer>
      <div className="image-wrapper">
        <Img src={item.thumbnail} alt="avatar" />
        <div className="detail-btn-wrapper">
          <Link to={"/flowers/" + item.id}>
            <div className="detail-button">
              <SearchOutlined />
            </div>
          </Link>
        </div>
      </div>
      <div className="control-center">
        <div className="top-center">
          <div className="product-name">{item.name}</div>
          <div className="price">${item.price}</div>
        </div>
        <div className="bottom-center">
          <div className="left-bottom-center">
            <Counter
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              item={item}
            />
          </div>
          <div className="delete-btn" onClick={() => handleRemove(item.id)}>
            {<DeleteOutlined />}
          </div>
        </div>
      </div>
    </CartItemContainer>
  );
};

export const CartItemContainer = styled.div`
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
`;
