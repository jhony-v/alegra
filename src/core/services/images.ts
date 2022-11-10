import { unspashApi } from "@/config/api/unsplash";
import { UNSPLASH_API_KEY } from "@/config/envs";
import type { UnsplashSearchPhotoResponse } from "@/shared/types";

export const getPublicImages = async (query: string, total = 10) => {
  const response = await search({ query, total });
  const normalizeImages = response.data.results.map((image) => {
    return {
      image: image.urls.small,
      description: image.description,
    };
  });
  return { data: normalizeImages };
};

// internal wrapper for searching photos
function search({ query, total }: { query: string; total: number }) {
  const params = new URLSearchParams({
    query,
    per_page: String(total),
    client_id: UNSPLASH_API_KEY,
  });
  const path = `/search/photos?${params}`;
  return unspashApi.get<UnsplashSearchPhotoResponse>(path);
}
