import React from "react";
import styled from "styled-components";

const Payment: React.FC = () => {
  return (
    <div>
      <div>
        <Input placeholder={"Full name"} />
        <Input placeholder={"Phone number"} />
      </div>
    </div>
  );
};

const Input = styled.input`
  height: 50px;
  border-radius: 4px;
  text-indent: 13px;
  border: 1px solid #f0f0f5;
  margin-right: 15px;
  margin-bottom: 20px;
  font-size: 12px;
  width: 210px;
`;
export default Payment;
