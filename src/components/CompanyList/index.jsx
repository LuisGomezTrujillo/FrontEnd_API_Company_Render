import { useEffect, useState } from 'react';
import { ListaCompany } from './ListaCompany';
import * as Functions_API from './Peticion.Api';

export function CompanyList() {

const [companies, setCompanies] =useState([]);

const peticion= async()=>{

    try{
        const data= await Functions_API.Peticion_Api();
        const data_f = await data.json();
        console.log(data);
        console.log(data_f);
        console.log(data_f.companies);
        setCompanies(data_f.companies);
    } catch(error){
        console.log(error)
    }
    
}

useEffect(()=>{
    peticion();
},[]);

return(
    <>
        <div className='container my-2'>
            <h1>Empresas Registradas</h1>
            <div className='row'>
            {   companies.map((company)=>(
                <ListaCompany company={company} key={company.id} peticion={peticion}/>
            ))}
            </div>
        </div>
        
    </>
)
    
}