import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Banner from '../../Banner/Banner'
import SubBanner from '../../Banner/SubBanner'
import ProductList from './ProductList/ProductList'
import Title from './Title/Title'

const Content: React.FC = () => {
  const [banners, setBanners] = useState<BannersProps[]>([])

  useEffect(() => {
    const getStaticProps = async () => {
      const response = await fetch(
        'https://dh-cassiopeia-default-rtdb.asia-southeast1.firebasedatabase.app/banner.json'
      )
      const data: BannersProps[] = await response.json()
      setBanners(data)
    }
    getStaticProps()
  }, [])

  return (
    <ContentWrapper className='content'>
      <div className='home'>
        <PrimaryBanner className='primary-banner'>
          <Banner
            title={banners[0]?.title?.toLocaleUpperCase()}
            description={banners[0]?.description}
            background={'/img/banner.jpg'}
            btnTitle={banners[0]?.btnTitle}
          />
        </PrimaryBanner>
        <SecondaryBanner className='secondary-banner'>
          <SubBanner
            title={banners[1]?.title}
            description={banners[1]?.description}
            background={'/img/gift.jpg'}
            btnTitle={banners[1]?.btnTitle}
          />
          <SubBanner
            title={banners[2]?.title}
            description={banners[2]?.description}
            background={'/img/plant.jpg'}
            btnTitle={banners[2]?.btnTitle}
          />
        </SecondaryBanner>
        <ContentTitle className='content__title'>
          <Title
            text='New'
            leftArrow='https://cassiopeia.store/svgs/line-left-arrow-black.svg'
            rightArrow='https://cassiopeia.store/svgs/line-right-arrow-black.svg'
          />
        </ContentTitle>
        <ProductList />
        <ContentTitle className='content__title'>
          <Title
            text='Revelant'
            leftArrow='https://cassiopeia.store/svgs/line-left-arrow-black.svg'
            rightArrow='https://cassiopeia.store/svgs/line-right-arrow-black.svg'
          />
        </ContentTitle>
        <ProductList />
      </div>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PrimaryBanner = styled.div`
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;
`

const SecondaryBanner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1160px;
  overflow: hidden;
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;

  & span {
    font-size: 24px;
  }
`

export default Content
