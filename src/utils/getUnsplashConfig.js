import { createApi } from "unsplash-js";

const getUnsplashConfig = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESKEY,
});

export default getUnsplashConfig;
