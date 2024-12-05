import {useRef} from "react";

const useDebounce = (func, delay) => {
  let timer =  useRef();

  return (...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => func(...args), delay);
  }
}

export default useDebounce;