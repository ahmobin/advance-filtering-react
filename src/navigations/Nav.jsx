// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavStyle from './Nav.module.css';
import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
function Nav() {
    return (
        <nav>
            <div className={NavStyle.navContainer}>
                <input type="text"
                       className={NavStyle.searchInput}
                       placeholder="Enter your search"
                />
            </div>

            <div className={NavStyle.profileContainer}>
                <a href="#">
                    <FiHeart className={NavStyle.navIcons}/>
                </a>
                <a href="#">
                    <AiOutlineShoppingCart className={NavStyle.navIcons}/>
                </a>
                <a href="#">
                    <AiOutlineUserAdd className={NavStyle.navIcons}/>
                </a>
            </div>
        </nav>
    );
}

export default Nav;