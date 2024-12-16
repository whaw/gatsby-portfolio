const scrollToID = (id) => {
  const target = document.getElementById(id);

  if (!target) {
    console.warn(`No element with ID: ${id}`);
    return;
  }

  window.location.hash = `#${id}`;
  if (id === "home") cleanUrl();
}

// Remove the # and everything after in the url
const cleanUrl = () => {
  const url = window.location.href.toString();

  if (url.indexOf("#") > 0) {
    const newUrl = url.slice(0, url.indexOf("#"));
    window.history.replaceState({}, document.title, newUrl);
  }
}

export default scrollToID;