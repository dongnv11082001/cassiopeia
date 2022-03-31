import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import "antd/dist/antd.css";

// components
import Search from "../Search/Search";
import { StoreContext } from "../../../context/StoreContext";
import { CartModal } from "../Cart/CartModal";
import {cartBtn, logo, viewBtn} from "../../../constants/imageURLs";

type Props = {};

const Header: React.FC<Props> = () => {
  const [showSearch, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const store = useContext(StoreContext);

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
        <img src={'/img/location.svg'} alt="Location Icon" />
        <Location>Vietnam</Location>
      </HeaderLocation>
      <HeaderLogo className="header__logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </HeaderLogo>
      <HeaderGroup className="header__group">
        <Search onShow={showSearch} />
        <IconWrapper>
          <img
            onClick={handleShowSearch}
            className="header__icon-search"
            src={viewBtn}
            alt=""
          />
        </IconWrapper>
        <IconWrapper>
          <Badge count={store?.cartItems!.length} size="small">
            <img
              onClick={handleShowCart}
              className="header__icon-cart"
              src={cartBtn}
              alt=""
            />
            <CartModal
              onShow={showCart}
              onCancel={handleCancelCart}
              onOkClick={handleOkClick}
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
