import styled from "styled-components";

export const Circle = styled.span`
  position: relative;

  &::after {
    content: "";
    background: url("/circle.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 15em;
    left: -2em;
    width: 5em;
    height: 5em;
    opacity: 0.5;
    overflow-x: hidden;
    z-index: -1;

    @media only screen and (max-width: 912px) {
      display: none;
    }
  }
`;

export const MedCircle = styled.span`
  position: relative;

  &::after {
    content: "";
    background: url("/circle.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 5em;
    left: 0em;
    width: 2em;
    height: 2em;
    opacity: 0.5;
    overflow-x: hidden;
    z-index: -1;
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
    top: -5em;
    right: -50em;
    width: 1em;
    height: 1em;
    opacity: 0.5;
    overflow-x: hidden;
    z-index: -1;

    @media only screen and (max-width: 912px) {
      display: none;
    }
  }

  &::before {
    content: "";
    background: url("/circle.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0em;
    right: -55em;
    width: 3em;
    height: 3em;
    opacity: 0.5;
    overflow-x: hidden;
    z-index: -1;

    @media only screen and (max-width: 912px) {
      display: none;
    }
  }
`;

export const VideoContainer = styled.div`
  max-width: 886px;
  max-height: auto;

  display: flex;
  justify-content: center;

  margin: 5em auto 0;
  padding: 0 1em;

  position: relative;

  &::after {
    content: "";
    background: url("/circle.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: -8%;
    left: 10%;
    width: 10em;
    height: 10em;
    opacity: 0.5;
    overflow-x: hidden;
    z-index: -1;
  }

  &::before {
    content: "";
    background: url("/circle.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 15%;
    right: 8%;
    width: 12em;
    height: 12em;
    opacity: 0.5;
    overflow-x: hidden;
    z-index: -1;
  }
`;

export const ImageContainer = styled.div`
  width: 10em;
`;

export const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-height: 22.5em;
  border: none;
  padding-top: 5px;

  @media only screen and (max-width: 886px) {
    max-height: 22em;
  }

  @media only screen and (max-width: 786px) {
    max-height: 21em;
  }
`;
