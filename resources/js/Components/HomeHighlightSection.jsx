import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

const productsData = [
    {
        id: 'spices',
        title: 'Spices',
        description: 'Indonesia is an archipelagic country rich in natural resources, especially spices which have been known worldwide since centuries ago.',
        imageUrl: '/images/products/spices.jpg'
    },
    {
        id: 'fish',
        title: 'Fish',
        description: 'Indonesia is a maritime country rich in marine resources, offering top quality fishery and marine products to global markets.',
        imageUrl: '/images/products/fish.jpg'
    },
    {
        id: 'furniture',
        title: 'Furniture',
        description: 'Indonesia is one of the world\'s leading producers of high-quality handcrafted furniture made from certified teak wood and rattan.',
        imageUrl: '/images/products/furniture.jpg'
    },
    {
        id: 'coffee',
        title: 'Coffee',
        description: 'Coffee is one of the plantation commodities that makes Indonesia renowned as one of the largest specialty coffee producers globally.',
        imageUrl: '/images/products/coffee.jpg'
    },
    {
        id: 'food-processing',
        title: 'Food Processing',
        description: 'Indonesia has great potential in the food processing industry, delivering high-value packaged food and beverage products worldwide.',
        imageUrl: '/images/products/food-processing.jpg'
    },
    {
        id: 'manufactured',
        title: 'Memproduksi Produk',
        description: 'Indonesia memiliki potensi besar dalam industri manufaktur, menghasilkan produk berkualitas ekspor yang berdaya saing global.',
        imageUrl: '/images/products/manufacturing.jpg'
    }
];

export default function HomeHighlightSection() {
    return (
        <section className="products-grid-section">
            <div className="products-grid-container">
                {/* Header */}
                <div className="products-grid-header">
                    <span className="products-grid-subtitle">A FACT</span>
                    <h2 className="products-grid-title">Indonesian Products with Great Potential</h2>
                </div>

                {/* 6 Cards Grid */}
                <div className="products-grid-layout">
                    {productsData.map((item) => (
                        <div key={item.id} className="product-custom-card">
                            <div className="product-card-top-icon">
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.title} 
                                    className="product-card-top-img" 
                                />
                            </div>
                            <h3 className="product-card-title">{item.title}</h3>
                            <p className="product-card-description">{item.description}</p>
                            <div className="product-card-action">
                                <Link href="/services" className="product-card-pill-btn">
                                    Baca Selengkapnya
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
