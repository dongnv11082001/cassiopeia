import React, { useContext, useState } from "react";
import { Breadcrumb } from "antd";
import styled from "styled-components";
import Progress from "../../components/CheckoutProgress/Progress";
import Contact from "../../components/CheckoutContact/Contact";
import Order from "../../components/CheckoutOrder/Order";
import { StoreContext } from "../../context/StoreContext";
import Shipping from "../../components/CheckoutShipping/Shipping";
import Payment from "../../components/CheckoutPayment/Payment";
import { Link } from "react-router-dom";
import Submit from "../../components/Submit/Submit";
import { useCheckoutPage } from "../../hooks/useCheckoutPage";

const CheckoutPage: React.FC = () => {
  const orders = useContext(StoreContext);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState("");

  const [buttonProgress, setButtonProgress] = useState("");

  // if (step === 0) {
  //   setButtonProgress("Shipping");
  //   setProgress("contact");
  // }

  // if (step === 1) {
  //   setButtonProgress("Payment");
  //   setProgress("shipping");
  // }

  // if (step === 2) {
  //   setButtonProgress("Submit");
  //   setProgress("payment");
  // }

  // if (step === 3) {
  //   setButtonProgress("");
  //   setProgress("submit");
  // }

  const handlePrevClick = () => {
    setStep(step - 1);
  };

  const handleNextClick = () => {
    setStep(step + 1);
    // setButtonProgress("Shipping");
    // setProgress("contact");
  };

  const contacts = {
    fullName,
    setFullName,
    phoneNumber,
    setPhoneNumber,
    gender,
    setGender,
  };

  const total = orders?.cartItems?.reduce((prev, cur) => {
    if (cur.discount) return prev + cur.amount! * cur.price! - cur?.discount!;
    return prev + cur.amount! * cur.price!;
  }, 0);

  return (
    <Wrapper>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Checkout</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Title>Checkout</Title>
        </div>
        <Progress />
        {progress === "contacts" && <Contact contacts={contacts} />}
        {progress === "shipping" && <Shipping />}
        {progress === "payment" && <Payment />}
        {progress === "submit" && <Submit contacts={contacts} />}
        <ButtonWrapper>
          <div>
            {buttonProgress && (
              <PrevButton
                onClick={handlePrevClick}
                disabled={progress === "contacts"}
              >
                <img
                  src={
                    "https://cassiopeia.store/svgs/line-left-arrow-black.svg"
                  }
                  alt=""
                />
                Back step
              </PrevButton>
            )}
            {!buttonProgress && (
              <PrevButton>
                <Link to={"/"} style={{ color: "#000" }}>
                  Come back homepage
                </Link>
                <img
                  src={
                    "https://cassiopeia.store/svgs/line-right-arrow-black.svg"
                  }
                  alt=""
                />
              </PrevButton>
            )}
          </div>
          <div>
            {buttonProgress && (
              <NextButton onClick={handleNextClick}>
                <span>{buttonProgress}</span>
                <img
                  src={"https://cassiopeia.store/svgs/line-right-arrow.svg"}
                  alt=""
                />
              </NextButton>
            )}
            {buttonProgress === "" && <></>}
          </div>
        </ButtonWrapper>
      </div>
      <Order items={orders?.cartItems} total={total} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 20px 0 40px 0;
  font-weight: 500;
  font-size: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 435px;
  font-size: 16px;

  & button img {
    margin: 0 10px;
  }
`;

const PrevButton = styled.button`
  border: none;
  height: 46px;
  cursor: pointer;
  background: transparent;
`;

const NextButton = styled.button`
  border: none;
  padding: 0 20px;
  background-color: #000;
  color: #fff;
  height: 46px;
  width: 175px;
  border-radius: 8px;
  cursor: pointer;
`;

export default CheckoutPage;
