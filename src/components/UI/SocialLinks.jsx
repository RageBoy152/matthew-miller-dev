// component imports
import { Github, Linkedin, Mail } from "lucide-react";

// lib imports
import * as motion from "motion/react-client"
import { tiltOnHover } from "@/lib/animate";

// hook imports
import { useReducedMotion } from "motion/react"


export default function SocialLinks({ tailwindClasses }) {
  const reducedMotion = useReducedMotion();


  return (
    <div className={`${tailwindClasses} flex gap-5 text-2xl`}>
      <motion.a {...tiltOnHover(reducedMotion)} href="https://github.com/RageBoy152" target="_blank"><Github /></motion.a>
      <motion.a {...tiltOnHover(reducedMotion)} href="https://www.linkedin.com/in/matthew-miller-87161b313/" target="_blank"><Linkedin /></motion.a>
      <motion.a {...tiltOnHover(reducedMotion)} href="mailto:mmilleruk@hotmail.com"><Mail /></motion.a>
    </div>
  );
}