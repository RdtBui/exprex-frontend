import { useLocation } from 'react-router-dom'
import Logo from '../assets/logo.svg'

import { Link } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/"><img alt="Logo" src={Logo} width="80" height="50" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Business solutions
                            </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about-us">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/become-courier">Become a courier</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact-us">Get in touch</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
