import { useLocation } from 'react-router-dom'
import Logo from '../assets/logo.svg'


const Header = () => {
    // Logo, Nav, div
    return (
        <header className='header container-full'>
            <img alt="Logo" src={Logo} />

        </header>
    )
}

export default Header;
