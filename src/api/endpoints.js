const BASE_URL = import.meta.env.VITE_API_URL || "";

export const endpoints = {
    login : `${BASE_URL}auth/login`,
    register : `${BASE_URL}auth/register`,

    //theme
    create_theme : `${BASE_URL}theme/create`,
    get_themes : `${BASE_URL}theme/get`,
    update_theme : `${BASE_URL}theme/update`,
    delete_theme : `${BASE_URL}theme/delete`,
}