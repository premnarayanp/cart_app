import '../../styles/productDetail.css';
import containerDisplay from '../../styles/productDetailDisplay.module.css';
import { connect } from 'react-redux';
import {ProductCarousel} from './index';

function ProductDetail(props){
  const {detailContainerRef,currentProductData,dispatch}=props;
  

  //Close chatbot
  const closeDetail=()=>{
    detailContainerRef.current.className=containerDisplay.displayNone;
  }

  return(
    <div className="productDetail">
      <header className="productDetailHeader">
        <div className='roundedImageContainer'>
          <img src={currentProductData?currentProductData.thumbnail:''} alt="pdf-pic" />
        </div>

        <span className="productName">{currentProductData?currentProductData.title:""}</span>

        <button className='closeDetailBtn' onClick={closeDetail}>
         <img src={require('../../assets/crossbtn.png')} alt='cut'/>
        </button>
      </header>

      <main className='productMain'>
        {
          currentProductData &&
          <ProductCarousel
            images={currentProductData.images}
            description={currentProductData.description}
            brand={currentProductData.brand}
          />
        }

        <div className='table-container'>
          {
            currentProductData &&
            <table class="product_info_table">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Detail Types</th>
                <th>Detail</th>
              </tr>
            </thead>

            <tbody>
              <tr> <td>01</td>  <td>Title</td>  <td>{currentProductData.title}</td> </tr>
              <tr> <td>02</td>  <td>Brand</td>  <td>{currentProductData.brand}</td> </tr>
              <tr> <td>03</td>  <td>Category</td>  <td>{currentProductData.category}</td> </tr>
              <tr> <td>04</td>  <td>Description</td>  <td>{currentProductData.description}</td> </tr>
              <tr> <td>05</td>  <td>DiscountPercentage</td>  <td>{currentProductData.discountPercentage}</td> </tr>
              <tr> <td>06</td>  <td>Price</td>  <td>{currentProductData.price}</td> </tr>
              <tr> <td>07</td>  <td>Rating</td>  <td>{currentProductData.rating}</td> </tr>
              <tr> <td>08</td>  <td>Stock</td>  <td>{currentProductData.stock}</td> </tr>
            </tbody>
          </table>
          }
        </div>   
      </main>
    </div>
  )

}

//==============================connect=================================
function mapStateToProps(state){
  const products=state.products;
  return{
    currentProductData:products.currentProductData,
  }
}
const connectedProductDetailComponent=connect(mapStateToProps)(ProductDetail);
export default connectedProductDetailComponent;