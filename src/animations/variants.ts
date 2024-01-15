type animationVariants = {
  hidden: object;
  visible: object;
  exit?: object;
};

export const mapButtonVarints: animationVariants = {
  hidden: { opacity: 0, transition: { type: "easeInOut", duration: 1 } },
  visible: { opacity: 1, transition: { type: "easeInOut", duration: 1 } },
};

export const searchInputVariants: animationVariants = {
  hidden: { width: 0, opacity: 0, transition: { duration: 0.4 } },
  visible: { width: "25rem", opacity: 1, transition: { duration: 0.4 } },
  exit: { width: 0, opacity: 0, transition: { duration: 0.5 } },
};
