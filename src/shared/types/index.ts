export type JSONObject = {
  [key: string]: any;
};

export interface UnsplashPhoto {
  id: string;
  color: string;
  alt_description: string;
  created_at: string;
  width: number;
  height: number;
  description: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
}

export interface UnsplashSearchPhotoResponse {
  results: UnsplashPhoto[];
  total: number;
}
