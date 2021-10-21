import styled from "styled-components";

export const VideoContainer = styled.div`
  margin: 5em auto 5em;
  padding: 0 1em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 786px) {
    display: none;
  }
`;

export const Controller = styled.div`
  position: relative;
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 450px;
  width: 80%;
  height: 60%;
  margin: 0 auto;
  max-height: 22.5em;
  border-radius: 20px;
  padding-top: 1em;
`;

export const LgCircle = styled.span`
  position: relative;

  &::after {
    content: "";
    background: url("/circle.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -3em;
    left: 2em;
    width: 5em;
    height: 5em;
    opacity: 0.5;
    overflow-y: hidden;
    z-index: -1;
  }
`;

export const MdCircle = styled.span`
  position: relative;

  &::after {
    content: "";
    background: url("/circle.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 36em;
    left: -8em;
    width: 3em;
    height: 3em;
    opacity: 0.5;
    overflow-x: hidden;
    z-index: -1;

    @media only screen and (max-width: 500px) {
      top: 32em;
    }

    @media only screen and (max-width: 450px) {
      top: 28em;
    }

    @media only screen and (max-width: 400px) {
      top: 24em;
    }

    @media only screen and (max-width: 350px) {
      top: 22em;
    }
  }
`;

export const SmCircle = styled.span`
  position: relative;

  &::after {
    content: "";
    background: url("/circle.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -2em;
    right: -10em;
    width: 1.5em;
    height: 1.5em;
    opacity: 0.5;
    overflow-x: hidden;
    z-index: -1;

    @media only screen and (max-width: 350px) {
      right: -9em;
    }
  }
`;
