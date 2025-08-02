
import { products }from '../data';
import ProductCard from '../productcard';
import styles from './styles.module.scss'

export default function ProductGrid() {
    return(
        <div className={styles.grid}>
            {products.map((p)=> (
                <ProductCard key={p.id} {...p}/>
                ))}
        </div>
    );
}