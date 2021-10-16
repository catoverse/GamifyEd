import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5em 0 1em;
`;

export const Text = styled.p`
  font-size: 1.125em;
  font-family: var(--para-font);

  padding: 0 0 1em;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin: 0 0.5em;
  }
`;
