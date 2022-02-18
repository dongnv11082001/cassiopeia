import styled from "styled-components";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Counter } from "./Counter";
import { StoreContext } from "../../context/StoreContext";

type Props = {
  item: IProduct;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const CartModalContext = useContext(StoreContext);
  const handleRemove = CartModalContext?.handleRemoveFromCart!;
  const handleAdd = CartModalContext?.handleAddToCart!
  const { id } = useParams();
  const cartItems = CartModalContext?.cartItems!;
  const order = cartItems.map((item) => {
    return { ...item, amount: quantity };
  });

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    CartModalContext?.setCartItems!(order);
  };

  const handleDecrease = () => {
    setQuantity((prev) => prev - 1);
    CartModalContext?.setCartItems!(order);
  };

  return (
    <CartItemContainer>
      <div className="image-wrapper">
        <Img src={item.image} alt="avatar" />
        <div className="detail-btn-wrapper">
          <Link to={"/flowers/" + id}>
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
              handleIncrease={handleAdd}
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
`;
