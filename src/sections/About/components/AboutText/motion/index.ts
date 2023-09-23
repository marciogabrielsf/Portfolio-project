export const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const motionItem = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      ease: "easeInOut",
      duration: 2,
    },
  },
};
