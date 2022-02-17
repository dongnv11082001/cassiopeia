import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../../context";

type Props = {
  endpoint: string;
};

const ProductList: React.FC<Props> = ({ endpoint }) => {
  const [data, setData] = useState<IFlower[]>();
  const store = useContext(StoreContext);
  const handleAdd = store?.handleAddToCart!;

  const url: string = "https://620c70a3b5736325938e3172.mockapi.io";
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`${url}/${endpoint}`);
      const items = await response.json();
      setData(items);
    };
    getItems();
  }, []);

  return (
    <ItemsWrapper>
      {data?.map((item) => (
        <Item key={item.id}>
          <ImageWrapper>
            <img src={item.image} alt="" className="img" />
            <IconWrapper>
              <img src="/img/cart.svg" alt="" onClick={() => handleAdd(item)} />
              <img src="/img/search.svg" alt="" />
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
