// components
import Image from "next/image";
import { Technology } from "../TechStackList";

// motion
import { useAnimation, motion } from "motion/react";
import { spinOnHover } from "@/utils/animate";

// hooks
import { useMediaQuery } from "@/hooks/useMediaQuery";


export default function TechnologyPill({ tech, reducedMotion }: { tech: Technology, reducedMotion: boolean }) {
  const animControls = useAnimation();
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  
  
  // animate sequentially on tap
  const handleTap = async () => {
    await animControls.start({
      rotate: 360,
      transition: { duration: 0.3, ease: "easeInOut" }
    });

    await animControls.start({
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    });
  }


  return (
    <motion.div
      whileHover={isLargeScreen ? "onhover" : ""}
      onTap={isLargeScreen ? () => {} : handleTap}
      className="bg-place-black/50 flex flex-col md:flex-row items-center gap-3 py-2 px-4 md:ps-3 md:pe-6 w-fit uppercase font-space-mono text-xs">
      
      <motion.div
        {...(isLargeScreen ? { animate: animControls } : {})}
        variants={spinOnHover({ reducedMotion: reducedMotion }).variants}>

        <Image width={40} height={40} src={`tech-icons/${tech.iconName}`} alt={`${tech.label} logo`}></Image>
      </motion.div>

      <p>{tech.label}</p>
    </motion.div>
  );
}