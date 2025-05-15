import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-5">

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="uppercase font-space-mono text-gray">Name</label>
        <input type="text" name="name" placeholder="John Doe" className="bg-place-black px-4 py-3" required />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="uppercase font-space-mono text-gray">Email</label>
        <input type="email" name="email" placeholder="example@domain.com" className="bg-place-black px-4 py-3" required />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="uppercase font-space-mono text-gray">Message</label>
        <textarea name="message" placeholder="Your message here..." rows={3} maxLength={500} className="bg-place-black px-4 py-3 min-h-fit resize-none" required></textarea>
        <p className="text-sm text-gray">0/500</p>
      </div>

      <button type="submit" className="transition-colors cursor-pointer bg-place-black/20 hover:bg-place-black/80 border border-place-black py-3 px-4">Send Message <Send className="inline h-4" /></button>

    </form>
  );
}