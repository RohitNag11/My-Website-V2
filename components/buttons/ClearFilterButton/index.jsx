import { useState } from 'react';
import styles from './ClearFilterButton.module.scss'

function ClearFilterButton({ count, clearFilterFunction }) {

    return (
        <div
            className={[styles.button, count ? styles.active : ''].join(' ')}
            onClick={count ? clearFilterFunction : null}>
            {count} {count === 1 ? 'filter' : 'filters'} {count ? '✕ ' : ''}
        </div>
    );
}

export default ClearFilterButton;