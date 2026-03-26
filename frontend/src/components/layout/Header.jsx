import React, { useState } from 'react';
// Link component for navigation without page reload
// Page reload ke bina navigate karne ke liye Link use hota hai.
import { Link } from 'react-router-dom';

// Icons from heroicons (hum baad mein install karenge ya SVG use karenge)
// Abhi ke liye simple text use kar rahe hain.

const Header = () => {
    // State for mobile menu toggle
    // Mobile menu khula hai ya band, ye track karne ke liye state.
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        // Main Header Container
        // Sticky header jo scroll karne par upar chipka rahega.
        <header className="sticky top-0 z-50 bg-white shadow-md">

            {/* Top Bar for Phone Number */}
            {/* Sabse upar wali patti jisme phone number hoga. */}
            <div className="bg-primary text-white py-1 px-4 text-sm text-center md:text-right">
                <span>Call Us: +91 98765 43210</span>
            </div>

            {/* Main Navigation Bar */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo Section */}
                {/* Logo par click karne se Home page par jayenge. */}
                <Link to="/" className="text-2xl font-serif font-bold text-primary">
                    Gangaram Gems
                </Link>

                {/* Desktop Navigation Links */}
                {/* Ye links sirf desktop (badi screen) par dikhenge. */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/gemstones" className="hover:text-secondary transition">Gemstones</Link>
                    <Link to="/pearls" className="hover:text-secondary transition">Pearls</Link>
                    <Link to="/rudraksha" className="hover:text-secondary transition">Rudraksha</Link>
                    <Link to="/healing-stones" className="hover:text-secondary transition">Healing</Link>
                    <Link to="/jewellery" className="hover:text-secondary transition">Jewellery</Link>
                </nav>

                {/* Icons Section (Search, Cart, Account) */}
                <div className="flex items-center space-x-4">
                    {/* Search Bar (Placeholder) */}
                    <div className="hidden md:block relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded-full px-3 py-1 text-sm focus:outline-none focus:border-primary"
                        />
                    </div>

                    {/* Cart Icon */}
                    <Link to="/cart" className="relative hover:text-secondary">
                        <span>Cart</span>
                        {/* Badge for item count */}
                        <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                            0
                        </span>
                    </Link>

                    {/* Mobile Menu Button */}
                    {/* Chhoti screen par menu kholne ka button. */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        Menu
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {/* Agar isMobileMenuOpen true hai, to ye dikhega. */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-3">
                    <Link to="/gemstones" className="block hover:text-secondary">Gemstones</Link>
                    <Link to="/pearls" className="block hover:text-secondary">Pearls</Link>
                    <Link to="/rudraksha" className="block hover:text-secondary">Rudraksha</Link>
                    <Link to="/healing-stones" className="block hover:text-secondary">Healing</Link>
                    <Link to="/jewellery" className="block hover:text-secondary">Jewellery</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
