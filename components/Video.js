import Image from "next/dist/client/image";
import {
  Circle,
  MedCircle,
  SmCircle,
  VideoContainer,
  ImageContainer,
  IframeContainer,
  Iframe,
} from "./styles/Video.styled";

export const Video = () => {
  return (
    <>
      <VideoContainer>
        <Circle></Circle>
        <MedCircle></MedCircle>
        <SmCircle></SmCircle>
        <ImageContainer>
          <Image
            src="/left.png"
            alt="Vercel Logo"
            width="155px"
            height="478px"
          />
        </ImageContainer>
        <IframeContainer>
          <Iframe
            src={`https://www.youtube.com/embed/31Rp5LemYeA`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </IframeContainer>
        <ImageContainer>
          <Image
            src="/right.png"
            alt="Vercel Logo"
            width="155px"
            height="478px"
          />
        </ImageContainer>
      </VideoContainer>
    </>
  );
};
