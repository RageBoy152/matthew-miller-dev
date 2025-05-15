// generates long messy props for reusable animations


// animate mobile navbar on toggle
export function getNavBarToggleAnimProps(reducedMotion, navbarActive) {
  return {
    initial: {
      translateX: reducedMotion ? "-5%" : 0,
      opacity: reducedMotion ? 1 : 0
    },
    animate: {
      translateX: navbarActive ? 0 : "-5%",
      opacity: navbarActive ? 1 : 0
    },
    transition: {
      duration: 0.4,
      type: "spring",
      bounce: 0
    }
  }
}


// animate children on scroll into view
export function getAnimOnScreenParentProps(amount = 0.5, once = false, initial = "offscreen") {
  return {
    initial: initial,
    whileInView: "onscreen",
    viewport: {
      amount: amount,
      once: once
    }
  }
}


// animate element on scroll into view
export function getAnimOnScreenProps(reducedMotion, delay = 0, duration = 1, initialXOffset = "0%", initialYOffset = "0%") {
  return {
    variants: {
      offscreen: {
        translateX: reducedMotion ? 0 : initialXOffset,
        translateY: reducedMotion ? 0 : initialYOffset,
        opacity: reducedMotion ? 1 : 0
      },
      onscreen: {
        translateX: 0,
        translateY: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: duration,
          type: "spring",
          bounce: 0
        }
      }
    }
  }
}


// animate with subtle tilt on hover - used on social icons
export function tiltOnHover(reducedMotion) {
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
export function spinOnHover(reducedMotion) {
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