import React, {useContext, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {StoreContext} from "../../context/StoreContext";

const AddedItem: React.FC = () => {
    const CartModalContext = useContext(StoreContext);
    const [code, setCode] = useState('');
    const [text, setText] = useState('')
    const [discount, setDiscount] = useState(0)

    const handleApplyCode = () => {
        if (code === '20DOLLARSOFF') {
            setText('Applied')
            CartModalContext?.setCartItems!((prev) => {
                return prev.map(item => {
                    return {...item, discount: 20}
                })
            })
        } else {
            setText('Promocode is not available! You can try [20DOLLARSOFF]')
        }

        setDiscount(20)
    }

    const handleRemoveAll = () => {
        CartModalContext?.setCartItems!([]);
    };

     const total = useMemo(() => {
        const result = CartModalContext?.cartItems?.reduce((prev, cur) => {
            if (cur.discount) return prev + (cur.amount! * cur.price!) - cur?.discount!;
            return prev + (cur.amount! * cur.price!);
        }, 0);

        return result;
    }, [CartModalContext?.cartItems]);

    return (
        <>
            <AddedCart>
                <div className="remove-all-btn" onClick={handleRemoveAll}>
                    Remove all
                </div>
                <div className="promocode-center">
                    <input type="text" placeholder="Add promocode" value={code}
                           onChange={e => setCode(e.target.value)}/>
                    <div className="apply-btn"
                         onClick={handleApplyCode}>Apply
                    </div>
                </div>
                {text && <Text code={code}>{text}</Text>}
                <div className="payment-center">
                    <div className="payment-info">
                        <div className="key">Shipping</div>
                        <div className="value">FREE</div>
                    </div>
                    {discount > 0 && <div className={'payment-info'}>
                        <div className='key'>Promocode</div>
                        <div className='value'>-${discount}</div>
                    </div>}
                    <div className="payment-info">
                        <div className="key">Order total</div>
                        <div className="value">${total}</div>
                    </div>
                </div>
                <Link to="/checkout">
                    <div className="checkout-btn-wrapper">
                        <div className="checkout-btn">
                            <span>Checkout</span>
                            <div className="arrow-wrapper">
                                <img
                                    className="arrow"
                                    src="https://cassiopeia.store/svgs/line-right-arrow.svg"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
            </AddedCart>
        </>
    );
};

const AddedCart = styled.div`
  .remove-all-btn {
    color: #595cff;
    font-weight: 500;
    font-size: 1rem;
    margin: 30px 0;
    cursor: pointer;
  }
  .promocode-center {
    gap: 15px;
    align-items: center;
    height: 42px;
    input {
      flex: 1;
      outline: none;
      height: 100%;
      border: 1px solid #ddd;
      background-color: rgba(200, 200, 200, 0.2);
      padding: 10px;
      font-size: 0.8rem;
      color: #000;
    }
    .apply-btn {
      padding: 10px;
      border: 1px solid #595cff;
      font-size: 0.9rem;
      font-weight: 500;
      border-radius: 5px;
      width: 150px;
      text-align: center;
      transition: background-color 020DOLLARSOFF.2s ease;
      cursor: pointer;
      &:hover {
        background-color: #595cff;
        color: white;
        transition: background-color 0.2s ease;
      }
    }
  }
  .payment-center {
    margin: 3rem 0 1rem;
    font-size: 16px;
    .payment-info {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #eee;
      padding: 15px 0;
      .key {
        font-weight: 400;
      }
    }
  }
  .checkout-btn-wrapper {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .checkout-btn {
      background: black;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      padding: 10px 0;
      border-radius: 7px;
      font-weight: 500;
      font-size: 1rem;
      transition: background-color 0.2s ease;
      cursor: pointer;
      .arrow-wrapper {
        width: 25px;
      }
      &:hover {
        background: #444;
        transition: background-color 0.2s ease;
      }
    }
  }
  .promocode-center {
    display: flex;
  }
  .value {
    font-weight: 500;
  }
`;

const Text = styled.h3<{ code: string }>`
  color: ${props => (props.code === '20DOLLARSOFF') ? 'green' : 'red'};
`

export default AddedItem;
