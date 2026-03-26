import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        // Footer Container with dark background
        // Footer ka background dark blue (primary color) hoga.
        <footer className="bg-primary text-white pt-10 pb-6">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Column 1: Company Info */}
                <div>
                    <h3 className="text-lg font-serif font-bold mb-4 text-secondary">Gangaram Gems</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        100% Natural and Lab Certified Gemstones. We provide the best quality stones for your astrological needs.
                    </p>
                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} Gangaram Gems. All rights reserved.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                        <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                    </ul>
                </div>

                {/* Column 3: Support */}
                <div>
                    <h4 className="font-bold mb-4 text-secondary">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><Link to="/shipping-policy" className="hover:text-white">Shipping Policy</Link></li>
                        <li><Link to="/returns" className="hover:text-white">Returns & Exchange</Link></li>
                        <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div>
                    <h4 className="font-bold mb-4 text-secondary">Contact Us</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>Phone: +91 98765 43210</li>
                        <li>Email: support@gangaramgems.com</li>
                        <li>Address: 123, Gem Street, Jaipur, Rajasthan, India</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
