import React from 'react';

import AboutImage from '../../assets/images/about-us.jpg';
import BuildingImg from '../../assets/images/construction1.jpg';
import ResidentialImg from '../../assets/images/construction2.jpg';
import CorporateImg from '../../assets/images/construction3.jpg';

import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

import Header from '../common/Header';
import Footer from '../common/footer';


const Home = () => {
    return (
        <>
        <Header/>

        <main>
            {/* Hero Section */}
            <section className="section-1">
                <div className="hero d-flex align-items-center">
                    <div className="container-fluid">
                        <div className='text-center'>
                            <span>Welcome Amazing Constructions</span>
                            <h1>Crafting dreams with <br/> precision and excellence. </h1>
                            <p>
                                We excel at transforming visions into reality through outstanding craftsmanship and precise <br/>
                                attention to detail. With years of experience and a dedication to quality.
                            </p>
                            <div className='mt-4'>
                            <a href='#' className='btn btn-primary'>Contact Now</a>
                            <a href='#' className='btn btn-secondary ms-2'>View Projects</a>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}

            <section className="section-2 py-5">
                <div className="container py-5">
                    <div className="row ">

                        <div className="col-md-6">
                            <img src={AboutImage} alt="About Us" className="img-fluid w-100" />
                        </div>

                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <span>About Us</span>
                            <h2>Crafting structures that last a lifetime</h2>
                            <p>
                                Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing modern technology.
                            </p>

                            <p>
                                Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.
                            </p>
                            <a href='#' className='btn btn-primary mt-3 align-self-start'>Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Section */}
           <section className="section-3 bg-light py-5">
            <div className="container-flud py-5">
                <div className="section-header text-center">
                    <span>Our Services</span>
                    <h2>Our construction services</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>

                <div className="row pt-4">

                    {/* Card 1 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                            <div className="service-image">
                                <img src={BuildingImg} alt="" className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Residential Construction</h3>                                    
                                </div>
                                <div className="service-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos vero, eveniet rem dolores ducimus quas deleniti reiciendis dolorum quisquam dolore rerum sunt repellendus iure ipsam aperiam provident omnis recusandae?</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                            <div className="service-image">
                                <img src={BuildingImg} alt="" className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Residential Construction</h3>                                    
                                </div>
                                <div className="service-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos vero, eveniet rem dolores ducimus quas deleniti reiciendis dolorum quisquam dolore rerum sunt repellendus iure ipsam aperiam provident omnis recusandae?</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                            <div className="service-image">
                                <img src={BuildingImg} alt="" className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Residential Construction</h3>                                    
                                </div>
                                <div className="service-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos vero, eveniet rem dolores ducimus quas deleniti reiciendis dolorum quisquam dolore rerum sunt repellendus iure ipsam aperiam provident omnis recusandae?</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                            <div className="service-image">
                                <img src={BuildingImg} alt="" className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Residential Construction</h3>                                    
                                </div>
                                <div className="service-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos vero, eveniet rem dolores ducimus quas deleniti reiciendis dolorum quisquam dolore rerum sunt repellendus iure ipsam aperiam provident omnis recusandae?</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>



 {/* Why choose us */}
        <section className='section-4 py-5'>
            <div className="container py-5">
                <div className="section-header text-center">
                    <span>Why Choose Us</span>
                    <h2>Discover our wide variety of projects</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>

                <div className="row pt-4">
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon1} alt="" />
                            </div>
                            <div className="card-title mt-3">
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laborum delectus omnis iste accusantium aliquam, vel sequi, eos amet ullam atque enim, quos deserunt aspernatur quidem quae sapiente! Nesciunt, consectetur?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon2} alt="" />
                            </div>
                            <div className="card-title mt-3">
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laborum delectus omnis iste accusantium aliquam, vel sequi, eos amet ullam atque enim, quos deserunt aspernatur quidem quae sapiente! Nesciunt, consectetur?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0 p-4">
                            <div className="card-icon">
                                <img src={Icon3} alt="" />
                            </div>
                            <div className="card-title mt-3">
                                <h3>Cutting-Edge Solutions</h3>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laborum delectus omnis iste accusantium aliquam, vel sequi, eos amet ullam atque enim, quos deserunt aspernatur quidem quae sapiente! Nesciunt, consectetur?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        {/* Our Projects */}
        <section className="section-3 bg-light py-5">
            <div className="container-flud py-5">
                <div className="section-header text-center">
                    <span>Our Projects</span>
                    <h2>Discover our diverse range of projects</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>

                <div className="row pt-4">

                    {/* Card 1 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                            <div className="service-image">
                                <img src={ResidentialImg} alt="" className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Dhaka Projects</h3>                                    
                                </div>
                                <div className="service-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos vero, eveniet rem dolores ducimus quas deleniti reiciendis dolorum quisquam dolore rerum sunt repellendus iure ipsam aperiam provident omnis recusandae?</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                            <div className="service-image">
                                <img src={ResidentialImg} alt="" className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Dhaka Projects</h3>                                    
                                </div>
                                <div className="service-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos vero, eveniet rem dolores ducimus quas deleniti reiciendis dolorum quisquam dolore rerum sunt repellendus iure ipsam aperiam provident omnis recusandae?</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                            <div className="service-image">
                                <img src={ResidentialImg} alt="" className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Dhaka Projects</h3>                                    
                                </div>
                                <div className="service-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos vero, eveniet rem dolores ducimus quas deleniti reiciendis dolorum quisquam dolore rerum sunt repellendus iure ipsam aperiam provident omnis recusandae?</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-3 col-lg-3">
                        <div className="item">
                            <div className="service-image">
                                <img src={ResidentialImg} alt="" className='w-100' />
                            </div>
                            <div className="service-body">
                                <div className="service-title">
                                    <h3>Dhaka Projects</h3>                                    
                                </div>
                                <div className="service-content">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quos vero, eveniet rem dolores ducimus quas deleniti reiciendis dolorum quisquam dolore rerum sunt repellendus iure ipsam aperiam provident omnis recusandae?</p>
                                </div>
                                <a href="#" className='btn btn-primary'>Read More</a>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </section>


       




        </main>

        <Footer />
        </>
    );
};

export default Home;