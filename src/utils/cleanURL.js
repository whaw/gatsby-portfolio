
// Remove # and everything after in the URL
const cleanURL = () => {
  const url = window.location.href.toString();

  if (url.indexOf("#") > 0) {
    const newUrl = url.slice(0, url.indexOf("#"));
    window.history.replaceState({}, document.title, newUrl);
  }
}

export default cleanURL;