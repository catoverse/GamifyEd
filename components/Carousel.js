import React from "react";
import styled from "styled-components";
// import "../pages/Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export const Carousel = () => {
  return (
    <StyledCarousel>
      <Heading>What&apos;s in store?</Heading>
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
  margin: 2em auto 4em;
  padding: 0 1em;
  text-align: center;
  max-width: 1024px;
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
