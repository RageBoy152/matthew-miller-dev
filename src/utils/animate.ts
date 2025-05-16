// generates long messy props for reusable animations



export type animOnVisibleProps = {
  reducedMotion: boolean | null;
  delay?: number;
  duration?: number;
  initialXOffset?: string;
  initialYOffset?: string;
  once?: boolean;
  amount?: number;
}

// animate element on visible - scroll into view
export function animOnVisible({...props}: animOnVisibleProps) {
  return {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: {
      amount: props.amount ?? 0.5,
      once: props.once ?? false,
    },
    variants: {
      offscreen: {
        translateX: props.reducedMotion ? 0 : (props.initialXOffset ?? 0),
        translateY: props.reducedMotion ? 0 : (props.initialYOffset ?? 0),
        opacity: props.reducedMotion ? 1 : 0
      },
      onscreen: {
        translateX: 0,
        translateY: 0,
        opacity: 1,
        transition: {
          delay: props.delay ?? 0,
          duration: props.duration ?? 0.7,
          type: "spring",
          bounce: 0
        }
      }
    }
  }
}


// animate with subtle tilt on hover - used on social icons
export function tiltOnHover(reducedMotion: boolean | null) {
  return {
    whileHover: {
      rotate: "5deg",
      scale: 1.1,
    },
    transition: {
      duration: reducedMotion ? 0 : 0.1
    }
  }
}


// animate with one 360 spin on hover - used on tech icons
export function spinOnHover(reducedMotion: boolean | null) {
  return {
    variants: {
      onhover: {
        rotate: "360deg",
        scale: 1.1,
        transition: {
          duration: reducedMotion ? 0 : 0.8,
          type: "spring",
          bounce: 0
        }
      }
    },
    transition: { duration: reducedMotion ? 0 : 0.25 }
  }
}