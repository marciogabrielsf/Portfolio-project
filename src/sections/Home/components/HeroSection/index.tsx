import { motion } from "framer-motion";
import { container, motionItem } from "./motion";

import ProfileImage from "@/assets/profile.jpeg";

import "./styles.scss";

export default function HeroSection() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="mastHead"
    >
      <motion.img
        variants={motionItem}
        className="profileImage"
        src={ProfileImage}
        alt=""
        width={180}
      />
      <motion.p variants={motionItem} className="topName">
        Olá! 👋 Meu nome é Márcio.
      </motion.p>
      <motion.h1 variants={motionItem} className="mainTitle">
        Sou um desenvolvedor Fullstack apaixonado pela
        <span className="dd-highlight"> excelência.</span>
      </motion.h1>
    </motion.div>
  );
}
