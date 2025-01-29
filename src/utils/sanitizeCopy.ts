import DOMPurify from "dompurify";

const sanitizeCopy = (copy: string) => {
  return DOMPurify.sanitize(copy || "");
}

export default sanitizeCopy;