import styles from './SkillCard.module.scss';

export default function SkillCard({ skillData, ...props }) {
    return (
        <div className={styles.skill} data-aos="fade-up" {...props}>
            <div className={styles.skillName}>
                {skillData.name}
            </div>
            <div className={styles.skillChildren}>
                {skillData.children.map((child, j) => (
                    <a className={styles.skillChild} key={j} target='_blank' rel='noreferrer' href={child.link}>
                        {child.name}
                    </a>
                ))}
            </div>
        </div>
    );
}