import { useState } from 'react';
import styles from './ClearFilterButton.module.scss'

function ClearFilterButton({ count, clearFilterFunction, text = null }) {

    return (
        <div
            className={[styles.button, count ? styles.active : ''].join(' ')}
            onClick={count ? clearFilterFunction : null}>
            {count} {text ? text : (count === 1 ? 'filter' : 'filters')} {count ? '✕ ' : ''}
        </div>
    );
}

export default ClearFilterButton;