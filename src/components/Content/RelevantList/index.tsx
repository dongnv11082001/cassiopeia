import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../../context";

function RevelantList() {
  const flowers = useContext(StoreContext);

  return (
    <ItemsWrapper>
      {flowers?.items.map((item) => (
        <Item key={item.id}>
          <div>
            <img src={item.image} alt="" className="img" />
            <img src="/img/cart.svg" alt="" />
            <SearchIcon src="/img/search.svg" alt="" />
          </div>
          <div>
            <p className="name">{item.name}</p>
          </div>
          <div>
            <p className="price">${item.price}</p>
          </div>
        </Item>
      ))}
    </ItemsWrapper>
  );
}

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & .img {
    width: 230px;
    height: 230px;
    border-radius: 2px;
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

const Item = styled.div`
    position: relative;
`

const SearchIcon = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`

export default RevelantList;
