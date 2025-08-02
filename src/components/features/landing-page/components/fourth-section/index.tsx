import ProductGrid from "./productgrid";
import styles from './styles.module.scss'

export default function FourthSection() {
    return(
        <div className={styles.container}>
            <div className={styles.header}><p>Discover Accessories That Will Elevate Your Everyday Style</p></div>
            <ProductGrid/>
        </div>
    );
}