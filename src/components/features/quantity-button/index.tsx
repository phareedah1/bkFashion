import styles from './styles.module.scss'
 export default function Quantity() {
    return(
            <div className={styles.quantitybtn}>
              <div className={styles.addbtn}>-</div>
              <div>1</div>
              <div className={styles.subbtn}>+</div>
            </div>
    );
 }