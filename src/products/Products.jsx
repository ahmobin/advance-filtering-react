// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductStyle from './Products.module.css';
import ProductCard from "../components/ProductCard.jsx";
function Products() {
    return (
        <>
            <section className={ProductStyle.cardContainer}>
                <ProductCard />
            </section>
        </>
    );
}

export default Products;