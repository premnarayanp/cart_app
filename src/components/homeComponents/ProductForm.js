import { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import styles from '../../styles/createProduct.module.css';
import {showProductForm,addProductToList,updateProductToList} from '../../actions/productsActionCreator'
import { addProduct,updateProduct } from '../../api';
import { connect } from 'react-redux';

const UserForm = (props) => {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(true);
  const [stock, setStock] = useState(true);
  
  const [creating, setCreating] = useState(false);
  const [updating, setUpdating] = useState(false);
  const { addToast } = useToasts();

  const {currentProductData,isEditModeOn,dispatch}=props

  useEffect(()=>{

    async function setDataForEdit(){
     setTitle(currentProductData.title);
     setBrand(currentProductData.brand);
     setCategory(currentProductData.category);
     setDescription(currentProductData.description);
     setPrice(currentProductData.price);
     setRating(currentProductData.rating);
     setStock(currentProductData.stock);
     setDiscountPercentage(currentProductData.discountPercentage);
    }

    if(isEditModeOn){ 
      setDataForEdit();
    }
  },[]);

  const handleCloseProductForm=()=>{
    dispatch(showProductForm(false));
  }

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setCreating(true);

    if (!title || !brand || !category || !description || !price || !rating || !stock || !discountPercentage ) {
      setCreating(false);
      return addToast('Please Enter All Field', {
        appearance: 'error',
      });
    }
     
    const product={
      title:title,
      brand: brand,
      category:category,
      description: description,
      discountPercentage:description,
      images:['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'],
      price:price,
      rating:rating,
      stock:stock,
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    }

    const response= await addProduct(product);
    if (response.success && response.data) {
      dispatch(addProductToList(response.data));
      dispatch(showProductForm(false));
      addToast('User successfully created', {
        appearance: 'success',
      });

    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }

    setCreating(false);
  };


  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setUpdating(true);

    if (!title || !brand || !category || !description || !price || !rating || !stock || !discountPercentage ) {
      setCreating(false);
      return addToast('Please Enter All Field', {
        appearance: 'error',
      });
    }
     
    const product={
      id:currentProductData.id,
      title:title,
      brand: brand,
      category:category,
      description: description,
      price:price,
      rating:rating,
      stock:stock,
      discountPercentage:discountPercentage,
      thumbnail:currentProductData.thumbnail,
      images:currentProductData.images,
    }

    const response= await updateProduct(product,currentProductData.id);
    if (response.success && response.data) {
      dispatch(showProductForm(false));
      dispatch(updateProductToList(product));
      addToast('User successfully updated', {
        appearance: 'success',
      });

    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }

    setUpdating(false);
  };

  return (
   <div className={styles.UserForm}>
    <form className={styles.userForm} onSubmit={isEditModeOn?handleUpdateProduct:handleCreateProduct}>
    
      <button className={styles.closeUserFormBtn} onClick={handleCloseProductForm}>
        <img src={require('../../assets/crossbtn.png')} alt='cut'/>
      </button>
      <span className={styles.userHeader}>Product Form</span>

      <div className={styles.field}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="number"
          placeholder="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="number"
          placeholder="DiscountPercentage"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
        />
      </div>


      <div className={styles.field}>
        {
          isEditModeOn?
          <button disabled={updating}>{updating ? 'Updating...' : 'Update'}</button>
          :
          <button disabled={creating}>{creating ? 'Creating...' : 'Create'}</button>
        }
      </div>
    </form>
    </div>
  );
};

//==============================connect=================================
function mapStateToProps(state){
  const products=state.products;
  return{
    currentProductData:products.currentProductData,
    isEditModeOn:products.isEditModeOn
  }
}
const connectedProductFormComponent=connect(mapStateToProps)(UserForm);
export default connectedProductFormComponent;
