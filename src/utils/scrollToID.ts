import cleanURL from "./cleanURL";

const scrollToID = (id: string) => {
  const target = document.getElementById(id);

  if (!target) {
    console.warn(`No element with ID: ${id}`);
    return;
  }

  window.location.hash = `#${id}`;
  if (id === "home") {
    setTimeout(() => cleanURL(), 10);
  }
}

export default scrollToID;