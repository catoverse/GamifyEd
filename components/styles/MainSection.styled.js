import styled from "styled-components";

export const StyledMainSection = styled.div`
  text-align: center;
  margin-top: 2em;
`;

export const Heading = styled.p`
  font-size: 3.5em;
  font-family: var(--main-font);
  font-weight: 700;

  padding: 0 0.5em 0.5em 0.5em;

  @media only screen and (max-width: 486px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  max-width: 786px;
  font-size: 1.125rem;
  font-family: var(--para-font);
  line-height: 1.5;

  margin: 0 auto 2.5em auto;
  padding: 0 1em;

  @media only screen and (max-width: 486px) {
    font-size: 0.875rem;
  }
`;
