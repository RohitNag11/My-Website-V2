import styles from './Tag.module.scss'

function Tag({ children, noShadow = true, emph = false }) {
    return (
        <div className={[styles.tag, noShadow && styles.noShadow, emph && styles.emph].join(' ')} >
            {children}
        </div>
    );
}

export default Tag;