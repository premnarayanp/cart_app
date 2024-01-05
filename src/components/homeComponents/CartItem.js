import styles from '../../styles/cart_item.module.css';
export default function CartItem(props){
    const {product}=props
    return(
     <div className={styles.CartItem}>
       <div className={styles.productThumbnail}>
          <img src={product.images[0]} alt='Product'/>
       </div>

       <div className={styles.aboutProduct}>
          <span>{product.title}</span>
          <button>View more...</button>
       </div>
     </div>
    )
 }