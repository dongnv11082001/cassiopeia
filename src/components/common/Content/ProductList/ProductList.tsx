import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../../../api/fetchApi";
import { StoreContext } from "../../../../context/StoreContext";

type Props = {
    
};

const ProductList: React.FC<Props> = () => {
  const [data, setData] = useState<IProduct[]>();
  const store = useContext(StoreContext);
  const handleAdd = store?.handleAddToCart!;

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await getProducts();
      setData(data.slice(0, 4));
    };
    getAllProducts();
  }, []);

  return (
    <ItemsWrapper>
      {data?.map((item) => (
        <Item key={item.id}>
          <ImageWrapper>
            <img src={item.image} className="img" alt="" />
            <IconWrapper>
              <img src="/img/cart.svg" onClick={() => handleAdd(item)} alt="" />
              <Link to={`/flowers/${item.id}`}>
                <img src="/img/search.svg" alt="" />
              </Link>
            </IconWrapper>
          </ImageWrapper>
          <p className="name">{item.name}</p>
          <p className="price">${item.price}</p>
        </Item>
      ))}
    </ItemsWrapper>
  );
};

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  cursor: pointer;

  & .img {
    width: 230px;
    border-radius: 2px;
    background: transparent;
  }

  & .name,
  .price {
    text-align: center;
    margin-top: 20px;
    color: #000;
  }

  & .name {
    font-size: 20px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 15px;
  position: relative;
  border-radius: 2px;
`;

const Item = styled.div``;

const IconWrapper = styled.div`
  position: absolute;
  bottom: 10%;

  & img {
    background-color: #fff;
    margin: 0 8px;
    padding: 10px;
    border-radius: 4px;
    width: 37px;
  }

  & img:hover {
    opacity: 0.6;
  }
`;

export default ProductList;
