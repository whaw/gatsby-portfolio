
// Remove the # and everything after in the url
// Consider adding cleanup after domain name (keep below for local testing)

const cleanURL = () => {
  const url = window.location.href.toString();

  if (url.indexOf("#") > 0) {
    const newUrl = url.slice(0, url.indexOf("#"));
    window.history.replaceState({}, document.title, newUrl);
  }
}

export default cleanURL;