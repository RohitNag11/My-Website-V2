import { useState, useEffect, useRef } from 'react';

const computePropertiesAndValues = (data) => {
    const propertiesAndValues = {};

    data.forEach(item => {
        for (const prop in item) {
            if (!propertiesAndValues[prop]) propertiesAndValues[prop] = new Set();
            if (Array.isArray(item[prop])) {
                item[prop].forEach(val => propertiesAndValues[prop].add(val));
            } else {
                propertiesAndValues[prop].add(item[prop]);
            }
        }
    });

    for (const prop in propertiesAndValues) {
        propertiesAndValues[prop] = [...propertiesAndValues[prop]];
    }

    return propertiesAndValues;
};

const computeFilterablePropertiesAndValues = (data, activeFilters) => {
    const filterablePropertiesAndValues = {};

    for (const prop in activeFilters) {
        filterablePropertiesAndValues[prop] = new Set(activeFilters[prop]);
    }

    data.forEach(item => {
        for (const prop in item) {
            if (!filterablePropertiesAndValues[prop]) filterablePropertiesAndValues[prop] = new Set();

            let includeValue = true;

            for (const filterProp in activeFilters) {
                if (filterProp === prop) continue;

                if (Array.isArray(item[filterProp])) {
                    if (!activeFilters[filterProp].some(val => item[filterProp].includes(val))) {
                        includeValue = false;
                        break;
                    }
                } else {
                    if (!activeFilters[filterProp].includes(item[filterProp])) {
                        includeValue = false;
                        break;
                    }
                }
            }

            if (includeValue) {
                if (Array.isArray(item[prop])) {
                    item[prop].forEach(val => filterablePropertiesAndValues[prop].add(val));
                } else {
                    filterablePropertiesAndValues[prop].add(item[prop]);
                }
            }
        }
    });

    // Convert sets to arrays
    for (const prop in filterablePropertiesAndValues) {
        filterablePropertiesAndValues[prop] = [...filterablePropertiesAndValues[prop]];
    }

    return filterablePropertiesAndValues;
};


export function useFilterAndSearch(initialData) {
    const [initData, setInitData] = useState(initialData);
    const [filteredData, setFilteredData] = useState(initialData);
    const [activeFilters, setActiveFilters] = useState({});
    const [searchProps, setSearchProps] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [allPropertiesAndValues, setAllPropertiesAndValues] = useState({});
    const [filterablePropertiesAndValues, setFilterablePropertiesAndValues] = useState({});
    const [lastSelectedProperty, setLastSelectedProperty] = useState("");
    const [curSelectedProperty, setCurSelectedProperty] = useState("");

    useEffect(() => {
        const propertiesAndValues = computePropertiesAndValues(initData);
        setAllPropertiesAndValues(propertiesAndValues);
    }, [initData]);

    useEffect(() => {
        if (lastSelectedProperty !== curSelectedProperty || Object.keys(activeFilters).length === 0) {
            const propertiesAndValues = computeFilterablePropertiesAndValues(initData, activeFilters);
            setFilterablePropertiesAndValues(propertiesAndValues);
            setLastSelectedProperty(curSelectedProperty)
        }
    }, [activeFilters, initData, lastSelectedProperty, curSelectedProperty]);

    useEffect(() => {
        let tempData = [...initData];

        tempData = tempData.filter(item => {
            for (const prop in activeFilters) {
                if (Array.isArray(item[prop])) {
                    if (!activeFilters[prop].some(val => item[prop].includes(val))) return false;
                } else {
                    if (!activeFilters[prop].some(val => val === item[prop])) return false;
                }
            }

            if (searchQuery && searchProps.length) {
                if (!searchProps.some(prop =>
                    item[prop] && item[prop].toString().toLowerCase().includes(searchQuery.toLowerCase()))) {
                    return false;
                }
            }

            return true;
        });

        setFilteredData(tempData);
    }, [activeFilters, searchQuery, searchProps, initData]);

    const filterBy = (property, value) => {
        setCurSelectedProperty(property);
        setActiveFilters(prev => {
            const newFilters = JSON.parse(JSON.stringify(prev));

            if (!newFilters[property]) {
                newFilters[property] = [value];
            } else if (newFilters[property].includes(value)) {
                const index = newFilters[property].indexOf(value);
                if (index > -1) {
                    newFilters[property].splice(index, 1);
                }
                if (newFilters[property].length === 0) {
                    delete newFilters[property];
                }
            } else {
                newFilters[property].push(value);
            }
            return newFilters;
        });
    };

    const searchBy = (properties, query) => {
        setSearchProps(properties);
        setSearchQuery(query);
    };

    const clearFilterByProperty = (property) => {
        setCurSelectedProperty("");
        setActiveFilters(prev => {
            const newFilters = { ...prev };
            delete newFilters[property];
            return newFilters;
        });
    };

    const clearSearch = () => {
        setSearchProps([]);
        setSearchQuery("");
    };

    const clearAll = () => {
        setActiveFilters({});
        clearSearch();
    };

    return {
        initData,
        filteredData,
        activeFilters,
        allPropertiesAndValues,
        filterablePropertiesAndValues,
        filterBy,
        searchBy,
        clearFilterByProperty,
        clearSearch,
        clearAll,
    };
};
