import React from "react";
import Image from "next/dist/client/image";

import {
  FooterWrapper,
  FooterContainer,
  Text,
  Socials,
  Social,
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
          <Social href="https://twitter.com/NavGurukul" target="_blank">
            <Image src="/Twitter.svg" alt="twitter" width={40} height={40} />
          </Social>
          <Social
            href="https://www.linkedin.com/company/navgurukul/"
            target="_blank"
          >
            <Image src="/Linkedin.svg" alt="linkedin" width={40} height={40} />
          </Social>
          <Social href="https://www.facebook.com/navgurukul" target="_blank">
            <Image src="/Facebook.svg" alt="facebook" width={40} height={40} />
          </Social>
          <Social href="https://www.youtube.com/c/NavGurukul" target="_blank">
            <Image src="/Youtube.svg" alt="youtube" width={40} height={40} />
          </Social>
        </Socials>
      </FooterContainer>
    </FooterWrapper>
  );
};
