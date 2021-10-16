import styled from "styled-components";

export const StyledLastSection = styled.div`
  text-align: center;
  margin: 3em 0 6em;
`;

export const Heading = styled.p`
  max-width: 786px;

  font-size: 2em;
  font-family: var(--main-font);

  padding: 0 0.5em 0.5em 0.5em;
  margin: 0 auto 1em auto;

  @media only screen and (max-width: 486px) {
    font-size: 1.5rem;
  }
`;
