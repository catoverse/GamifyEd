import React from "react";
import Image from "next/dist/client/image";

import {
  FooterWrapper,
  FooterContainer,
  Text,
  Socials,
} from "./styles/Footer.styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Text>
          Made with {""}
          <Image src="/heart.png" width="18px" height="18px" alt="heart" /> at
          NavGurukul Labs
        </Text>
        <Socials>
          <a href="#">
            <Image src="/Twitter.svg" alt="twitter" width={40} height={40} />
          </a>
          <a href="#">
            <Image src="/Linkedin.svg" alt="linkedin" width={40} height={40} />
          </a>
          <a href="#">
            <Image src="/Facebook.svg" alt="facebook" width={40} height={40} />
          </a>
          <a href="#">
            <Image src="/Youtube.svg" alt="youtube" width={40} height={40} />
          </a>
        </Socials>
      </FooterContainer>
    </FooterWrapper>
  );
};
