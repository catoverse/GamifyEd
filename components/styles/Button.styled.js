import styled from "styled-components";

export const StyledButton = styled.a`
  background-color: var(--pink);
  color: ${({ theme }) => theme.button};

  border: none;
  border-radius: 0.35em;

  font-size: 1.125em;
  font-family: var(--para-font);
  text-decoration: none;

  padding: 0.75em 1.5em;
`;
