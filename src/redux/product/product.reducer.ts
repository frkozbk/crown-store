import {ProductActionTypes, product,} from './product.types'
import {FETCH_PRODUCTS,CLEAR_PRODUCTS} from './product.types'

const initialState:product[]=[]

const productReducer = (state=initialState,action:ProductActionTypes):product[] =>{
    switch (action.type) {
        case FETCH_PRODUCTS:
            return [...action.payload];
        case CLEAR_PRODUCTS:
            return []
        default:
            return state;
    }
}
export default productReducer