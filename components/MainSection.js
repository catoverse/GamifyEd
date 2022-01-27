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
      <StyledButton href="https://navgurukul.notion.site/The-GamifyEd-Framework-3638cd6b4fd143768db62e5bc29791a2" target="_blank">
        Get GamifyEd Template
      </StyledButton>
    </StyledMainSection>
  );
};
