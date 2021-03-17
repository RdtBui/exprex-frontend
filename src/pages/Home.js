import Restaurants from '../assets/visuel-header-restaurants.png'
import RightArrowIcon from '../assets/icon-arrow-right.svg'

const Home = () => {
    return (
        <div class="col no-gutters position-relative" style={{ padding: '0' }}>
            <div class="flex-row flex-col no-gutters">
                <section class="d-flex align-items-center overflow-hidden" style={{ padding: "50px 0", zIndex: "1", minHeight: "calc(100vh - 40px)" }}>
                    {/* Section 1 */}
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
            <div class="flex-row no-gutters">
                <div class="section2 d-flex justify-content-center align-items-center" style={{
                    position: "relative",
                    paddingTop: "125px",
                    paddingBottom: "125px",
                    zIndex: "2"
                }}>
                    {/* Section 2 */}
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L40,176C80,192,160,224,240,240C320,256,400,256,480,213.3C560,171,640,85,720,80C800,75,880,149,960,149.3C1040,149,1120,75,1200,42.7C1280,11,1360,21,1400,26.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            </div>
            <div class="flex-row no-gutters">
                <div class="section3 d-flex justify-content-center align-items-center">
                    Section 3
                </div>
            </div>
            {/* Bottom wave page separator */}
            <div class="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,32L34.3,74.7C68.6,117,137,203,206,202.7C274.3,203,343,117,411,117.3C480,117,549,203,617,197.3C685.7,192,754,96,823,53.3C891.4,11,960,21,1029,42.7C1097.1,64,1166,96,1234,117.3C1302.9,139,1371,149,1406,154.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
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
