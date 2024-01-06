import styles from '../../styles/cart_item.module.css';
import containerDisplay from '../../styles/productDetailDisplay.module.css';
import {showProductForm,addCurrentProduct} from '../../actions/productsActionCreator';

export default function CartItem(props){
    const {product,detailContainerRef,dispatch}=props

    const handleEditProduct=()=>{
      dispatch(addCurrentProduct(product));
      dispatch(showProductForm(true,true))
    }

    const openProductDetail=()=>{
      // console.log("detailContainerRef=",detailContainerRef.current)
      detailContainerRef.current.className=containerDisplay.displayBlock;
      dispatch(addCurrentProduct(product));
    }

    return(
     <div className={styles.CartItem}>
       <div className={styles.productThumbnail}>
          <img src={product.thumbnail} alt='Product'/>
       </div>

       <div className={styles.aboutProduct}>
          <span>{product.title}</span>
          <button onClick={handleEditProduct}>edit</button>
          <button onClick={openProductDetail}>View more...</button>
       </div>
     </div>
    )
 }