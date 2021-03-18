import Restaurants from '../assets/visuel-header-restaurants.png'
import RightArrowIcon from '../assets/icon-arrow-right.svg'
import M1 from '../assets/miniature-cardshpuk.png'
import M2 from '../assets/miniature-ecommerce.png'
import M3 from '../assets/miniature-restaurants.png'
import M4 from '../assets/miniature-retail-and-luxury.png'

import React, { useEffect, useState } from 'react'

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
        <div class="col no-gutters position-relative" style={{ padding: '0' }}>
            {/* Section 1 */}
            <div class="flex-row flex-col no-gutters">
                <section class="d-flex align-items-center overflow-hidden" style={{ padding: "50px 0", zIndex: "1", minHeight: "calc(100vh - 40px)" }}>
                    <span class="bg section1"></span>
                    <div class="container large d-flex justify-content-between align-items-center flex-row-reverse">
                        <div class="wrapper-text" >
                            <h1>We deliver...<span>typewriter effect here</span></h1>
                            <p>Power your x with on-demand deliveries</p>
                            <a class="btn large" style={{ backgroundColor: "rgb(82, 166, 251)" }}>
                                <span>Get started </span>
                                <img src={RightArrowIcon} width="10" height="10" />
                            </a>
                        </div>
                        <div class="wrapper-illus" >
                            <img alt="Restaurants" src={Restaurants} width='100%' />
                        </div>
                    </div>
                </section>
            </div>
            {/* Section 2 */}
            <div class="flex-row no-gutters">
                <div class="section2 d-flex justify-content-center align-items-center" style={{
                    position: "relative",
                    paddingTop: "125px",
                    paddingBottom: "125px",
                    zIndex: "2"
                }}>
                    <div class="d-flex container text-align-center align-items-center justify-content-center" style={{ marginTop: "-36vh" }}>
                        <div class="cta-blocks text-align-center">
                            <div class="cta-block text-center">
                                <div class="cta-txt">
                                    <h3 style={{ color: "#105285" }}>For couriers</h3>
                                    <p>
                                        <span>Join a vibrant community of independent chickens</span>
                                    </p>
                                </div>
                                <a class="btn" href="#" style={{ backgroundColor: "#105285" }}>Become a chicken</a>
                                {/* Rain drop effect */}
                                <div class="lines">
                                    <div class="line"></div>
                                    <div class="line"></div>
                                    <div class="line"></div>
                                </div>
                            </div>
                            <div class="cta-block text-center">
                                <div class="cta-txt">
                                    <h3 style={{ color: "#105285" }}>For businesses</h3>
                                    <p>
                                        <span>Start delivering happiness to all your clients, on-demand</span>
                                    </p>
                                </div>
                                <a class="btn" href="#" style={{ backgroundColor: "rgb(82, 166, 251)" }}>Contact Hitler</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Top wave page separator */}
            <div class="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#105285" fill-opacity="1" d="M0,160L34.3,154.7C68.6,149,137,139,206,112C274.3,85,343,43,411,64C480,85,549,171,617,181.3C685.7,192,754,128,823,96C891.4,64,960,64,1029,69.3C1097.1,75,1166,85,1234,90.7C1302.9,96,1371,96,1406,96L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>
            {/* Section 3 */}
            <div class="flex-row no-gutters">
                <div class="section3 d-flex justify-content-center align-items-center px-5">
                    <div class="row p-5">
                        <div class="col-sm-3">
                            <div className={`card text-center m-1 py-5 ${[navRef.current]}`} style={{ backgroundColor: "rgb(156, 194, 154)", borderRadius: "20px", border: "none", boxShadow: "0 14px 30px #888888" }}>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="#" class="title">Groceries</a>
                                    </h5>
                                    <img alt="caca" src={M1} width='100%' />
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div className={`card text-center m-1 py-5 ${[navRef.current]}`} style={{ backgroundColor: "rgb(91, 110, 198)", borderRadius: "20px", border: "none", boxShadow: "0 14px 30px #888888" }}>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="#" class="title">Cannabis</a>
                                    </h5>
                                    <img alt="caca" src={M2} width='100%' />
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div className={`card text-center m-1 py-5 ${[navRef.current]}`} style={{ backgroundColor: "rgb(210, 157, 147)", borderRadius: "20px", border: "none", boxShadow: "0 14px 30px #888888" }}>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="#" class="title">Restaurants</a>
                                    </h5>
                                    <img alt="caca" src={M3} width='100%' />
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div className={`card text-center m-1 py-5 ${[navRef.current]}`} style={{ backgroundColor: "rgb(159, 205, 251)", borderRadius: "20px", border: "none", boxShadow: "0 14px 30px #888888" }}>
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <a href="#" class="title">McPoulet</a>
                                    </h5>
                                    <img alt="caca" src={M4} width='100%' />
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Bottom wave page separator */}
            <div class="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#105285" fill-opacity="1" d="M0,32L34.3,74.7C68.6,117,137,203,206,202.7C274.3,203,343,117,411,117.3C480,117,549,203,617,197.3C685.7,192,754,96,823,53.3C891.4,11,960,21,1029,42.7C1097.1,64,1166,96,1234,117.3C1302.9,139,1371,149,1406,154.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
            </div>
            <div class="flex-row no-gutters">
                <div class="section4 d-flex justify-content-center align-items-center">
                    Section 4
                </div>
            </div>
            <div class="flex-row no-gutters">
                <div class="section5 d-flex justify-content-center align-items-center">
                    Section 5
                </div>
            </div>

        </div >
    )
}

export default Home;
