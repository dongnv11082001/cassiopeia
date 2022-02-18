import React from "react";
import {Breadcrumb} from "antd";
import ProductList from "../../components/Content/ProductList/ProductList";
import styled from "styled-components";
import Progress from "../../components/CheckoutProgress/Progress";
import Contact from "../../components/CheckoutContact/Contact";
import Order from "../../components/CheckoutOrder/Order";

const CheckoutPage = () => {
    return (
        <Wrapper>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Checkout</Breadcrumb.Item>
                </Breadcrumb>
                <div><Title>Checkout</Title></div>
                <Progress/>
                <Contact/>
                <ButtonWrapper>
                    <div>
                        <PrevButton>
                            <img src={'https://cassiopeia.store/svgs/line-left-arrow-black.svg'}/>
                            Back step
                        </PrevButton>
                    </div>
                    <div>
                        <NextButton>
                            Shipping
                            <img src={'https://cassiopeia.store/svgs/line-right-arrow.svg'}/>
                        </NextButton>
                    </div>
                </ButtonWrapper>
            </div>
            <Order/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  margin: 20px 0 40px 0;
  font-weight: 500;
  font-size: 32px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 435px;

  & button img {
    margin: 0 10px;
  }
`

const PrevButton = styled.button`
  border: none;
  height: 46px;
  cursor: pointer;
  background: transparent;
`

const NextButton = styled.button`
  border: none;
  padding: 0 20px;
  background-color: #000;
  color: #fff;
  height: 46px;
  width: 175px;
  border-radius: 8px;
  cursor: pointer;
`

export default CheckoutPage