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
      <StyledButton href="#">Get GamifyEd Template</StyledButton>
    </StyledLastSection>
  );
};
