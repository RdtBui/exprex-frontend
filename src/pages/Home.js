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
                                < div class="divider" ></div>
                            </div>

                            {/* Rain drop effect */}
                            <div class="lines">
                                <div class="line"></div>
                                <div class="line"></div>
                                <div class="line"></div>
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
            <div class="flex-row no-gutters">
                <div class="section3 d-flex justify-content-center align-items-center">
                    Section 3
                </div>
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
