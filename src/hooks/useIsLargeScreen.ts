import { useEffect, useState } from "react";


export function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {

    // get media query
    const mq = window.matchMedia("(min-width: 1024px)");

    const update = () => setIsLarge(mq.matches);

    // update state on mount and query result change
    update();
    mq.addEventListener("change", update);

    // clean up event listener on unmount
    return () => mq.removeEventListener("change", update);

  }, []);

  return isLarge;
}