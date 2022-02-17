import React, { useContext, useState } from "react";
import styled from "styled-components";
import Banner from "../Banner/Banner";
import SubBanner from "../Banner/SubBanner";
import FlowerList from "./FlowerList";
import Title from "./Title";

type Props = {
    handleAddToCart: (item: IFlower) => void
}

const Content: React.FC<Props> = ({ handleAddToCart }) => {
  return (
    <ContentWrapper className="content">
      <div className="home">
        <PrimaryBanner className="primary-banner">
          <Banner
            title={"40% OFF"}
            text={"Best deals this week. Fresh flowers, plants and gifts"}
            imgSrc={"/img/banner.jpg"}
          />
        </PrimaryBanner>
        <SecondaryBanner className="secondary-banner">
          <SubBanner
            title={"Nice little gifts"}
            text={"for loved ones"}
            imgSrc={"/img/gift.jpg"}
          />
          <SubBanner
            title={"Plants"}
            text={"for home comfort"}
            imgSrc={"/img/plant.jpg"}
          />
        </SecondaryBanner>
        <ContentTitle className="content__title">
          <Title
            text="New"
            leftArrow="https://cassiopeia.store/svgs/line-left-arrow-black.svg"
            rightArrow="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
          />
        </ContentTitle>
        <FlowerList handleAddItemToCart={handleAddToCart} />
        <ContentTitle className="content__title">
          <Title
            text="Revelant"
            leftArrow="https://cassiopeia.store/svgs/line-left-arrow-black.svg"
            rightArrow="https://cassiopeia.store/svgs/line-right-arrow-black.svg"
          />
        </ContentTitle>
        {/* <FlowerList handleAddItemToCart={handleAddToCart} /> */}
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PrimaryBanner = styled.div`
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;
`;

const SecondaryBanner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1160px;
  overflow: hidden;
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;

  & span {
    font-size: 24px;
  }
`;

export default Content;
