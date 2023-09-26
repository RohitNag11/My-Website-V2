import { useState, useEffect, useRef } from 'react';
import styles from './FilterSection.module.scss';

function FilterSection({ name, activeFiltersLen, children }) {
    const [expanded, setExpanded] = useState(false);
    const sectionRef = useRef(null);

    // Close the filter section if the user clicks outside of it (when filter pane is row-based)
    useEffect(() => {
        function handleClickOutside(event) {
            if (sectionRef.current && !sectionRef.current.contains(event.target)) {
                setExpanded(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={sectionRef} className={[styles.filterSection, !expanded && styles.collapsed].join(' ')}>
            <div
                className={styles.filterSectionHeader}
                onClick={() => setExpanded(prev => !prev)}>
                <div className={styles.filterSectionTitle}>
                    {name}&nbsp;
                    {activeFiltersLen !== 0 && <span className={styles.filterSectionActiveFilters}>
                        [{activeFiltersLen}]
                    </span>}
                    &nbsp;
                </div>
                <div className={styles.filterSectionExpander}>
                    {expanded ? '-' : '+'}
                </div>
            </div>
            <div className={styles.tags}>
                {children}
            </div>
        </div>
    );
}

export default FilterSection;