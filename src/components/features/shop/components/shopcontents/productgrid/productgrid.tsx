import ProductCard from "../productcard";
import {products} from '../data'
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