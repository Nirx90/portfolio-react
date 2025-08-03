const BASE_URL = import.meta.env.VITE_API_URL || "";

export const endpoints = {
    login : `${BASE_URL}auth/login`,
    register : `${BASE_URL}auth/register`
}