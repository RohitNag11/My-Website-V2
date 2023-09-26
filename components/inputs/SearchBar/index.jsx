import styles from './SearchBar.module.scss'
import { useState, useRef, useEffect } from 'react';

function SearchBar({ clearSearch, searchBy, searchParams, searchQuery, setSearchQuery }) {

    // Combined both useEffects
    useEffect(() => {
        if (searchQuery !== '') {
            searchBy(searchParams, searchQuery);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    return (
        <div className={[styles.searchBar, searchQuery ? styles.active : ''].join(' ')}>
            <div className={styles.icon}>🔍</div>
            <input
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder='Search...'
            />
            <button onClick={() => { clearSearch(); setSearchQuery(''); }}>✕</button>
        </div>
    );
}

export default SearchBar;