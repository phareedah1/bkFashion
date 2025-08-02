import Image from 'next/image';
import styles from './styles.module.scss'

type ProductProps= {
    name: string;
    price: number;
    image: string;
    category: string;
};

export default function ProductCard({name, price, image, category}: ProductProps) {
    return(
        <div className={styles.card}>
            <Image src={image} alt='bag' width={300} height={400} className={styles.image}/>
            <h4>{name}</h4>
            <p>category</p>
            <strong>{price.toLocaleString()}</strong>
        </div>
    );
}