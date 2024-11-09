import { Footer, Navbar } from "../components";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { Home } from "../components/Home";

function HomeLayout() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Navbar
        wantBg={true}
        logout={false}
      />
      <motion.div
        layout
        className="relative flex flex-auto overflow-hidden"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col "
        >
          <main className="w-full flex-auto">
            <Home />
          </main>
          {/* Footer */}
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export default HomeLayout;
