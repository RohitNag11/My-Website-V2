import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Art.module.scss';
import { ArtCard } from '../components/cards';
import { artsData } from '../data/artsData';
import { LightboxSwiper } from '../components/swipers';
import { GalleryWLightbox, DatePane } from '../components/layout';
import { useFilterAndSearch } from '../helpers/hooks';
import { FilterPane } from '../components/layout';

function Art() {
    // const [artworks, setArtworks] = useState(artsData)

    // useEffect(() => {
    //     artworks.sort((a, b) => b.date - a.date)
    // }, [artworks]);

    const {
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
    } = useFilterAndSearch(artsData);


    return (
        <>
            <Head>
                <title>Rohit Nag | Art</title>
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
                <meta name="description" content="Gallery of my artwork." />
            </Head>
            <div className={styles.artPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {/* <div className={styles.emoji}>🖌️</div> */}
                        <div className={styles.text}>Art</div>
                    </div>
                    <p>A gallery of my recent artwork.</p>
                </div>
                <div className={styles.filterPaneContainer}>
                    <FilterPane
                        name='art'
                        initData={initData}
                        filterBy={filterBy}
                        searchBy={searchBy}
                        clearFilterByProperty={clearFilterByProperty}
                        clearSearch={clearSearch}
                        clearAll={clearAll}
                        activeFilters={activeFilters}
                        allPropertiesAndValues={allPropertiesAndValues}
                        filterablePropertiesAndValues={filterablePropertiesAndValues}
                        filterableProperties={['mediums']}
                        searchParams={["title", "mediums"]}
                    />
                </div>
                <div className={styles.datePaneContainer}>
                    <DatePane
                        start={filteredData[0] ? filteredData[0].date : ''}
                        end={filteredData[0] ? filteredData[filteredData.length - 1].date : ''}
                        cardCount={filteredData[0] ? filteredData.length : 1}
                        name='artworks'
                        totalCardCount={artsData.length}
                    />
                </div>
                {filteredData.length ? <GalleryWLightbox data={filteredData} />
                    :
                    <div className={styles.noArt}>
                        <div className={styles.emoji}>😔</div>
                        <div className={styles.text}>No artworks found.</div>
                        <div className={styles.description}>Please try a different search query.</div>
                    </div>
                }
            </div>
        </>
    );
}

export default Art;