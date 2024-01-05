import '../../styles/homeNavbar.css';
import { useState } from 'react';

export default function HomeNavbar(props){
 const {dispatch}=props;
 const [searchText,setSearchText]=useState("");
 const [searchType,setSearchType]=useState("Select Types");

   const handleAddProduct=()=>{
    //  dispatch(showProductForm(true,false));
   }
  const handleSearchClick= async()=>{
      //const response= await searchProduct(searchText,searchType);
      // if (response.success && response.data) {
      //   dispatch(productList(response.data.productList));
      //   setSearchText("")
      //   addToast(`$(response.data.productList.length+" Product records found")`, {
      //     appearance: 'success',
      //   });

      // } else {
      //   addToast(response.message, {
      //     appearance: 'error',
      //   });
      // }
  }
  
  return(
  <div className='home_nav'> 
    <div className='search_bar'>
      <input type="search" id="search-input" placeholder="Search" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
          
      <select className="search_type" id='search_types' value={searchType} onChange={(e)=>setSearchType(e.target.value)} >
        <option>Select Types</option>
        <option>All</option>
        <option>Roll</option>
        <option>Position</option>
        <option>Name</option>
        <option>User Id</option>
      </select>

      <button className="search_btn" onClick={handleSearchClick}><img src={require('../../assets/serch_icon 3.png')} alt='si'/></button>  
    </div>
        
    <button className='addProductBtn' onClick={handleAddProduct}>
      <span className='plus_symbol'>+</span>
      <span>Create User</span>
    </button>
  </div>
  )
}