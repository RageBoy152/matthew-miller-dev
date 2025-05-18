// component imports
import { Github, Linkedin, Mail } from "lucide-react";

// lib imports
import * as motion from "motion/react-client"
import { tiltOnHover } from "@/utils/animate";

// hook imports
import { useReducedMotion } from "motion/react"


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