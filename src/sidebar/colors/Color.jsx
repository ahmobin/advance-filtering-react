// eslint-disable-next-line no-unused-vars
import React from 'react';
import ColorStyle from './Color.module.css';
import Input from "../../components/Input.jsx";

function Color() {
    return (
        <div>
            <h2 className="sidebarTitle">Colors</h2>
            <label className={["sidebarLabelContainer", ColorStyle.colorTitle].join(' ')}>
                <input type="radio" value="" name="test1"/>
                <span className="checkmark"></span>All
            </label>

            <label className={["sidebarLabelContainer", ColorStyle.colorTitle].join(' ')}>
                <input type="radio" value="" name="test1"/>
                <span className="checkmark"></span>Black
            </label>

            <label className={["sidebarLabelContainer", ColorStyle.colorTitle].join(' ')}>
                <input type="radio" value="" name="test1"/>
                <span className="checkmark"></span>Blue
            </label>

            <label className={["sidebarLabelContainer", ColorStyle.colorTitle].join(' ')}>
                <input type="radio" value="" name="test1"/>
                <span className="checkmark"></span>Red
            </label>

            <label className={["sidebarLabelContainer", ColorStyle.colorTitle].join(' ')}>
                <input type="radio" value="" name="test1"/>
                <span className="checkmark"></span>Green
            </label>

            <label className={["sidebarLabelContainer", ColorStyle.colorTitle].join(' ')}>
                <input type="radio" value="" name="test1"/>
                <span className="checkmark"></span>White
            </label>
        </div>
    );
}

export default Color;