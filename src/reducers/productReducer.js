import { 
   ADD_PRODUCTS_LIST,
   ADD_PRODUCTS_TO_LIST,
   UPDATE_PRODUCTS_TO_LIST,
   ADD_CURRENT_PRODUCTS,
   SHOW_PRODUCT_FORM
   } from "../actions/actionType"


const initialAuthState={
    productList:[], 
    isShowProductForm:false,
    isEditModeOn:false,
    currentProductData:null
};

     export  default function products(state=initialAuthState,action){

        switch(action.type){
            case ADD_PRODUCTS_LIST:
            return {
                ...state,
                productList:action.productList
            }

            case ADD_PRODUCTS_TO_LIST:
                return {
                 ...state,
                 productList:[...state.productList,action.product]
            }

            case UPDATE_PRODUCTS_TO_LIST:
                const newProductList=state.productList.map(product=>{
                    if(product.id===action.product.id){
                      return action.product;
                    }
                    return product;
                });

                return {
                   ...state,
                   productList:[...newProductList],
            }

            case SHOW_PRODUCT_FORM:
            return {
                ...state,
                isShowProductForm:action.isShowProductForm,
                isEditModeOn:action.isEditModeOn,
            }
            case ADD_CURRENT_PRODUCTS:
            return {
                ...state,
                currentProductData:action.product,
            }

            default:
             return state;
        }
        
   }