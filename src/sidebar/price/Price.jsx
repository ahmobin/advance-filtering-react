// eslint-disable-next-line no-unused-vars
import React from 'react';
import PriceStyle from './Price.module.css';
import '../sidebar.css';
function Price() {
    return (
        <div className={PriceStyle.ml}>
            <h2 className={["sidebarTitle", PriceStyle.priceTitle].join(' ')}>Price</h2>

            <label className="sidebarLabelContainer">
                <input type="radio" name="test2"/>
                <span className="checkmark"></span> All
            </label>

            <label className="sidebarLabelContainer">
                <input type="radio" name="test2"/>
                <span className="checkmark"></span>$0 - $50
            </label>

            <label className="sidebarLabelContainer">
                <input type="radio" name="test2"/>
                <span className="checkmark"></span>$50 - $100
            </label>

            <label className="sidebarLabelContainer">
                <input type="radio" name="test2"/>
                <span className="checkmark"></span>$100 - $150
            </label>

            <label className="sidebarLabelContainer">
                <input type="radio" name="test2"/>
                <span className="checkmark"></span>Over $150
            </label>
        </div>
    );
}

export default Price;