import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} className="pt-20 px-28 mt-10">
            <div className="footer">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Weekly Checkup</Link>
                    <Link className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='footer-center my-10'>
                <p className='text-sm font-medium'>Copyright © {new Date().getFullYear()}- All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;