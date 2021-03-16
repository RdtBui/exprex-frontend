import Restaurants from '../assets/visuel-header-restaurants.png'
import RightArrowIcon from '../assets/icon-arrow-right.svg'

const Home = () => {
    return (
        <div class="col no-gutters position-relative" style={{ padding: '0' }}>
            <div class="flex-row flex-col no-gutters">
                <section class="d-flex align-items-center overflow-hidden" style={{ padding: "50px 0", zIndex: "1", minHeight: "calc(100vh - 40px)" }}>
                    <span class="bg section1"></span>
                    <div class="container large d-flex justify-content-between align-items-center flex-row-reverse">
                        {/* Section 1 */}
                        <div class="wrapper-text" >
                            <h1>We deliver...<span>typewriter effect here</span></h1>
                            <p>Power your x with on-demand deliveries</p>
                            <a class="btn">
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
            <div class="row no-gutters">
                <div class="section2 d-flex justify-content-center align-items-center">
                    Section 2
                    {/* <img alt="Restaurants" src={Restaurants} /> */}
                </div>
            </div>
            <div class="row no-gutters">
                <div class="section3 d-flex justify-content-center align-items-center">
                    Section 3
                </div>
            </div>
            <div class="row no-gutters">
                <div class="section4 d-flex justify-content-center align-items-center">
                    Section 4
                </div>
            </div>
            <div class="row no-gutters">
                <div class="section5 d-flex justify-content-center align-items-center">
                    Section 5
                </div>
            </div>

        </div >
    )
}

export default Home;
