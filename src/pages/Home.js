import Restaurants from '../assets/visuel-header-restaurants.png'

const Home = () => {
    return (
        <div class="col no-gutters position-relative">
            <div class="row no-gutters">
                <div class="section1 d-flex justify-content-between align-items-center flex-row-reverse">
                    {/* Section 1 */}
                    <div class="wrapper-text" >
                        <h1>We deliver...</h1>
                    </div>
                    <div class="wrapper-illus" >
                        <img alt="Restaurants" src={Restaurants} width='100%' />
                    </div>
                </div>
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
