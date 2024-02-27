import React from 'react';
import '../sidebar/sidebar.css'
function Input({handleRadioChange, value, title, name, color}) {
    return (
        <label className="sidebarLabelContainer">
            <input onChange={handleRadioChange} type="radio" value={value} name={name} />
            <span className="checkmark" style={{backgroundColor: color}}></span>All
        </label>
    );
}

export default Input;