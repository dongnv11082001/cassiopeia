import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StoreContext } from '../../../../context/StoreContext'
import { useFetch } from '../../../../hooks/useFetch'
import {cartBtn, viewBtn} from "../../../../constants/imageURLs";

type Props = {}

const ProductList: React.FC<Props> = () => {
  const store = useContext(StoreContext)
  const handleAdd = store?.handleAddToCart!
  const { data: flowers }: { data: IProduct[] } = useFetch(
    'https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/flowers.json'
  )

  return (
    <ItemsWrapper>
      {flowers.slice(0, 4)?.map((item) => (
        <div key={item.id}>
          <ImageWrapper>
            <img src={item.thumbnail} className='img' alt='' />
            <IconWrapper>
              <img src={cartBtn} onClick={() => handleAdd(item)} alt='' />
              <Link to={`/flowers/${item.id}`}>
                <img src={viewBtn} alt='' />
              </Link>
            </IconWrapper>
          </ImageWrapper>
          <p className='name'>{item.name}</p>
          <p className='price'>${item.price}</p>
        </div>
      ))}
    </ItemsWrapper>
  )
}

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  cursor: pointer;

  & .img {
    width: 230px;
    border-radius: 2px;
    background: transparent;
  }

  & .name,
  .price {
    text-align: center;
    margin-top: 20px;
    color: #000;
  }

  & .name {
    font-size: 20px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 15px;
  position: relative;
  border-radius: 2px;
`

const IconWrapper = styled.div`
  position: absolute;
  bottom: 10%;

  & img {
    background-color: #fff;
    margin: 0 8px;
    border-radius: 4px;
  }

  & img:hover {
    opacity: 0.6;
  }
`

export default ProductList
