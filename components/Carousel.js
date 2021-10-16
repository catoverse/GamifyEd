import React from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";
// import "../pages/Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export const Carousel = () => {
  return (
    <StyledCarousel>
      <Heading>What&apos;s in store?</Heading>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SubHead>Resources to learn more about gamification</SubHead>
          <Text>50+ handpicked resources to learn about gamification</Text>
          <ImageContainer>
            <img src="/tab-1.png" alt="resources" />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SubHead>
            Extensive checklist of game techniques to do a gamification audit
          </SubHead>
          <Text>
            Checklists that you can put to use from the get go and arrive at a
            gamification score for your product
          </Text>
          <ImageContainer>
            <img src="/tab-2.png" alt="checklist" />
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <SubHead>Teardowns and case studies of existing EdTech apps</SubHead>
          <Text>
            Learn game techniques from apps that have mastered the
            implementation of them
          </Text>
          <ImageContainer>
            <img src="/tab-3.png" alt="teardowns" />
          </ImageContainer>
        </SwiperSlide>
      </Swiper>
    </StyledCarousel>
  );
};

const StyledCarousel = styled.div`
  margin: 4em 0;
  padding: 0 1em;
  text-align: center;
`;

const Heading = styled.div`
  font-size: 2rem;
  font-family: var(--main-font);
  font-weight: 700;

  @media only screen and (max-width: 486px) {
    font-size: 1.5rem;
  }
`;

const SubHead = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--main-font);

  margin: 0 0 0.5em;

  @media only screen and (max-width: 486px) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  max-width: 30em;

  font-size: 1.125rem;
  font-weight: 400;
  font-family: var(--para-font);

  @media only screen and (max-width: 486px) {
    font-size: 0.875rem;
  }
`;

const ImageContainer = styled.div`
  border: 10px solid ${({ theme }) => theme.background};
  border-radius: 5px;

  margin-top: 1em;
`;
