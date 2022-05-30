import { getUnsplashConfig } from "../../../utils";

async function getUnsplashImages({ page, query }) {
  try {
    return await getUnsplashConfig.search.getPhotos({
      query: query,
      page: page,
      perPage: 50,
      orientation: "landscape",
    });
  } catch (error) {
    console.log({ error });
  }
}

export default getUnsplashImages;
