import React from "react";
import styled from "styled-components";

type Props = {
  contacts: any;
};

const Submit: React.FC<Props> = ({ contacts }) => {
  return (
    <CompleteStatusWrapper>
      <div className="checkout-complete-status">
        Checkout complete!
        <br />
        Thank you for your order...
      </div>
      <div className="information-center">
        <div className="checkout-submitted-info">
          <span className="checkout-submitted-heading">Full name</span>
          {contacts.fullName}
        </div>
        <div className="checkout-submitted-info">
          <span className="checkout-submitted-heading">Phone number</span>
          {contacts.phoneNumber}
        </div>
        <div className="checkout-submitted-info">
          <span className="checkout-submitted-heading">Gender</span>
          {contacts.gender}
        </div>
      </div>
    </CompleteStatusWrapper>
  );
};

const CompleteStatusWrapper = styled.div`
  margin-top: 3rem;
  .checkout-complete-status {
    font-size: 1rem;
    font-weight: 500;
    font-weight: 600;
  }
  .information-center,
  .checkout-home-btn {
    font-size: 1.1rem;
    font-weight: 400;
    margin: 1rem 0 3rem;
  }
  .checkout-submitted-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .checkout-home-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    user-select: none;
    cursor: pointer;
  }
`;

export default Submit;
