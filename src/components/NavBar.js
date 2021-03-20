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
        backgroundColor: 'rgba(67, 129, 168, 0.2)'
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
            <a className="navbar-brand ml-5 align-middle" href="/">
                {/* Brand Logo */}
                {/* <img alt="Logo" src={Logo} width="110" height="110" /> */}
                <h1 style={{ marginBottom: "0" }}>EXPR<span style={{ color: "skyblue" }}>EX</span></h1>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mr-auto"></div>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Business solutions
                        </a>
                        <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Groceries</a>
                            <a className="dropdown-item" href="#">Pharmacy</a>
                            <a className="dropdown-item" href="#">Restaurants</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Requests</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about-us">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/become-courier">Become a courier</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn" href="/contact-us" style={{ backgroundColor: "#105285" }}>Get in touch</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
