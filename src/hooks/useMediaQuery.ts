import { useEffect, useState } from "react";


export function useMediaQuery(query: string) {
  const [isQuery, setIsQuery] = useState(false);

  useEffect(() => {

    // get media query
    const mq = window.matchMedia(query);

    const update = () => setIsQuery(mq.matches);

    // update state on mount and query result change
    update();
    mq.addEventListener("change", update);

    // clean up event listener on unmount
    return () => mq.removeEventListener("change", update);

  }, []);

  return isQuery;
}