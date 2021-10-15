import React, { useState } from "react";
import Image from "next/image";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyles from "../components/styles/Global";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import { MainSection } from "../components/MainSection";
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

    max-width: 1124px;
    padding: 0 2em;
    margin: 0 auto;
  `;

  const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    margin: 3em 0;

    p {
      font-family: var(--main-font);
      font-size: 2.5em;
      font-weight: 400;

      padding-left: 0.5em;
    }

    span {
      color: var(--pink);
    }
  `;

  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <>
        <GlobalStyles />
        <HeaderWrapper>
          <StyledHeader>
            <span>
              {isDarkMode ? (
                <Image
                  src="/logo-light.svg"
                  alt="Vercel Logo"
                  width={36}
                  height={57}
                />
              ) : (
                <Image
                  src="/logo-dark.svg"
                  alt="Vercel Logo"
                  width={36}
                  height={57}
                />
              )}
            </span>
            <p>
              Gamify<span>Ed</span>
            </p>
          </StyledHeader>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </HeaderWrapper>
        <MainSection />
        <Carousel />
        <Profile />
        <LastSection />
        <Footer />
      </>
    </ThemeProvider>
  );
}
