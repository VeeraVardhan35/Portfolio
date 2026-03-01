import { useEffect, useState } from "react";

export function useWordCycle(words, ms = 2500) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setShow(true);
      }, 350);
    }, ms);

    return () => clearInterval(timer);
  }, [ms, words]);

  return [words[index], show];
}
