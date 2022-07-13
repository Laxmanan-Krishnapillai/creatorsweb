import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
export const Mouse = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <motion.div
      style={{
        top: y,
        left: x,
      }}
      className={`absolute rounded-full -translate-x-1/2 pointer-events-none origin-center -translate-y-1/2 w-20 h-20 bg-black`}
    ></motion.div>
  );
};
