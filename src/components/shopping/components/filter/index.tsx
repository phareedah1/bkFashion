import Back from '@/components/features/back-button'
import styles from './styles.module.scss'
import filter from '../../../../../public/assets/images/shopping/filter.svg'
import arrowdown from '../../../../../public/assets/images/shopping/arrowdown.svg'
import Image from 'next/image';

export default function Filter() {
    return(
        <div className={styles.container}>
            {/* all */}
            <div className={styles.word_filters}>
                <Back/>
                <p>All</p>
                <p>New Arrivals</p>
                <p>Best Selling</p>
                <p>Top Rating</p>
            </div>


            {/* filter */}
            <div className={styles.filter}>
                <Image
                    src={filter}
                    alt='filter'
                    width={30}
                    height={30}
                />
                <p>filter</p>
                <Image
                    src={arrowdown}
                    alt='filter'
                    width={15}
                    height={15}
                />
            </div>
        </div>
    );
    
}