import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    🔥 Escola Fênix
                </Link>
                <ul className="nav-menu">
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/cursos">Cursos</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;