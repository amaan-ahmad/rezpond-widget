export function isDev() {
    return process.env.NODE_ENV === 'development';
}

export const config = {
    baseUrl: process.env.REACT_APP_BASE_URL
}