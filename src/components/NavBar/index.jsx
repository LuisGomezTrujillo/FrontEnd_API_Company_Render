
export const NavBar =() => {
return(
    <>
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Company App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/form_add_company">Agregar Empresa</a>
          </li>
        </ul>
        <span className="navbar-text">
          Aplicación de tutuoría en Prospercity
        </span>
      </div>
    </div>
  </nav>

    </>
    
)
    
}

