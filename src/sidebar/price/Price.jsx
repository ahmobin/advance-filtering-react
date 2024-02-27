// eslint-disable-next-line no-unused-vars
import React from 'react';
import PriceStyle from './Price.module.css';
import '../sidebar.css';
import Input from "../../components/Input.jsx";
function Price() {
    return (
        <div className={PriceStyle.ml}>
            <h2 className={["sidebarTitle", PriceStyle.priceTitle].join(' ')}>Price</h2>

            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </div>
    );
}

export default Price;