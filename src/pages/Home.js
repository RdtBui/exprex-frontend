import React, { useEffect, useState } from 'react'

import Typewriter from 'typewriter-effect'

import Restaurants from '../assets/visuel-header-restaurants.png'
import RightArrowIcon from '../assets/icon-arrow-right.svg'
import M1 from '../assets/miniature-cardshpuk.png'
import M2 from '../assets/miniature-ecommerce.png'
import M3 from '../assets/miniature-restaurants.png'
import M4 from '../assets/miniature-retail-and-luxury.png'
import MontrealMap from '../assets/montreal-map.svg'

const Home = () => {

    const [animation, setAnimation] = useState('')

    const navRef = React.useRef()
    navRef.current = animation

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 900
            if (show) {
                setAnimation('bounce-in-top')
            } else {
                setAnimation('')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="col no-gutters position-relative" style={{ padding: '0' }}>

            {/* Section 1 */}
            <div className="flex-row flex-col no-gutters">
                <section className="d-flex align-items-center overflow-hidden" style={{ padding: "50px 0", zIndex: "3", minHeight: "calc(100vh - 40px)" }}>
                    <span className="bg section1"></span>
                    <div className="container large d-flex justify-content-between align-items-center flex-row-reverse">
                        <div className="wrapper-text" >
                            <h1>We deliver
                                <span>
                                    {/* Typewriter-effect library used from github.com/tameemsafi/typewriterjs#readme */}
                                    <Typewriter
                                        options={{ autoStart: true, loop: true }}
                                        onInit={(typewriter) => {
                                            typewriter.typeString('<span style="color: #FF0000;">chicken bbq</span>')
                                                .callFunction(() => {
                                                    console.log('String typed out!');
                                                })
                                                .pauseFor(1500)
                                                .deleteAll()
                                                .pauseFor(1500)
                                                .typeString('<span style="color: purple;">heineken</span>')
                                                .pauseFor(1500)
                                                .deleteAll()
                                                .pauseFor(1500)
                                                .start();
                                        }} />
                                </span>
                            </h1>

                            <p>Power your x with on-demand deliveries</p>
                            <a className="btn large" style={{ backgroundColor: "rgb(82, 166, 251)" }}>
                                <span>Get started </span>
                                <img src={RightArrowIcon} width="10" height="10" />
                            </a>
                        </div>
                        <div className="wrapper-illus" >
                            <img alt="Restaurants" src={Restaurants} width='100%' />
                        </div>
                    </div>
                </section>
            </div>
            {/* Section 2 */}
            <div className="flex-row no-gutters">
                <div className="section2 d-flex justify-content-center align-items-center" style={{
                    position: "relative",
                    paddingTop: "125px",
                    paddingBottom: "125px",
                    zIndex: "2"
                }}>
                    <div className="d-flex container text-align-center align-items-center justify-content-center" style={{ marginTop: "-38vh" }}>
                        <div className="cta-blocks text-align-center">
                            <div className="cta-block text-center">
                                <div className="cta-txt">
                                    <h3 style={{ color: "#105285" }}>For couriers</h3>
                                    <p>
                                        <span>Join a vibrant community of independent chickens</span>
                                    </p>
                                </div>
                                <a className="btn" href="#" style={{ backgroundColor: "#105285" }}>Become a chicken</a>
                                {/* Rain drop effect */}
                                <div className="lines">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                            </div>
                            <div className="cta-block text-center">
                                <div className="cta-txt">
                                    <h3 style={{ color: "#105285" }}>For businesses</h3>
                                    <p>
                                        <span>Start delivering happiness to all your clients, on-demand</span>
                                    </p>
                                </div>
                                <a className="btn" href="#" style={{ backgroundColor: "rgb(82, 166, 251)" }}>Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                {/* style={{ marginTop: "-38vh" }} */}
                {/* Scrolling text */}
                <h1 className="d-flex justify-content-center">We partner with 17 of your local favorites</h1>
                <div style={{ height: "100px" }}>
                    <div class="demo-1">
                        <h3 style={{ whiteSpace: "nowrap" }}>IGA    NUVO     ETCC   TEXT WITH LOGO</h3>
                    </div>
                </div>

            </div>

            {/* Top wave page separator */}
            <div style={{ position: "relative", left: "0", top: "0" }}>
                <svg className="wave-container first-wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF9E79" fill-opacity="1" d="M0,0L30,42.7C60,85,120,171,180,197.3C240,224,300,192,360,202.7C420,213,480,267,540,272C600,277,660,235,720,218.7C780,203,840,213,900,218.7C960,224,1020,224,1080,202.7C1140,181,1200,139,1260,149.3C1320,160,1380,224,1410,256L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                <svg className="wave-container second-wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFD1A9" fill-opacity="1" d="M0,96L24,133.3C48,171,96,245,144,266.7C192,288,240,256,288,202.7C336,149,384,75,432,85.3C480,96,528,192,576,240C624,288,672,288,720,250.7C768,213,816,139,864,138.7C912,139,960,213,1008,234.7C1056,256,1104,224,1152,181.3C1200,139,1248,85,1296,80C1344,75,1392,117,1416,138.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
            </div>

            {/* Section 3 */}
            <div className="flex-row no-gutters">
                <div className="section3 d-flex justify-content-center align-items-center px-5">
                    <div className="row p-5">
                        <div className="col-sm-3">
                            <div className={`card text-center m-1 py-5 ${[navRef.current]}`}>
                                <div className="card-body">
                                    <img src={M1} width='100%' />
                                    <h5 className="card-title">
                                        <a href="#" className="title">Groceries</a>
                                    </h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className={`card text-center m-1 py-5 ${[navRef.current]}`}>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={M2} width='100%' />
                                        <a href="#" className="title">Cannabis</a>
                                    </h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className={`card text-center m-1 py-5 ${[navRef.current]}`}>
                                <div className="card-body">
                                    <img src={M3} width='100%' />
                                    <h5 className="card-title">
                                        <a href="#" className="title">Restaurants</a>
                                    </h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className={`card text-center m-1 py-5 ${[navRef.current]}`} >
                                <div className="card-body">
                                    <img src={M4} width='100%' />
                                    <h5 className="card-title">
                                        <a href="#" className="title">McPoulet</a>
                                    </h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Bottom wave page separator */}
            <div className="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFD1A9" fill-opacity="1" d="M0,32L34.3,74.7C68.6,117,137,203,206,202.7C274.3,203,343,117,411,117.3C480,117,549,203,617,197.3C685.7,192,754,96,823,53.3C891.4,11,960,21,1029,42.7C1097.1,64,1166,96,1234,117.3C1302.9,139,1371,149,1406,154.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
            </div>

            {/* TODO: Add more content for section 4 according to product owner's needs */}
            <div className="flex-row no-gutters">
                <div className="section4 d-flex justify-content-center align-items-center">
                    Section 4
                </div>
            </div>
            <img alt="Montreal map" src={MontrealMap} style={{ width: "100%" }} />
        </div >
    )
}

export default Home;
