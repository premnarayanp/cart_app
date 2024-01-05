import '../styles/home.css';
import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import {Cart} from '../components/homeComponents/index';
import {allProducts} from '../api/index'
import {addProductsList} from '../actions/productsActionCreator';

export default function Home(props){
  const {dispatch}=props;
  useEffect(()=>{
    async function fetchData(){
       const response= await allProducts();
       if(response.success){
         dispatch(addProductsList(response.data.products));
       }
     }
     fetchData();
   })

  return (
    <div className="Home">
      <Cart/>
    </div>
  );

}


//==============================connect=================================
// function mapStateToProps(state){
//   const products=state.products;
//   return{
//     productList:products.productList,
//   }
// }
// const connectedHomeComponent=connect(mapStateToProps)(Home);
// export default connectedHomeComponent;