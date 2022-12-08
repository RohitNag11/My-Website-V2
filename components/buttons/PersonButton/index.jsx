import styles from './PersonButton.module.scss'

function PersonButton({ name, link = null, gender }) {
    return (
        link ?
            <a href={link} target='_blank' rel='noreferrer' className={styles.container}>
                <div className={styles.icon}>
                    <div className={styles.emoji}>{gender == 'male' ? '🧑' : '👩'}</div>
                    <div className={styles.arrow}>↗</div>
                </div>
                <div className={styles.name}>{name}</div>
            </a>
            :
            <div className={[styles.container, styles.nolink].join(' ')}>
                <div className={styles.icon}>
                    <div className={styles.emoji}>{gender == 'male' ? '🧑' : '👩'}</div>
                </div>
                <div className={styles.name}>{name}</div>
            </div>

    );
}

export default PersonButton;