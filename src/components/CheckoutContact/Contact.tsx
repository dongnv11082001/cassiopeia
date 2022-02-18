import React, {useState} from 'react'
import styled from "styled-components";

interface IUser {
    id: string
    name: string
    phoneNumber: string,
    address: string
    gender: string
    orders: IOrder[]
}

const Contact: React.FC = () => {
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [userInfo, setUserInfo] = useState<IUser>()

    return (
        <div>
            <h3>Fill in your information</h3>
            <div>
                <Input
                    placeholder={'Full name'}
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />
                <Input
                    placeholder={'Phone number'}
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
            </div>
            <ContactGender>
                <span>Gender:</span>
                <label>Male
                    <input
                        type={'radio'}
                        name={'gender'}
                        value={'male'}
                        onChange={e => setUserInfo((prevState) => {
                            return {...prevState, gender: e.target.value} as IUser
                        })}
                    /></label>
                <label>Female
                    <input
                        type={'radio'}
                        name={'gender'}
                        value={'female'}
                        onChange={e => setUserInfo((prevState) => {
                            return {...prevState, gender: e.target.value} as IUser
                        })}
                    /></label>
            </ContactGender>
        </div>
    )
}

const Input = styled.input`
  height: 50px;
  border-radius: 4px;
  text-indent: 13px;
  border: 1px solid #f0f0f5;
  margin-right: 15px;
  margin-bottom: 20px;
  font-size: 12px;
  width: 210px;
`

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
`

export default Contact