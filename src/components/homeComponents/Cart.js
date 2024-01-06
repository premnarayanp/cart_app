import { connect } from 'react-redux';
import styles from '../../styles/cart.module.css';
import containerDisplay from '../../styles/productDetailDisplay.module.css';
import {CartItem,ProductDetail} from './index'
import {useRef } from 'react';

function Cart(props){
  const {productList,dispatch}=props;
  const detailContainerRef =useRef();
   return(
    <div className={styles.Cart}>

      <section className={containerDisplay.displayNone} ref={detailContainerRef}>
        <ProductDetail detailContainerRef={detailContainerRef} />
      </section>
        {
          productList.map((product,index)=>{
             return <CartItem 
              product={product}
              dispatch={dispatch}
              key={`product-${index}`}
              detailContainerRef={detailContainerRef}
              />
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