function getUrlData({ link }) {
  const checkUrl = () => {
    if (link !== "") {
      try {
        return new URL(link);
      } catch (error) {
        return null;
      }
    }
    return null;
  };

  const getHost = () => {
    const url = checkUrl();
    if (url !== null) {
      return url.host;
    }
    return null;
  };
  return { getHost };
}

export default getUrlData;
