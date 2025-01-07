
// Remove the # and everything after in the url
// Setup this way so it would work locally. Can be built out to clean up after domain name as need arises

const cleanURL = () => {
  const url = window.location.href.toString();

  if (url.indexOf("#") > 0) {
    const newUrl = url.slice(0, url.indexOf("#"));
    window.history.replaceState({}, document.title, newUrl);
  }
}

export default cleanURL;