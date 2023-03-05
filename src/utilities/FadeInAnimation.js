import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const FadeInOnVisible = ({ children }) => {
  const { inView, ref } = useInView({
    threshold: 0.5,
    triggerOnce: false,

  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
  });

  return (
    <animated.div ref={ref} style={fadeIn}>
      {children}
    </animated.div>
  );
};

export default FadeInOnVisible;
