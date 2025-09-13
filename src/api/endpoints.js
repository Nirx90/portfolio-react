const BASE_URL = import.meta.env.VITE_API_URL || "";

export const endpoints = {
    login : `${BASE_URL}auth/login`,
    register : `${BASE_URL}auth/register`,
    get_profile : `${BASE_URL}auth/profile`,
    update_profile : `${BASE_URL}auth/update`,

    //theme
    create_theme : `${BASE_URL}theme/create`,
    get_themes : `${BASE_URL}theme/get`,
    update_theme : `${BASE_URL}theme/update`,
    delete_theme : `${BASE_URL}theme/delete`,

    //contact inquiary
    create_inquiry : `${BASE_URL}contact/create`,
    get_inquies : `${BASE_URL}contact/get`,
    delete_inquiry : `${BASE_URL}contact/delete`,

}