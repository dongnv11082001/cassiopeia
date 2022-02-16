import { useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../../../context";

function FlowerList() {
  const flowers = useContext(StoreContext);

  return (
    <ItemsWrapper>
      {flowers?.items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" className="img" />
          <p className="name">{item.name}</p>
          <p className="price">${item.price}</p>
        </div>
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

    & .name, .price {
        text-align: center;
        margin-top: 20px;
        color: #000;
    }
    
    & .name {
        font-size: 20px;
    }
`

export default FlowerList;
