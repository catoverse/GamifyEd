import React from "react";
import {
  StyledMainSection,
  Heading,
  Text,
  Button,
} from "./styles/MainSection.styled";

import { StyledButton } from "./styles/Button.styled";

export const MainSection = () => {
  return (
    <StyledMainSection>
      <Heading>Craft playful learning experiences</Heading>
      <Text>
        Apply gamification to your EdTech products with the help of GamifyEd
        Notion Template, a comprehensive research based gamification framework
      </Text>
      <StyledButton href="https://ashwinchauhan.vercel.app/" target="_blank">
        Get GamifyEd Template
      </StyledButton>
    </StyledMainSection>
  );
};
