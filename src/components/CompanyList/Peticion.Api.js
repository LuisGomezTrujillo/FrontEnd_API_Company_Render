
const API_KEY = "http://127.0.0.1:8000/api/company/"

export const Peticion_Api = async() => {

    const datos_recibidos = await fetch(API_KEY);
    console.log(datos_recibidos);

    return datos_recibidos
}