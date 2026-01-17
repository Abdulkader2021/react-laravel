import React from 'react';

import AboutImage from '../../assets/images/about-us.jpg';
import BuildingImg from '../../assets/images/construction1.jpg';
import ResidentialImg from '../../assets/images/construction2.jpg';
import CorporateImg from '../../assets/images/construction3.jpg';

import Project1 from '../../assets/images/icon-1.svg';
import Project2 from '../../assets/images/icon-2.svg';
import Project3 from '../../assets/images/icon-3.svg';

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

           <section className="section-3">
            <div className="container">
                <div className="section-header">
                    <span>Our Services</span>
                    <h2>Our construction services</h2>
                    <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                </div>

                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card service-card" style={{ backgroundImage: `url(${BuildingImg})` }}>
                            <div className="card-body">
                                <h4>Building Construction</h4>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Active/Hover state style */}
                    <div className="col-md-4">
                        <div className="card service-card active" style={{ backgroundImage: `url(${ResidentialImg})` }}>
                            <div className="card-body">
                                <h4>Residential Construction</h4>
                                <p>Residential construction is a fundamental sector within the construction industry, dedicated to creating living spaces that meet the diverse needs of individuals and families.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card service-card" style={{ backgroundImage: `url(${CorporateImg})` }}>
                            <div className="card-body">
                                <h4>Corporate Construction</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Our Projects Section */}
        {/* Our Services Section */}
<section className="section-4 bg-light py-5">
    <div className="container py-5">
        <div className='section-header text-center mb-5'>
            <span>Our Services</span>
            <h2>Excellence in every build</h2>
            <p>We offer a wide range of construction services tailored to meet your specific needs.</p>
        </div>

        <div className="row">
            {/* Service 1 */}
            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm p-4 text-center h-100">
                    <div className="service-icon mb-3">
                        <i className="bi bi-house-door fs-1 text-primary"></i>
                    </div>
                    <h4>Residential Construction</h4>
                    <p>Building beautiful, sustainable homes designed for modern living and comfort.</p>
                </div>
            </div>

            {/* Service 2 */}
            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm p-4 text-center h-100">
                    <div className="service-icon mb-3">
                        <i className="bi bi-building fs-1 text-primary"></i>
                    </div>
                    <h4>Commercial Projects</h4>
                    <p>Professional workspaces and retail environments built with efficiency and style.</p>
                </div>
            </div>

            {/* Service 3 */}
            <div className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm p-4 text-center h-100">
                    <div className="service-icon mb-3">
                        <i className="bi bi-tools fs-1 text-primary"></i>
                    </div>
                    <h4>Renovations</h4>
                    <p>Revitalizing existing structures with expert craftsmanship and modern updates.</p>
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