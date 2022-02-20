import React, { useState } from "react";
import styled from "styled-components";

interface IUser {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
  gender: string;
  orders: IOrder[];
}

type Props = {
  contacts: any;
};

const Contact: React.FC<Props> = ({ contacts }) => {
  return (
    <div>
      <h3>Fill in your information</h3>
      <div>
        <Input
          placeholder={"Full name"}
          value={contacts.fullName}
          onChange={(e) => contacts.setFullName(e.target.value)}
        />
        <Input
          placeholder={"Phone number"}
          value={contacts.phoneNumber}
          onChange={(e) => contacts.setPhoneNumber(e.target.value)}
        />
      </div>
      <ContactGender>
        <span>Gender:</span>
        <label>
          Male
          <input
            type={"radio"}
            name={"gender"}
            value={contacts.gender}
            onChange={(e) => contacts.setGender(e.target.value)}
          />
        </label>
        <label>
          Female
          <input
            type={"radio"}
            name={"gender"}
            value={"female"}
            onChange={(e) => contacts.setGender(e.target.value)}
          />
        </label>
      </ContactGender>
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

const ContactGender = styled.div`
  & span {
    margin-right: 20px;
  }

  & label {
    font-weight: 600;
  }

  & label input {
    margin: 0 10px 20px 10px;
  }
`;

export default Contact;
