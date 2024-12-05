
const jsSiteUtils = {
  scrollToID: (id) => {
    window.location.hash = `#${id}`;
    jsSiteUtils.cleanUrl();
  },
  cleanUrl: () => {
    // Remove the # and everything after
    const url = window.location.href.toString();
    if (url.indexOf("#") > 0) {
      const newUrl = url.slice(0, url.indexOf("#"));
      window.history.replaceState({}, document.title, newUrl);
    }
  },
};

export default jsSiteUtils;
