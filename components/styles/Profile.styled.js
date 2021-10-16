import styled from "styled-components";

export const StyledProfile = styled.div`
  margin: 2em auto;
  text-align: center;
`;

export const Heading = styled.p`
  font-size: 2rem;
  font-family: var(--main-font);
  font-weight: 700;

  @media only screen and (max-width: 486px) {
    font-size: 1.5rem;
  }
`;

export const ProfilesContainer = styled.div`
  font-family: var(--para-font);
  font-weight: 400;
  font-size: 1.125em;

  padding-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 1em;
  max-width: 1124px;

  @media only screen and (max-width: 986px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  max-width: 20em;
  width: 18em;
  padding: 2em 3em;
  margin: 2em 0.5em;
  box-shadow: 0px 1px 2px rgba(46, 46, 46, 0.06),
    0px 2px 1px rgba(46, 46, 46, 0.04), 0px 1px 5px rgba(46, 46, 46, 0.08);
  border-radius: 8px;
  transition: all 0.25s linear;

  @media only screen and (max-width: 986px) {
    margin-bottom: 1em;
  }
`;

export const Name = styled.p`
  font-family: var(--main-font);
  font-weight: 700;
  font-size: 1.5rem;

  padding: 1em 0 0.5em;

  @media only screen and (max-width: 486px) {
    font-size: 1rem;
  }
`;

export const Badge = styled.p`
  font-family: var(--para-font);
  font-weight: 400;
  font-size: 1.125em;

  padding-bottom: 2em;

  @media only screen and (max-width: 486px) {
    font-size: 0.875rem;
  }
`;

export const Socials = styled.div`
  & a {
    margin: 0 4px;
    padding: 0 2px;
  }
`;
