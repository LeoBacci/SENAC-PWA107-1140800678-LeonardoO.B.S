import { Link } from 'react-router-dom';
import './estilo.css';

function Header() {
    return (
        <header>
            <h1>Bem Vindo à Nossa Empresa</h1>
            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
            </div>
        </header>
    )
}
export default Header;