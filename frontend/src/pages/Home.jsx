import React from 'react';
import Layout from '../components/layout/Layout';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                    Discover the Power of <span className="text-secondary">Gemstones</span>
                </h1>
                <p className="text-lg mb-8 text-gray-300">
                    100% Natural, Lab Certified, and Energized for your success.
                </p>
                <button className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-white transition">
                    Shop Now
                </button>
            </section>

            {/* Featured Categories (Placeholder) */}
            <section className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-center mb-10 text-primary">
                    Explore Our Collection
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Category Cards */}
                    {['Blue Sapphire', 'Yellow Sapphire', 'Emerald', 'Ruby'].map((gem) => (
                        <div key={gem} className="border rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                            <div className="h-40 bg-gray-200 mb-4 rounded flex items-center justify-center">
                                <span className="text-gray-400">Image</span>
                            </div>
                            <h3 className="font-bold text-lg">{gem}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default Home;
