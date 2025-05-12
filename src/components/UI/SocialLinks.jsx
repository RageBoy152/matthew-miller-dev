export default function SocialLinks({ tailwindClasses }) {
  return (
    <div className={`${tailwindClasses} flex gap-5 text-2xl`}>
      <a href="https://github.com/RageBoy152" target="_blank"><i className="bi bi-github"></i></a>
      <a href="https://www.linkedin.com/in/matthew-miller-87161b313/" target="_blank"><i className="bi bi-linkedin"></i></a>
      <a href="mailto:mmilleruk@hotmail.com"><i className="bi bi-envelope"></i></a>
    </div>
  );
}