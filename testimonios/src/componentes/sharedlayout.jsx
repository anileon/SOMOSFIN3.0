import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import experiencia1 from '../assets/experiencia1.png';


export default function SharedLayout() {
    return (
        <div>
            <Link to="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"> <img src={experiencia1}/></Link>
            <Link to="/planes" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Membresia</Link>
            <Outlet />
            <h1>Footer</h1>
            
        </div>

    )

}