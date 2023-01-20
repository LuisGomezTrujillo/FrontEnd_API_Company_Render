import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import AddCompanyForm from './components/AddCompanyForm';
import { CompanyList } from './components/CompanyList';
import {NavBar} from './components/NavBar';

const AppRoutes = ()=> (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" exact element={ <CompanyList/> }></Route>
            <Route path="/form_add_company" exact element={ <AddCompanyForm />}></Route>

        </Routes>
    </Router>
)

export default AppRoutes
