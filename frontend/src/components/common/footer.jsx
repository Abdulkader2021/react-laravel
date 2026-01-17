import React from 'react';

const footer = () => {
    return (
        
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h3>React Laravel</h3>
                        <p>Building enduring structures with precision and excellence.</p>
                    </div>

                    <div className="col-md-3">
                        <h3>Quick Links</h3>
                        <ul className='list-unstyled'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About Us</a></li>
                    </ul>
                    </div>

                    <div className="col-md-3">
                        <h3>Services</h3>
                        <ul className='list-unstyled'>
                            <li><a href='#'>Construction</a></li>
                            <li><a href='#'>Renovation</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <p>Email: info@reactlaravel.com</p>
                    </div>
                </div>
                <hr />
                <div className='text-center pt-4'>&copy; 2024 React Laravel. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default footer;