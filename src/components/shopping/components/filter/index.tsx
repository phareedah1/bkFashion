import styles from './styles.module.scss'

export default function Filter() {
    return(
        <div className={styles.container}>
            {/* all */}
            <div className={styles.word_filters}>
                <div className={styles.back}></div>
                <p>All</p>
                <p>New Arrivals</p>
                <p>Best Selling</p>
                <p>Top Rating</p>
            </div>


            {/* filter */}
            <div className={styles.filter}>
                <p>filter</p>
            </div>
        </div>
    );
    
}