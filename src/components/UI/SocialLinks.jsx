import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks({ tailwindClasses }) {
  return (
    <div className={`${tailwindClasses} flex gap-5 text-2xl`}>
      <a href="https://github.com/RageBoy152" target="_blank"><Github /></a>
      <a href="https://www.linkedin.com/in/matthew-miller-87161b313/" target="_blank"><Linkedin /></a>
      <a href="mailto:mmilleruk@hotmail.com"><Mail /></a>
    </div>
  );
}