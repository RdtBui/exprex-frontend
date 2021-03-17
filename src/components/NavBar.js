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
            <a class="navbar-brand" href="/"><img alt="Logo" src={Logo} width="100" height="100" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Business solutions
                        </a>
                        <div class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Take a shit</a>
                            <a class="dropdown-item" href="#">Take a dump</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Drop a deuce</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about-us">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/become-courier">Become a courier</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn" href="/contact-us" style={{ backgroundColor: "#105285" }}>Get in touch</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
