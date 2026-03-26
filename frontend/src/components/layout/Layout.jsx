import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Layout Component
// Ye component har page par dikhega. Isme Header aur Footer common hain.
// "children" wo content hai jo Header aur Footer ke beech mein aayega (jaise Home page ka content).
const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header sabse upar */}
            <Header />

            {/* Main Content Area */}
            {/* flex-grow ensure karta hai ki agar content kam ho to bhi footer niche rahe. */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer sabse niche */}
            <Footer />
        </div>
    );
};

export default Layout;
