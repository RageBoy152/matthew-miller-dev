// icons
import { Github, Linkedin, Mail } from "lucide-react";

// motion
import { motion, useReducedMotion } from "motion/react"
import { tiltOnHover } from "@/utils/animate";


export default function SocialLinks({ tailwindClasses = "" }: { tailwindClasses?: string }) {
  const reducedMotion = useReducedMotion();


  return (
    <div className={`${tailwindClasses} flex gap-1 text-2xl`}>
      <motion.a className="transition-colors hover:text-accent p-2" {...tiltOnHover(reducedMotion)} href="https://github.com/RageBoy152" target="_blank"><Github /></motion.a>
      <motion.a className="transition-colors hover:text-accent p-2" {...tiltOnHover(reducedMotion)} href="https://www.linkedin.com/in/matthew-miller-87161b313/" target="_blank"><Linkedin /></motion.a>
      <motion.a className="transition-colors hover:text-accent p-2" {...tiltOnHover(reducedMotion)} href="mailto:mmilleruk@hotmail.com"><Mail /></motion.a>
    </div>
  );
}