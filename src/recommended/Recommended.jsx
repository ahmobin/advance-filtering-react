// eslint-disable-next-line no-unused-vars
import React from 'react';
import RecomStyle from './Recommended.module.css';
function Recommended() {
    return (
        <>
            <h2 className={RecomStyle.recommendedTitle}>Recommended</h2>
            <div className={RecomStyle.recommendedFlex}>
                <button className={RecomStyle.recommendedBtn}>All Products</button>
                <button className={RecomStyle.recommendedBtn}>Nike</button>
                <button className={RecomStyle.recommendedBtn}>Adidas</button>
                <button className={RecomStyle.recommendedBtn}>Puma</button>
                <button className={RecomStyle.recommendedBtn}>Vans</button>
            </div>
        </>
    );
}

export default Recommended;