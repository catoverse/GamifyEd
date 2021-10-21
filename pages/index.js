import React, { useState } from "react";
import Image from "next/image";

// libraries imports
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyles from "../components/styles/Global";
import { DarkModeSwitch } from "react-toggle-dark-mode";

// components imports
import { MainSection } from "../components/MainSection";
import { DesktopVideo } from "../components/DesktopVideo.js";
import { MobileVideo } from "../components/MobileVideo.js";
import { Carousel } from "../components/Carousel";
import { Profile } from "../components/Profile";
import { LastSection } from "../components/LastSection";
import { Footer } from "../components/Footer";

export default function Home() {
  // light and dark mode themes
  const theme = {
    light: {
      body: "#FFF",
      text: "#000",
      button: "#fff",
      background: "#F4F4F4",
    },
    dark: {
      body: "#24181E",
      text: "#fff",
      button: "#24181E",
      background: "#333",
    },
  };

  // Header styles
  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: sticky;
    top: 0;
    z-index: 10;
    background: ${({ theme }) => theme.body};

    /* max-width: 1124px; */
    padding: 0 2em;
    margin: 0 auto;

    @media only screen and (max-width: 486px) {
      justify-content: space-between;
    }
  `;

  const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    margin: 2em 0;

    position: relative;

    @media only screen and (max-width: 486px) {
      flex-grow: unset;
    }

    p {
      font-family: var(--main-font);
      font-size: 2.5rem;
      font-weight: 400;

      padding-left: 0.5em;
    }

    span {
      color: var(--pink);
    }

    @media only screen and (max-width: 486px) {
      p {
        font-size: 2rem;
      }
    }
  `;

  const Logo = styled.div`
    @media only screen and (max-width: 486px) {
      width: 30px;
      height: 48px;
    }
  `;

  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <GlobalStyles />
      <HeaderWrapper>
        <StyledHeader>
          <span>
            {isDarkMode ? (
              <Logo>
                <Image
                  src="/logo-light.svg"
                  alt="Vercel Logo"
                  width={36}
                  height={57}
                />
              </Logo>
            ) : (
              <Logo>
                <Image
                  src="/logo-dark.svg"
                  alt="Vercel Logo"
                  width={36}
                  height={57}
                />
              </Logo>
            )}
          </span>
          <p>
            Gamify<span>Ed</span>
          </p>
        </StyledHeader>
        <DarkModeSwitch
          moonColor={"#ff238b"}
          sunColor={"#F78812"}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
        />
      </HeaderWrapper>
      <MainSection />
      <DesktopVideo />
      <MobileVideo />
      <Carousel />
      <Profile />
      <LastSection />
      <Footer />
    </ThemeProvider>
  );
}
