import Image from 'next/image';
import { useState } from 'react';
import styles from './LightboxSlide.module.scss'
import { Tag, DateDiv } from '../../../badges';

function LightboxSlide({ title, date, mediums, image, showDetails = True }) {
    const [ratio, setRatio] = useState(1.1) // default to 16:9
    return (
        <a className={styles.slide}>
            <div className={styles.image}>
                <Image
                    src={image.href}
                    alt={image.alt}
                    objectFit='contain'
                    layout="fill" />
            </div>
            {showDetails && <div className={styles.footer}>
                <div className={styles.text}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                    <div className={styles.date}>
                        <DateDiv start={date} longDate />
                    </div>
                </div>
                <div className={styles.tags}>
                    {mediums.map((medium, i) => {
                        return (
                            <div key={i}><Tag noShadow>{medium}</Tag></div>
                        )
                    })}
                </div>
            </div>}
        </a>
    )
}

export default LightboxSlide