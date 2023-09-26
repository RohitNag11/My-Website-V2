import styles from './DatePane.module.scss'
import { DateDiv } from '../../badges';

function DatePane({ name, start, end, cardCount, totalCardCount }) {

    const description = (start || end) ? `Showing ${cardCount} of ${totalCardCount} ${name} between,` : `No ${name} found.`

    return (
        <div className={styles.datePane}>
            <div className={styles.description}>{description}</div>
            <div className={styles.dates}>
                {start && <div className={styles.start}>
                    {<DateDiv start={start} longDate />}
                </div>}
                {(start && end) && <div className={styles.line}></div>}
                {end && <div className={styles.end}>
                    {<DateDiv start={end} longDate />}
                </div>}
            </div>
        </div>
    );
}

export default DatePane;