import React from 'react';
import '../sidebar/sidebar.css'
function Input() {
    return (
        <label className="sidebarLabelContainer">
            <input type="radio" name="test"/>
            <span className="checkmark"></span>All
        </label>
    );
}

export default Input;