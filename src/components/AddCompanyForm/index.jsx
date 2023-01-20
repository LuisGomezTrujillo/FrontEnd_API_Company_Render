
export default function AddCompanyForm() {
    
  return(
      <>
        <form>
            <div className="mb-3">
              <label for="companyNamo" className="form-label">Nombre de la empresa</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label for="companyEmail" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="companyWebSite" className="form-label">Sitio Web</label>
              <input type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label for="companyFundador" className="form-label">Sitio Web</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text"></div>
            </div>
            
            <button type="submit" className="btn btn-dark">Registrar empresa</button>
          </form>
        </>
    )
    
}