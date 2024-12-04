export const variants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 }
  },
  rotate: {
    initial: { opacity: 0, rotate: -3 },
    animate: { opacity: 1, rotate: 0 }
  }
};

export const spring = {
  light: {
    type: "spring",
    stiffness: 300,
    damping: 30
  },
  medium: {
    type: "spring",
    stiffness: 400,
    damping: 40
  },
  heavy: {
    type: "spring",
    stiffness: 500,
    damping: 50
  }
};

export const transition = {
  ease: [0.6, 0.01, -0.05, 0.95],
  duration: 0.6
};

export const stagger = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }
};