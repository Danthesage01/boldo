import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

const FadeIn = ({
  children,
  duration = 0.6,
  delay = 0,
  easing = [0.42, 0, 0.58, 1], // Smooth cubic-bezier for natural animation
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, delay, ease: easing }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStaggerGroup = ({ children }) => (
  <FadeInStaggerContext.Provider value={true}>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15, // Adjust for spacing between elements in stagger
          },
        },
      }}
    >
      {children}
    </motion.div>
  </FadeInStaggerContext.Provider>
);

export default FadeIn;
