import Image from "next/dist/client/image";
import {
  Circle,
  MedCircle,
  SmCircle,
  VideoContainer,
  ImageContainer,
  IframeContainer,
  Iframe,
} from "./styles/DesktopVideo.styled";
import { motion } from "framer-motion";

export const DesktopVideo = () => {
  const variants = {
    hidden: { opacity: 0, y: "50px" },
    visible: { opacity: 1, y: "0px" },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
};
