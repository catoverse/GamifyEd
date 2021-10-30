import React from "react";
import contacts from "/contact.json";
import {
  StyledProfile,
  Heading,
  ProfilesContainer,
  ProfileWrapper,
  Name,
  Badge,
  Socials,
} from "./styles/Profile.styled";

export const Profile = () => {
  return (
    <StyledProfile>
      <Heading>Say hello?</Heading>
      <ProfilesContainer>
        {contacts.info.map((contact) => {
          return (
            <ProfileWrapper key={contact.id}>
              <img src={contact.img} alt="profile" />
              <Name>{contact.name}</Name>
              <Badge>{contact.badge}</Badge>
              <Socials>
                <a href={contact.twitter.link} target="_blank" rel="noreferrer">
                  <img src={contact.twitter.logo} alt="twitter" />
                </a>
                <a
                  href={contact.linkedin.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={contact.linkedin.logo} alt="linkedin" />
                </a>
              </Socials>
            </ProfileWrapper>
          );
        })}
      </ProfilesContainer>
    </StyledProfile>
  );
};
