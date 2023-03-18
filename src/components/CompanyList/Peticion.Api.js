
const API_KEY = "http://127.0.0.1:8000/api/company/"

export const Peticion_Api = async() => {

    const datos_recibidos = await fetch(API_KEY);
    console.log(datos_recibidos);

    return datos_recibidos
}

export const Save_Company=async(company)=>{
    return await fetch(API_KEY, {
        method: "POST",
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({
            "name": String(company.name).trim(),
            "email": String(company.email).trim(),
            "website": String(company.website).trim(),
            "fundador": String(company.fundador).trim(),
        })
    }
    )
}

export const DeleteCompany = async(id)=>{
    return await fetch(`${API_KEY}${id}/`,{
        method:"DELETE"
    })
}