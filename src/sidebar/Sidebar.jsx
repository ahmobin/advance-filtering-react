// eslint-disable-next-line no-unused-vars
import React from 'react';
import './sidebar.css';
import {GiShoppingCart} from "react-icons/gi";
import Category from "./category/Category.jsx";
import Color from "./colors/Color.jsx";
import Price from "./price/Price.jsx";

function Sidebar() {
    return (
        <>
            <section className="sidebar">
                <div className="logoContainer">
                    <h1><GiShoppingCart/></h1>
                </div>

                <Category />
                <Price />
                <Color />

            </section>
        </>
    );
}

export default Sidebar;