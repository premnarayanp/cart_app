import '../../styles/homeNavbar.css';
import { useState } from 'react';
import {searchProduct} from '../../api/index';
import {addProductsList} from '../../actions/productsActionCreator';
import { useToasts } from 'react-toast-notifications';
import { connect } from 'react-redux';

function HomeNavbar(props){
 const {dispatch,productList}=props;
 //const [productCount,setProductCount]=useState(0);
 const [searchText,setSearchText]=useState("");
 const [searchType,setSearchType]=useState("Select Types");

 const { addToast } = useToasts();

   const handleAddProduct=()=>{
    //  dispatch(showProductForm(true,false));
   }
  const handleSearchClick= async()=>{
      const response= await searchProduct(searchText);
      if (response.success && response.data) {
        dispatch(addProductsList(response.data.products));
        setSearchText("")
        // setProductCount(response.data.products.length)
        addToast(`${response.data.products.length+" Product records found"}`, {
          appearance: 'success',
        });

      } else {
        addToast(response.message, {
          appearance: 'error',
        });
      }
  }
  
  return(
  <div className='home_nav'> 
    <div className='search_bar'>
      <input type="search" id="search-input" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
          
      <select className="search_type" id='search_types' value={searchType} onChange={(e)=>setSearchType(e.target.value)} >
        <option>Select Types</option>
        <option>All</option>
        <option>Name</option>
        <option>Id</option>
      </select>

      <button className="search_btn" onClick={handleSearchClick}><img src={require('../../assets/serch_icon 3.png')} alt='si'/></button>  
    </div>
        
    <div className='product_count'>
       <span>Total Products:- </span>
       <span>{productList.length}</span>
    </div>

    <button className='addProductBtn' onClick={handleAddProduct}>
      <span className='plus_symbol'>+</span>
      <span>Add Product</span>
    </button>
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
const connectedHomeNavbarComponent=connect(mapStateToProps)(HomeNavbar);
export default connectedHomeNavbarComponent;