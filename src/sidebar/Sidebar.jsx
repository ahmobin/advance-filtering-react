// eslint-disable-next-line no-unused-vars
import React from 'react';
import SidebarStyle from './sidebar.module.css';
import {GiShoppingCart} from "react-icons/gi";
import Category from "./category/Category.jsx";
import Color from "./colors/Color.jsx";

function Price() {
    return null;
}

function Sidebar() {
    return (
        <>
            <section className={SidebarStyle.sidebar}>
                <div className={SidebarStyle.logoContainer}>
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