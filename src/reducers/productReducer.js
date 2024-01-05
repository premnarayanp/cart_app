import { 
   ADD_PRODUCTS_LIST,
   ADD_PRODUCTS_TO_LIST
   } from "../actions/actionType"


const initialAuthState={
    productList:[],
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

            default:
             return state;
        }
        
   }