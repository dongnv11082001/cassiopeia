import React, { useState } from "react";
import styled from "styled-components";

const Shipping: React.FC = () => {
  const [pickUpClick, setPickUpClick] = useState(false);
  const [courierClick, setCourierClick] = useState(false);

  const handlePickUpClick = () => {
    setCourierClick(false);
    setPickUpClick(true);
  };

  const handleCourierClick = () => {
    setPickUpClick(false);
    setCourierClick(true);
  };

  return (
    <div>
      <p>Delivery method</p>
      <Delivery onClick={handlePickUpClick} checked={pickUpClick}>
        <div>
          {pickUpClick ? (
            <img src={"https://cassiopeia.store/svgs/radio-checked.svg"} />
          ) : (
            <img src={"https://cassiopeia.store/svgs/radio-unchecked.svg"} />
          )}
        </div>
        <div className="text">
          <span>Pick up</span>
          <span>Today, pick up is available in 2 stores</span>
        </div>
      </Delivery>
      <Delivery onClick={handleCourierClick} checked={courierClick}>
        <div>
          {courierClick ? (
            <img src={"https://cassiopeia.store/svgs/radio-checked.svg"} />
          ) : (
            <img src={"https://cassiopeia.store/svgs/radio-unchecked.svg"} />
          )}
        </div>
        <div className="text">
          <span>Courier</span>
          <span>About 2 days</span>
        </div>
      </Delivery>
    </div>
  );
};

const Delivery = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  height: 60px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.checked ? "#000" : "#f0f0f5")};
  margin-bottom: 20px;
  cursor: pointer;
  user-select: none;
  padding: 20px;

  & .text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
`;

export default Shipping;
