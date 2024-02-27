import React from 'react';
import CategoryStyle from './category.module.css';
function Category() {
    return (
        <div>
            <h2 className={CategoryStyle.sidebarTitle}>Category</h2>

            <div>
                <label className={CategoryStyle.sidebarLabelContainer}>
                    <input type="radio" name="test"/>
                    <span className={CategoryStyle.checkmark}></span> All
                </label>

                <label className={CategoryStyle.sidebarLabelContainer}>
                    <input type="radio" name="test"/>
                    <span className={CategoryStyle.checkmark}></span> Sneakers
                </label>

                <label className={CategoryStyle.sidebarLabelContainer}>
                    <input type="radio" name="test"/>
                    <span className={CategoryStyle.checkmark}></span> Flats
                </label>

                <label className={CategoryStyle.sidebarLabelContainer}>
                    <input type="radio" name="test"/>
                    <span className={CategoryStyle.checkmark}></span> Sandals
                </label>

                <label className={CategoryStyle.sidebarLabelContainer}>
                    <input type="radio" name="test"/>
                    <span className={CategoryStyle.checkmark}></span> Heels
                </label>
            </div>
        </div>
    );
}

export default Category;