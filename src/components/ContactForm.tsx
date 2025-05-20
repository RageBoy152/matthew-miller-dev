// icons
import { CircleCheckBig, Frown, Send, X } from "lucide-react";
import { Bouncy } from "ldrs/react";
import "ldrs/react/Bouncy.css";

// motion
import { motion, useReducedMotion } from "motion/react";
import { animOnVisible, spinOnHover } from "@/utils/animate";

// types
import { FormEvent, MouseEvent, useState } from "react";
import SocialLinks from "./UI/SocialLinks";


enum FormStatus { Standby, Pending, Finished, Error }


export default function ContactForm() {
  const reducedMotion = useReducedMotion();

  // form message field value - used for message char count
  const [msgValue, setMsgValue] = useState<string>("");

  // form submit status
  const [formStatus, setFormStatus] = useState<FormStatus>(FormStatus.Standby);

  // form submit error messages
  const [errorMsg, setErrorMsg] = useState<String | null>(null);
  const [oldErrorMsg, setOldErrorMsg] = useState<String | null>(null);


  // show form submit feedback to user
  const showFormRes = async (sucess: boolean, statusText: string) => {
    // form status = finished | error
    setFormStatus(sucess ? FormStatus.Finished : FormStatus.Error);

    // show error modal on error
    if (!sucess) setErrorMsg(statusText);
    else {
      // after 2s, reset form status if sucess
      await new Promise((res) => setTimeout(res, 2000));
      setFormStatus(FormStatus.Standby);
    }
  }


  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // prevent refresh
    e.preventDefault();


    // parse form data and set status to pending
    const formData = new FormData(e.currentTarget);
    setFormStatus(FormStatus.Pending);


    // send post req to netlify forms with data
    fetch("/netlifyforms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // @ts-ignore
      body: new URLSearchParams(formData as any).toString(),
    })
    .then((res) => {
      // check res
      if (!res.ok) throw `Error ${res.status} | ${res.statusText}`;
    
      // form submit success
      showFormRes(true, res.statusText);
    })
    // @ts-ignore
    .catch((err) => {
      // form submit error
      showFormRes(false, err.toString());
    })
  }
  


  const closeModal = (e: MouseEvent<HTMLElement>, pageCover?: boolean) => {
    if ((pageCover && e.target === e.currentTarget) || !pageCover) {
      setOldErrorMsg(errorMsg);
      setErrorMsg(null);
      setFormStatus(FormStatus.Standby);
    }
  };



  return (
    <>
      <div onClick={(e) => closeModal(e, true)} className={`fixed flex items-center top-0 start-0 z-50 w-full h-full bg-black lg:bg-black/80 transition-opacity ${errorMsg ? "" : "opacity-0 pointer-events-none"}`}>
        <div className="
        w-10/12 lg:w-1/2
        h-min max-h-full py-6 mx-auto flex flex-col items-center bg-black shadow-accent px-6">
          
          {/*  MODAL HEADER  */}
          <div className="flex items-center w-full justify-between gap-4">
            <h2 className="text-3xl md:text-4xl text-white font-kanit uppercase text-wrap break-words  h-fit">Error Submitting Form</h2>

            <button onClick={closeModal} aria-label="close" className="hover:text-accent cursor-pointer aspect-square"><X className="mx-auto h-5 lg:h-6" /></button>
          </div>


          {/*  MODAL CONTENT  */}
          <div className="flex w-full flex-col items-center">
            <p className="w-full text-red-700 font-space-mono text-xs text-start">{errorMsg ?? oldErrorMsg}</p>

            <p className="mt-4 mb-2 w-full text-start lg:text-center">Sorry for the inconvenience, here&apos;s more ways to get in touch with me:</p>
            <SocialLinks />
          </div>
        </div>
      </div>



      <form name="contact" onSubmit={handleFormSubmit} className="flex flex-col gap-5">
        <input type="hidden" name="form-name" value="contact" />

        <motion.div {...animOnVisible({ reducedMotion: reducedMotion, initialYOffset: "5%", once: true })} className="flex flex-col gap-1">
          <label htmlFor="name" className="uppercase font-space-mono text-gray">Name</label>
          <input type="text" name="name" placeholder="John Doe" className="bg-place-black px-4 py-3"  />
        </motion.div>

        <motion.div {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.05, initialYOffset: "5%", once: true })} className="flex flex-col gap-1">
          <label htmlFor="email" className="uppercase font-space-mono text-gray">Email</label>
          <input type="email" name="email" placeholder="example@domain.com" className="bg-place-black px-4 py-3"  />
        </motion.div>

        <motion.div {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.1, initialYOffset: "5%", once: true })} className="flex flex-col gap-1">
          <label htmlFor="message" className="uppercase font-space-mono text-gray">Message</label>
          <textarea name="message" placeholder="Your message here..." value={msgValue} onInput={(e) => setMsgValue(e.currentTarget.value)} rows={3} maxLength={500} className="bg-place-black px-4 py-3 min-h-fit resize-none" ></textarea>
          <p className="text-sm text-gray">{msgValue.length}/500</p>
        </motion.div>

        <motion.button
          {...animOnVisible({ reducedMotion: reducedMotion, delay: 0.15, initialYOffset: "5%", once: true })}
          whileHover="onhover"
          type="submit"
          className={`transition-colors cursor-pointer ${formStatus == FormStatus.Finished ? "bg-green-500/40" : formStatus == FormStatus.Error ? "bg-red-500/40" : "bg-place-black/20"} hover:bg-place-black/80 border border-place-black py-3 px-4 flex items-center justify-center gap-1`}
        >

          {formStatus == FormStatus.Standby && "Send Message"}
          {formStatus == FormStatus.Pending && ""}
          {formStatus == FormStatus.Finished && "Message Received"}
          {formStatus == FormStatus.Error && "Error Sending Message"}
          
          <motion.div
            {...(formStatus == FormStatus.Standby ? spinOnHover({ reducedMotion: reducedMotion, duration: 0.5, offHoverDuration: 0.5, offHoverBounce: 0.3, bounce: 0.3 }) : {})}
            transition={{
              duration: reducedMotion ? 0 : 0.5,
              type: "spring",
              bounce: 0.3
            }}>
            
            {formStatus == FormStatus.Standby && <Send className="inline h-4" />}
            {formStatus == FormStatus.Pending && <Bouncy size={25} speed={1.75} color="white" />}
            {formStatus == FormStatus.Finished && <CircleCheckBig className="inline h-4" />}
            {formStatus == FormStatus.Error && <Frown className="inline h-4" />}

          </motion.div>
        </motion.button>

      </form>
    
    </>
  );
}