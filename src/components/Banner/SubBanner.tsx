import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type SubBannerProps = {
  title: string;
  text: string;
  imgSrc: string;
};

function SubBanner({ title, text, imgSrc }: SubBannerProps) {
  return (
    <SubBannerWrapper className="banner">
      <div className="banner__background">
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <SubBannerDescription>
        <div className="title">{title}</div>
        <p className="text">{text}</p>
        <Link to={"/flower"}>
          <div className="banner__button">
            <span>View now</span>
            <img
              src="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
              alt=""
            />
          </div>
        </Link>
      </SubBannerDescription>
    </SubBannerWrapper>
  );
}

const SubBannerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-right: 40px;
  margin-bottom: 80px;
`;

const SubBannerDescription = styled.div`
  position: absolute;
  top: 20%;
  right: 20%;

  & .title {
    font-size: 1.75em;
    font-weight: 500;
    font-family: "Roboto";
  }

  & .text {
    font-size: 1.125em;
  }

  & .banner__button {
    width: fit-content;
    padding: 0.8em 1.5em;
    border-radius: 7px;
    font-weight: 300;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: #000;

    & span {
      margin-right: 12px;
    }
  }

  & a:hover {
    opacity: 0.8;
  }
`;

export default SubBanner;
