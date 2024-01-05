import styles from '../../styles/cart_item.module.css';
import {showProductForm,addCurrentProduct} from '../../actions/productsActionCreator';

export default function CartItem(props){
    const {product,dispatch}=props
    const handleEditProduct=()=>{
      dispatch(addCurrentProduct(product));
      dispatch(showProductForm(true,true))
    }

    return(
     <div className={styles.CartItem}>
       <div className={styles.productThumbnail}>
          <img src={product.thumbnail} alt='Product'/>
       </div>

       <div className={styles.aboutProduct}>
          <span>{product.title}</span>
          <button onClick={handleEditProduct}>edit</button>
          <button>View more...</button>
       </div>
     </div>
    )
 }