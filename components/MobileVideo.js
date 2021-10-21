import Image from "next/dist/client/image";
import {
  VideoContainer,
  Iframe,
  Controller,
  LgCircle,
  MdCircle,
  SmCircle,
} from "./styles/MobileVideo.styled";
import { motion } from "framer-motion";

export const MobileVideo = () => {
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
        <LgCircle></LgCircle>
        <MdCircle></MdCircle>
        <SmCircle></SmCircle>
        <Controller>
          <Image
            src="/gameboy-color.png"
            alt="Vercel Logo"
            width={500}
            height={596}
          />
        </Controller>
        <Iframe
          src={`https://www.youtube.com/embed/31Rp5LemYeA`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </VideoContainer>
    </motion.div>
  );
};
