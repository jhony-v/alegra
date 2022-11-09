import { googleImagesApi } from "@/config/api";
import { GOOGLE_IMAGE_API_KEY } from "@/config/environments";
import { images } from "@/mocks";

export const getPublicImages = async (term: string, total = 100) => {
  try {
    const params = new URLSearchParams({
      q: term,
      tbm: "isch",
      num: String(total),
      api_key: GOOGLE_IMAGE_API_KEY,
    });
    const response = await googleImagesApi.get(`/search?${params}`);
    const imagesResults = (response.data?.images_results || []).slice(0, total);
    const normalizeImages = imagesResults.map(
      (result: { thumbnail: string }) => {
        return {
          image: result.thumbnail,
        };
      }
    );
    return { data: normalizeImages };
  } catch {
    return { data: images };
  }
};
