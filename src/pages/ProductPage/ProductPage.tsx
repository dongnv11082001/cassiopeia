import { Breadcrumb } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CounterContainer } from "../../components/common/Cart/Counter";
import ProductList from "../../components/common/Content/ProductList/ProductList";

const descriptions = [
  { title: "Bouquet contents", content: "No content yet" },
  { title: "Includes", content: "No content yet" },
  {
    title: "Delivery & Pay policy",
    content:
      "Each bouquet is unique and is prepared by an expert florist and our customer service team is at your service to ensure the best experience possible.",
  },
];

const tags = [
  {
    icon: "https://cassiopeia.store/svgs/free-i.svg",
    content: "Benefits description",
  },
  {
    icon: "https://cassiopeia.store/svgs/star-i.svg",
    content: "Always fresh flowers",
  },
  {
    icon: "https://cassiopeia.store/svgs/camera-i.svg",
    content: "Take photo of bouquet",
  },
];

const ProductPage: React.FC = () => {
  const [item, setItem] = useState<IProduct>();
  const productContext = useContext(StoreContext);
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const addToCart = productContext?.handleAddToCart!;

  return (
    <Wrapper>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={"/"}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/${item?.type}`}>{item?.type}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{item?.name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="product-view">
        <div className="image-viewer">
          <div className="image-wrapper">
            <img src={item?.thumbnail} alt="" />
          </div>
          <div className="tags">
            {tags.map((tag) => (
              <span className="tag" key={tag.content}>
                <img src={tag.icon} alt="tag" />
                <span>{tag.content}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="product-detail">
          <header>
            <div className="title">{item?.name}</div>
            <div className="price">${item?.price}</div>
            <div className="counter-title">Count:</div>
            <CounterContainer>
              <div
                className="btn"
                onClick={() => {
                  setQuantity((prev) => prev - 1);
                  if (quantity <= 1) return;
                }}
              >
                -
              </div>
              <div className="amount">{quantity}</div>
              <div
                className="btn"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </div>
            </CounterContainer>
            <div className="descriptions">
              <div className="des">Type: {item?.type}</div>
              {item?.occasion && (
                <div className="des">Occasion: {item.occasion}</div>
              )}
            </div>
          </header>
          <div className="buttons">
            <Link to="/checkout">
              <div className="order-btn" onClick={() => addToCart(item!)}>
                Order Now
              </div>
            </Link>
            <div className="save-btn" onClick={() => addToCart(item!)}>
              <ShoppingCartOutlined />
            </div>
          </div>
          <div>
            {descriptions.map((des, index) => {
              return (
                <Description key={index} onClick={() => setShow(!show)}>
                  <span>{des.title}</span>
                  {!show && (
                    <img
                      src="https://cassiopeia.store/svgs/plus-dropdown.svg"
                      alt=""
                    />
                  )}
                  {show && (
                    <>
                      <img
                        src="https://cassiopeia.store/svgs/minus-dropdown.svg"
                        alt=""
                      />
                    </>
                  )}
                </Description>
              );
            })}
          </div>
        </div>
      </div>
      <Suggestion>
        <h1>You may like</h1>
        <ProductList />
      </Suggestion>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1160px;
  margin-top: 30px;
  margin-bottom: 100px;

  .product-link-bar {
    margin: 3rem 0;
  }
  .product-view {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 20px;
    .image-viewer {
      flex: 1 1 15rem;
      .tags {
        margin-top: 20px;
        display: flex;
        gap: 1rem;
        .tag {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
          gap: 5px;
          img {
            width: 46px;
            height: 46px;
          }
        }
      }
    }
    .product-detail {
      flex: 1 1 20rem;
      padding: 0 3%;
      header {
        .title {
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .price {
          font-size: 28px;
          font-weight: 600;
          line-height: 28px;
          padding-bottom: 13px;
          border-bottom: 1px solid #ddd;
        }
        .counter-title {
          font-size: 1.15rem;
          margin: 2rem 0 1rem;
        }
        .descriptions {
          margin: 2rem 0;
          font-size: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
      }
      .buttons {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 3rem;
        .order-btn {
          padding: 10px;
          width: 309px;
          height: 56px;
          background: black;
          border-radius: 5px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          transition: background-color 0.2s ease;
          :hover {
            background: #333;
            transition: background-color 0.2s ease;
          }
        }
        .save-btn {
          height: 56px;
          aspect-ratio: 1;
          border: 1.5px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          cursor: pointer;
          :hover {
            color: #888;
          }
        }
      }
    }
  }
`;
const Suggestion = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #f0f0f9;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export default ProductPage;
