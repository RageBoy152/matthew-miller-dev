// component imports
import { Send } from "lucide-react";

// lib imports
import * as motion from "motion/react-client";
import { animOnVisible, spinOnHover } from "@/utils/animate";

// hook imports
import { useReducedMotion } from "motion/react"


export default function ContactForm() {
  const reducedMotion = useReducedMotion();


  return (
    <form className="flex flex-col gap-5">

      <motion.div {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "5%", once: true })} className="flex flex-col gap-1">
        <label htmlFor="name" className="uppercase font-space-mono text-gray">Name</label>
        <input type="text" name="name" placeholder="John Doe" className="bg-place-black px-4 py-3" required />
      </motion.div>

      <motion.div {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.05, initialYOffset: "5%", once: true })} className="flex flex-col gap-1">
        <label htmlFor="email" className="uppercase font-space-mono text-gray">Email</label>
        <input type="email" name="email" placeholder="example@domain.com" className="bg-place-black px-4 py-3" required />
      </motion.div>

      <motion.div {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="flex flex-col gap-1">
        <label htmlFor="message" className="uppercase font-space-mono text-gray">Message</label>
        <textarea name="message" placeholder="Your message here..." rows={3} maxLength={500} className="bg-place-black px-4 py-3 min-h-fit resize-none" required></textarea>
        <p className="text-sm text-gray">0/500</p>
      </motion.div>

      <motion.button
        {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.15, initialYOffset: "5%", once: true })}
        whileHover="onhover"
        type="submit"
        className="transition-colors cursor-pointer bg-place-black/20 hover:bg-place-black/80 border border-place-black py-3 px-4 flex items-center justify-center gap-1"
      >
        Send Message
        <motion.div {...spinOnHover({ reducedMotion: reducedMotion, duration: 0.5, offHoverDuration: 0.5, offHoverBounce: 0.3, bounce: 0.3 })}>
          <Send className="inline h-4" />
        </motion.div>
      </motion.button>

    </form>
  );
}