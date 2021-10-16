import styled from "styled-components";

export const StyledButton = styled.a`
  background-color: var(--pink);
  color: ${({ theme }) => theme.button};

  border: none;
  border-radius: 0.35em;

  font-size: 1.125em;
  font-family: var(--para-font);
  text-decoration: none;

  padding: 8px 18px;
  width: fit-content;

  transform: translateY(0);
  transition: all 0.25s linear;

  &:hover {
    box-shadow: #ff238b80 0 10px 20px -10px;
  }
`;
