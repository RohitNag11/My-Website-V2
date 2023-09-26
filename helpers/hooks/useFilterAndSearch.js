import { useState, useEffect, useMemo } from 'react';


export function useFilterAndSearch(initialData) {
    const [initData, setInitData] = useState(initialData);
    const [filteredData, setFilteredData] = useState(initialData);
    const [activeFilters, setActiveFilters] = useState({});
    const [searchProps, setSearchProps] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [allPropertiesAndValues, setAllPropertiesAndValues] = useState({});
    const [filterablePropertiesAndValues, setFilterablePropertiesAndValues] = useState({});

    const computePropertiesAndValues = useMemo(
        () => data => {
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

            // Convert Set to Array for easier consumption
            for (const prop in propertiesAndValues) {
                propertiesAndValues[prop] = [...propertiesAndValues[prop]];
            }

            return propertiesAndValues;
        },
        []
    );

    useEffect(() => {
        const propertiesAndValues = computePropertiesAndValues(initData);
        setAllPropertiesAndValues(propertiesAndValues);
    }, [initData, computePropertiesAndValues]);

    useEffect(() => {
        const propertiesAndValues = computePropertiesAndValues(filteredData);
        setFilterablePropertiesAndValues(propertiesAndValues);
    }, [filteredData, computePropertiesAndValues]);

    useEffect(() => {
        let tempData = [...initData];

        tempData = tempData.filter(item => {
            for (const prop in activeFilters) {
                if (Array.isArray(item[prop])) {
                    if (!activeFilters[prop].every(val => item[prop].includes(val))) return false;
                } else {
                    if (!activeFilters[prop].includes(item[prop])) return false;
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
    }, [activeFilters, searchQuery, searchProps]);

    const filterBy = (property, value) => {
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
        filterBy,
        searchBy,
        clearFilterByProperty,
        clearSearch,
        clearAll,
        activeFilters,
        allPropertiesAndValues,
        filterablePropertiesAndValues
    };
};
