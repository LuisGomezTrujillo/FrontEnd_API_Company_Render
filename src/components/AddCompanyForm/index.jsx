import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as CompanyServer from'../CompanyList/Peticion.Api';

export default function AddCompanyForm() {
  
  const navigate = useNavigate();
  const initialState = {
    name:"",
    email:"",
    website:"http://",
    fundador: ""
  };

  const [company, setCompany ]= useState(initialState);  
  
  const register=(e)=>{
    setCompany({...company, [e.target.name]: e.target.value})
  } 
  
  const SubmitCompany=async(e)=>{
    e.preventDefault();

    try{
      console.log(company);
      const res=await CompanyServer.Save_Company(company);
      const dat=await res.json();
      console.log(dat);
      navigate("/");
      setCompany(initialState);
    } catch(error){
      console.log(Error)
    }
    
  }

  return(
      <>
        <div className="container col md-3 my-4">
        <form type="submition" onSubmit={SubmitCompany}>
            <div className="mb-3">
              <label className="form-label">Nombre de la empresa</label>
              <input type="text" className="form-control"  name="name" value={company.name} onChange={register}/>
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" name="email" value={company.email} onChange={register}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Sitio Web</label>
              <input type="url" className="form-control"  name="website" value={company.website} onChange={register}/>
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label className="form-label">Fundador</label>
              <input type="text" className="form-control"  name="fundador" value={company.fundador} onChange={register}/>
              <div id="emailHelp" className="form-text"></div>
            </div>
            
            <button type="submit" className="btn btn-dark">Registrar empresa</button>
          </form>
        </div>
      
      </>
    )
    
}