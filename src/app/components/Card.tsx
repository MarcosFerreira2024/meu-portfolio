import useRandom from "../hooks/useRandom";
import { motion } from "framer-motion";

function Card({
  text,
  number,
  animationDelay,
}: {
  text: string;
  number: number;
  animationDelay: number;
}) {
  const { num } = useRandom({ number });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: animationDelay, ease: "linear" }}
      className="flex flex-row hover:scale-105 duration-300 hover:bg-main text-textos ease hover:text-secundary-text justify-between sm:max-w-[180px] max-w-[180px] min-w-[180px]  sm:min-w-[180px] mainShadow items-center border-2 border-main px-2.5 py-2"
    >
      <p className="text-mid2  ">{text}:</p>
      <p className="text-mid ">{num}</p>
    </motion.div>
  );
}

export default Card;
