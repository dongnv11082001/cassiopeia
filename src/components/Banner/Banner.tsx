import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { whiteLeftArrow } from '../../constants/imageURLs'

function Banner({ title, description, background, btnTitle }: BannersProps) {
  return (
    <BannerWrapper className='banner'>
      <div className='banner__background'>
        <img src={background} alt={background} />
      </div>
      <BannerDescription>
        <div className='title'>{title}</div>
        <p className='text'>{description}</p>
        <Link to={'/flowers'}>
          <div className='banner__button'>
            <span>{btnTitle}</span>
            <img src={whiteLeftArrow} alt='' />
          </div>
        </Link>
      </BannerDescription>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BannerDescription = styled.div`
  position: absolute;
  top: 20%;
  left: 7%;

  & .title {
    font-size: 1.75em;
    font-weight: 500;
    font-family: 'Roboto';
  }

  & .text {
    font-size: 1.125em;
  }

  & .banner__button {
    background-color: #000;
    color: #fff;
    width: fit-content;
    padding: 0.8em 1.5em;
    border-radius: 7px;
    font-weight: 300;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    & span {
      margin-right: 12px;
    }
  }

  & a:hover {
    opacity: 0.8;
  }
`

export default Banner
