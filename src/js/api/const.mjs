export const API_HOST_URL = 'https://api.noroff.dev';
export const API_BASE = '/api/v1';
export const API_SOCIAL_BASE = '/social'
export const API_POST_AUTHOR = '?_author=true&_comments=true&_reactions=true'
export const API_POST_SORT = '?sort=created&sortOrder=desc'
export const API_POST_REVERSE = '?sort=created&sortOrder=asc'
export const API_SOCIAL_URL_AUTHOR = `${API_POST_AUTHOR}`
export const API_SOCIAL_URL = `${API_HOST_URL}${API_BASE}${API_SOCIAL_BASE}`;
