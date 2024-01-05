import {ADD_PRODUCTS_LIST,ADD_PRODUCTS_TO_LIST} from './actionType';
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
         productList:product
     }
 }
