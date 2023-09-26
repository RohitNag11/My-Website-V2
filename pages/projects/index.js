import Head from 'next/head';
import styles from '../../styles/Projects.module.scss'
import { ProjectCard } from '../../components/cards';
import { projectsData } from '../../data/projectsData';
import { FilterPane, DatePane } from '../../components/layout';
import { useFilterAndSearch } from '../../helpers/hooks';

function Projects() {
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
    } = useFilterAndSearch(projectsData);

    return (
        <>
            <Head>
                <title>Rohit Nag | Projects</title>
                <meta name="description" content="A collection of my engineering, hardware, ui/ux, design, and computing projects." />
                <meta name="keywords" content="Engineer, Developer, Designer, Portfolio" />
            </Head>
            <div className={styles.projectPage}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        {/* <div className={styles.emoji}>🚀</div> */}
                        <div className={styles.text}>Projects</div>
                    </div>
                    <p>A collection of my major projects.</p>
                </div>
                <div className={styles.filterPaneContainer}>
                    <FilterPane
                        name='projects'
                        initData={initData}
                        filterBy={filterBy}
                        searchBy={searchBy}
                        clearFilterByProperty={clearFilterByProperty}
                        clearSearch={clearSearch}
                        clearAll={clearAll}
                        activeFilters={activeFilters}
                        allPropertiesAndValues={allPropertiesAndValues}
                        filterablePropertiesAndValues={filterablePropertiesAndValues}
                        filterableProperties={['type', 'tags']}
                        searchParams={["name", "subtitle", "type", "tags"]}
                    />
                </div>
                <div className={styles.datePaneContainer}>
                    <DatePane
                        start={filteredData[0] ? filteredData[0].end : ''}
                        end={filteredData[0] ? filteredData[filteredData.length - 1].start : ''}
                        cardCount={filteredData[0] ? filteredData.length : 1}
                        name='projects'
                        totalCardCount={projectsData.length}
                    />
                </div>
                {filteredData[0] && <div className={styles.grid}>
                    {filteredData.map((projectData) => {
                        return (
                            <div
                                className={styles.cardContainer}
                                key={projectData.id}>
                                <ProjectCard {...projectData} />
                            </div>
                        )
                    })}
                </div>}
                {filteredData.length === 0 && <div className={styles.noProjects}>
                    <div className={styles.emoji}>😔</div>
                    <div className={styles.text}>No projects found.</div>
                    <div className={styles.description}>Please try a different search query.</div>
                </div>}
            </div>
        </>
    );
}

export default Projects;