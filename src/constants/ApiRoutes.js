export const API_PROTOCOL = 'https';
export const API_HOST = 'api.themoviedb.org';
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY || '';
export const API_SEARCH_PREFIX = '3/search/movie?query=';
export const API_PREFIX = '3';
export const API_IMAGE_HOST = 'image.tmdb.org';
export const API_IMAGE_PREFIX = 't/p';

export const IMAGE_SIZE_ORIGINAL = 'original';
export const IMAGE_SIZE_400 = 'w400';

export const API_BASE_URL = `${API_PROTOCOL}://${API_HOST}/${API_PREFIX}`;

export const API_SEARCH_URL = `${API_PROTOCOL}://${API_HOST}/${API_SEARCH_PREFIX}`;

export const API_IMAGE_SEARCH = `${API_PROTOCOL}://${API_IMAGE_HOST}/${API_IMAGE_PREFIX}`;
