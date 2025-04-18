import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

interface DynamicButtonProps {
  text: string;
  bg: "white" | "black" | "custom-black" | "orange";
  color: "white" | "black" | "orange";
}

const DynamicButton: React.FC<DynamicButtonProps> = ({ bg, color, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const bgClasses: Record<DynamicButtonProps["bg"], string> = {
    white: "bg-white",
    black: "bg-black",
    "custom-black": "bg-[#111111]",
    orange: "bg-orange-400",
  };

  const textClasses: Record<DynamicButtonProps["color"], string> = {
    white: "text-white",
    black: "text-black",
    orange: "text-orange-400",
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex cursor-pointer items-center gap-1 rounded-md px-6 py-3 text-sm font-[600] outline-none ${bgClasses[bg]} ${textClasses[color]}`}
    >
      {text}

      <motion.span
        initial={{ x: -10, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className={`text-2xl font-semibold ${isHovered ? "block" : "hidden"} ${textClasses[color]}`}
      >
        <IoIosArrowRoundForward />
      </motion.span>
    </button>
  );
};

export default DynamicButton;
