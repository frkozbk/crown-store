import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import productReducers from './product/product.reducer'
import cartReducer from './shopcart/shopcart.reducer'

const rootReducer = combineReducers({
    user:userReducer,
    products:productReducers,
    cart:cartReducer
})

export type AppState=ReturnType<typeof rootReducer>
export default rootReducer