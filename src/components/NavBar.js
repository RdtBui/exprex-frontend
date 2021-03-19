import { useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg'
import { makeStyles } from '@material-ui/styles'

import { Link } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBarTransparent: {
        backgroundColor: 'rgba(67, 129, 168, 0.5)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(67, 129, 168)'
    }
})
)

const NavBar = () => {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')

    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 1
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`${classes[navRef.current]} navbar navbar-expand-lg navbar-dark`} style={{ width: "100%" }}>
            <a class="navbar-brand ml-5" href="/"><img alt="Logo" src={Logo} width="110" height="110" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="mr-auto"></div>
                <ul class="navbar-nav">
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
