// eslint-disable-next-line no-unused-vars
import React from 'react';
import ColorStyle from './Color.module.css';
import Input from "../../components/Input.jsx";

function Color() {
    return (
        <div>
            <h2 className="sidebarTitle">Colors</h2>

            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </div>
    );
}

export default Color;