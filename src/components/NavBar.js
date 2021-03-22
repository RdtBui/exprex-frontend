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
        backgroundColor: '#E7F2F8'
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
        <nav className={`${classes[navRef.current]} navbar navbar-expand-lg navbar-dark`} style={{ width: "100%", padding: "14px 60px" }}>
            <a className="navbar-brand" href="/">
                {/* Brand Logo */}
                {/* <img alt="Logo" src={Logo} width="110" height="110" /> */}
                <h3 className="mb-0">EXPR<span style={{ color: "#167CAC" }}>EX</span></h3>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="mr-auto"></div>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown mt-2 ml-2">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <li className="nav-item mt-2 ml-2">
                        <a className="nav-link text-white" href="/about-us">About Us</a>
                    </li>
                    <li className="nav-item mt-2 ml-2">
                        <a className="nav-link text-white" href="/become-courier">Become a courier</a>
                    </li>
                    <li className="nav-item ml-4">
                        <a className="nav-link btn" href="/contact-us" style={{ backgroundColor: "#C35046" }}>Get in touch</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
