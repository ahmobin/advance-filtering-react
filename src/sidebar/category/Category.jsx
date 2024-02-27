// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../sidebar.css';
import Input from "../../components/Input.jsx";
function Category() {
    return (
        <div>
            <h2 className="sidebarTitle">Category</h2>

            <div>
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
            </div>
        </div>
    );
}

export default Category;