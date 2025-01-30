import {useRef} from "react";

const useDebounce = <T extends(...args: any[]) => void>(func: T, delay = 0) => {
  let timer =  useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: Parameters<T>) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      func(...args);
    }, delay);
  }
}

export default useDebounce;