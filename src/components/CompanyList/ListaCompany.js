
export const ListaCompany =({company})=>{
   
return(
    <>
        <div className="card text-bg-dark mb-4" >
        <div className="card-header card-title border-info text-info"><strong>{company.name}</strong></div>
        <div className="card-body">
        <p className="card-text">Correo electrónico: <strong>{company.email}</strong></p>
            <p className="card-text">Fundador: <strong>{company.fundador}</strong></p>
            <p className="card-text"><strong><a href={company.website} target="_blank" className="btn btn-info mx-0" rel="noopener noreferrer">Visitar empresa</a></strong></p>
        </div>
        </div>
</>
)
}