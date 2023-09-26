import { useEffect } from 'react';
import { useState } from 'react';
import styles from './TagFilterToggle.module.scss'

function TagFilterToggle({ children, onClick, active, selectable = true }) {

    const handleClick = () => {
        if (selectable) {
            onClick()
        }
    }

    return (
        <div className={[styles.toggleTag, active ? styles.active : '', !selectable ? styles.disabled : ''].join(' ')} onClick={handleClick}>
            {children}
        </div>
    );
}

export default TagFilterToggle;