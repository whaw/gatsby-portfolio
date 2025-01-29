import DOMPurify from "dompurify";

const sanitizeCopy = (copy: string) => {
  return { __html: DOMPurify.sanitize(copy) };
}

export default sanitizeCopy;