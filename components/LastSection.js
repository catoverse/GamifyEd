import React from "react";
import { StyledLastSection, Heading } from "./styles/LastSection.styled";
import { StyledButton } from "./styles/Button.styled";

export const LastSection = () => {
  return (
    <StyledLastSection>
      <Heading>
        Check your product’s gamification score today right in your Notion
        workspace
      </Heading>
      <StyledButton href="https://navgurukul.notion.site/The-GamifyEd-Framework-3638cd6b4fd143768db62e5bc29791a2">Get GamifyEd Template</StyledButton>
    </StyledLastSection>
  );
};
