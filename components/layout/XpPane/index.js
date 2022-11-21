import { useState, useEffect } from "react";
import styles from './XpPane.module.scss'
import { IconButton } from "../../buttons";
import { DateDiv } from "../../badges";
import { Tag } from "../../badges";

function XpPane({ xpData }) {
    const data = xpData.sort((a, b) => b.roles[0].start - a.roles[0].start)
    const [selectedId, setSelectedId] = useState(data[0].id)

    const [selectedXp, setSelectedXp] = useState(data[0])

    useEffect(() => {
        setSelectedXp(data.filter(project => project.id == selectedId)[0])
    }, [selectedId, data])



    return (
        <div className={styles.xpPane}>
            <div className={styles.logosContainer}>
                {data.map((xp) => {
                    return (
                        <IconButton
                            key={xp.id}
                            id={xp.id}
                            iconPath={xp.logo}
                            active={selectedId == xp.id}
                            handleSelected={setSelectedId} />
                    )
                })}
            </div>
            <div className={styles.xpDescription}>
                <div className={styles.company}>{`@${selectedXp.company}`}</div>
                {selectedXp.roles.map((role, i) => {
                    return (
                        <div key={i} className={styles.role}>
                            <DateDiv start={role.start} end={role.end} duration longDate></DateDiv>
                            <div className={styles.position}>{role.position}</div>
                            <div className={styles.description}>
                                <div className={styles.text}>{role.description}</div>
                                <div className={styles.tags}>
                                    {role.skills.map((skill) => {
                                        return (
                                            <Tag key={skill}>{skill}</Tag>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default XpPane;