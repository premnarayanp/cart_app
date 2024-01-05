import {ADD_PRODUCTS_LIST,ADD_PRODUCTS_TO_LIST,UPDATE_PRODUCTS_TO_LIST,SHOW_PRODUCT_FORM,ADD_CURRENT_PRODUCTS} from './actionType';
//action creator For products
export function addProductsList(productList){
    return{
         type:ADD_PRODUCTS_LIST,
         productList:productList
     }
 }

 
 export function addProductToList(product){
    return{
         type:ADD_PRODUCTS_TO_LIST,
         product:product
     }
 }

 export function updateProductToList(product){
    return{
         type:UPDATE_PRODUCTS_TO_LIST,
         product:product
     }
 }

 export function addCurrentProduct(product){
    return{
         type:ADD_CURRENT_PRODUCTS,
         product:product
     }
 }

 export function showProductForm(val1,val2){
    return{
         type:SHOW_PRODUCT_FORM,
         isShowProductForm:val1,
         isEditModeOn:val2,
     }
 }
