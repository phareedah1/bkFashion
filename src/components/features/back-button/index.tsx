'use client';
import { useRouter } from 'next/navigation';
import back from '../../../../public/assets/images/shopping/back.svg'
import styles from './styles.module.scss'
import Image from 'next/image';
export default function Back(){
    const router = useRouter();

    return(
        <button onClick={()=> router.back()}className={styles.back}>
            <Image
                src={back}
                alt='back'
                width={15}
                height={15}
            />
        </button>
    );
}