import { connect } from 'react-redux';
import styles from '../../styles/cart.module.css';
import {CartItem} from './index'
function Cart(props){
  const {productList}=props;
   return(
    <div className={styles.Cart}>
        {
          productList.map((product,index)=>{
             return <CartItem product={product}/>
          })
        }
    </div>
   )
}

//==============================connect=================================
function mapStateToProps(state){
   const products=state.products;
   return{
     productList:products.productList,
   }
 }
 const connectedCartComponent=connect(mapStateToProps)(Cart);
 export default connectedCartComponent;