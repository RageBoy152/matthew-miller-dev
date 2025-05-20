// components
import Image from "next/image";
import { Technology } from "../TechStackList";

// motion
import { useAnimation, motion } from "motion/react";

// hooks
import { useMediaQuery } from "@/hooks/useMediaQuery";


export default function TechnologyPill({ tech, reducedMotion }: { tech: Technology, reducedMotion: boolean }) {
  const animControls = useAnimation();
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  
  // spin on tap on mobile
  const handleTap = async () => {
    if (isLargeScreen) return;

    await animControls.start({
      rotate: 360,
      transition: { duration: 0.3, ease: "easeInOut" }
    });

    await animControls.start({
      rotate: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    });
  }


  // spin 360deg on mouse enter on desktop
  const handleMouseEnter = async () => {
    if (!isLargeScreen) return;

    await animControls.start({
      rotate: 360,
      scale: 1.1,
      transition: {
        duration: reducedMotion ? 0 : 0.8,
        type: "spring",
        bounce: 0.2
      }
    });
  }


  // reset on mouse leave on desktop
  const handleMouseExit = async () => {
    if (!isLargeScreen) return;

    await animControls.start({
      rotate: 0,
      scale: 1
    });
  }



  return (
    <motion.div
      onTap={handleTap}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      className="bg-place-black/50 flex flex-col md:flex-row items-center gap-3 py-2 px-4 md:ps-3 md:pe-6 w-fit uppercase font-space-mono text-xs">
      
      <motion.div animate={animControls}>

        <img className="w-[40px] h-[40px]" src={`tech-icons/${tech.iconName}`} alt={`${tech.label} logo`} />
      </motion.div>

      <p>{tech.label}</p>
    </motion.div>
  );
}