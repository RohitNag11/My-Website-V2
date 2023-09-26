import styles from './FilterPane.module.scss'
import { useState, useEffect, useRef } from 'react';
import { TagFilterToggle, ClearFilterButton } from '../../buttons';
import { SearchBar } from '../../inputs';
import FilterSection from './FilterSection';

function FilterPane({
    name,
    initData,
    filterBy,
    searchBy,
    clearFilterByProperty,
    clearSearch,
    clearAll,
    activeFilters,
    allPropertiesAndValues,
    filterablePropertiesAndValues,
    filterableProperties,
    searchParams,
}) {

    const [loaded, setLoaded] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        if (initData.length) {
            setLoaded(true);
        }
    }, [initData]);

    const customClearAll = () => {
        clearAll();
        setSearchInput('');
    };

    return (
        <div className={styles.filterPane}>
            <div className={styles.header}>
                <h3>Filter {name}</h3>
                <ClearFilterButton count={Object.values(activeFilters).reduce((acc, currArray) => acc + currArray.length, 0) + (searchInput ? 1 : 0)} clearFilterFunction={customClearAll} />
            </div>
            <div className={styles.searchSection}>
                <SearchBar
                    clearSearch={clearSearch}
                    searchBy={searchBy}
                    searchParams={searchParams}
                    searchQuery={searchInput}
                    setSearchQuery={setSearchInput}
                />
            </div>
            <div className={styles.filterSections}>
                {filterableProperties.map((property) => (
                    <FilterSection
                        name={property}
                        key={property}
                        activeFiltersLen={activeFilters[property] ? activeFilters[property].length : 0}
                    >
                        {loaded && allPropertiesAndValues[property].map((value) => (
                            <TagFilterToggle
                                key={value}
                                onClick={() => filterBy(property, value)}
                                selectable={filterablePropertiesAndValues[property] ? filterablePropertiesAndValues[property].includes(value) : false}
                                active={activeFilters[property] && activeFilters[property].includes(value)}
                            >
                                {value}
                            </TagFilterToggle>
                        ))}
                        <ClearFilterButton
                            count={activeFilters[property] ? activeFilters[property].length : 0}
                            clearFilterFunction={() => clearFilterByProperty(property)}
                        />
                    </FilterSection>
                ))}
            </div>
        </div>
    );
}

export default FilterPane;