import React, {useContext, useState} from "react";
import {Breadcrumb} from "antd";
import styled from "styled-components";
import Progress from "../../components/CheckoutProgress/Progress";
import Contact from "../../components/CheckoutContact/Contact";
import Order from "../../components/CheckoutOrder/Order";
import {StoreContext} from "../../context/StoreContext";
import Shipping from "../../components/CheckoutShipping/Shipping";

const CheckoutPage: React.FC = () => {
    const items = useContext(StoreContext)
    const [progress, setProgress] = useState('contacts')

    const total = items?.cartItems?.reduce((prev, cur) => {
        if (cur.discount) return prev + (cur.amount! * cur.price!) - cur?.discount!;
        return prev + (cur.amount! * cur.price!);
    }, 0);

    console.log(progress)

    const handlePrevClick = () => {
        if (progress === 'shipping') {
            setProgress('contacts')
        }
        if (progress === 'payment') {
            setProgress('shipping')
        }
    }

    const handleNextClick = () => {
        if (progress === 'contacts') {
            setProgress('shipping')
        }
        if (progress === 'shipping') {
            setProgress('payment')
        }
        if (progress === 'payment') {
            setProgress('submit')
        }
    }

    return (
        <Wrapper>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Checkout</Breadcrumb.Item>
                </Breadcrumb>
                <div><Title>Checkout</Title></div>
                <Progress/>
                    {progress === 'contacts' && (
                        <Contact/>
                    )}
                    {progress === 'shipping' && (
                        <Shipping/>
                    )}
                <ButtonWrapper>
                    <div>
                        <PrevButton onClick={handlePrevClick} disabled={progress === 'contacts'}>
                            <img src={'https://cassiopeia.store/svgs/line-left-arrow-black.svg'}/>
                            Back step
                        </PrevButton>
                    </div>
                    <div>
                        <NextButton onClick={handleNextClick}>
                            Shipping
                            <img src={'https://cassiopeia.store/svgs/line-right-arrow.svg'}/>
                        </NextButton>
                    </div>
                </ButtonWrapper>
            </div>
            <Order items={items?.cartItems!} total={total!}/>
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