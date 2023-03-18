import * as Functions_API from "./Peticion.Api"

export const ListaCompany =({company, peticion})=>{

const DeleteCompany = async(id) => {
    console.log(id);
    const re=await Functions_API.DeleteCompany(id);
    const data = await re.json();
    console.log(data);
    peticion();
    
}

return(
    <>
      <div className="col-md-4 my-1">
        <div className="card text-bg-dark mb-4" >
        <div className="card-header card-title border-info text-info"><strong>{company.name}</strong></div>
        <div className="card-body">
        <p className="card-text">Correo electrónico: <strong>{company.email}</strong></p>
            <p className="card-text">Fundador: <strong>{company.fundador}</strong></p>
            <p className="card-text"><strong><a href={company.website} target="_blank" className="btn btn-info mx-0" rel="noopener noreferrer">Visitar empresa</a></strong></p>
            <button className="btn btn-outline-danger mx-1 my-1" onClick={()=> company.id && DeleteCompany(company.id)}>Eliminar</button>
        </div>
        </div>
      </div>
</>
)
}