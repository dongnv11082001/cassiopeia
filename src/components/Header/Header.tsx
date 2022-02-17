import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Search from "../Search";
import Cart from "../Cart";
import { Badge } from "antd";
import "antd/dist/antd.css";

type Props = {
  cartItems: IFlower[];
  handleRemoveFromCart: (id: string) => void
};

const Header: React.FC<Props> = ({ cartItems, handleRemoveFromCart }) => {
  const [showSearch, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleShowSearch = () => {
    setShow(!showSearch);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleCancelCart = () => {
    setShowCart(false);
  };

  const handleOkClick = () => {
    setShowCart(false);
  };

  return (
    <HeaderContainer className="header">
      <HeaderLocation className="header__location">
        <img src="/img/location.svg" alt="Location Icon" />
        <Location>Vietnam</Location>
      </HeaderLocation>
      <HeaderLogo className="header__logo">
        <Link to="/">
          <img src="/img/logo.svg" alt="" />
        </Link>
      </HeaderLogo>
      <HeaderGroup className="header__group">
        <Search onShow={showSearch} />
        <IconWrapper>
          <img
            onClick={handleShowSearch}
            className="header__icon-search"
            src="/img/search.svg"
            alt=""
          />
        </IconWrapper>
        <IconWrapper>
          <Badge count={cartItems.length} size="small">
            <img
              onClick={handleShowCart}
              className="header__icon-cart"
              src="/img/cart.svg"
              alt=""
            />
            <Cart
              cartItems={cartItems}
              onShow={showCart}
              onCancel={handleCancelCart}
              onOkClick={handleOkClick}
              onRemove={handleRemoveFromCart}
            />
          </Badge>
        </IconWrapper>
      </HeaderGroup>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  margin: 0 auto;
  max-width: 1160px;
`;

const HeaderLocation = styled.div`
  width: 250px;
`;

const Location = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderGroup = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-end;

  & img:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  font-size: 24px;
  margin-left: 20px;
`;

export default Header;
