import {Dispatch} from 'redux'
import {product} from '../product/product.types'
import {togglecartAction,disablecartAction,activatecartAction, hidecartAction, addProductToCartAction} from './shopcart.types'
import {TOGGLE_CART,DISABLE_CART,ACTIVATE_CART,HIDE_CART, ADD_PRODUCT_TO_CART,} from './shopcart.types'
export const  toggleCart = () => (dispatch :Dispatch) => {
    dispatch<togglecartAction>({
        type:TOGGLE_CART
    })
}
export const hideCart = () => (dispatch:Dispatch) => {
    dispatch<hidecartAction>({
        type:HIDE_CART
    })
}
export const  disableCart = () => (dispatch :Dispatch) => {
    dispatch<disablecartAction>({
        type:DISABLE_CART
    })
}
export const  activateCart = () => (dispatch :Dispatch) => {
    dispatch<activatecartAction>({
        type:ACTIVATE_CART
    })
}
export const addProductToCard = (product:product) =>(dispatch:Dispatch) =>{
    dispatch<addProductToCartAction>({
        type:ADD_PRODUCT_TO_CART,
        payload:product
    })
}