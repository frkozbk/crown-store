import {product} from '../product/product.types'
export const TOGGLE_CART='SHOW_CART';
export const DISABLE_CART='DISABLE_CART';
export const ACTIVATE_CART='ACTIVE_CART'
export const HIDE_CART="HIDE_CART"
export const ADD_PRODUCT_TO_CART="ADD_PRODUCT_TO_CART"
export const REMOVE_PRODUCT_FROM_CART="REMOVE_PRODUCT_FROM_CART"
export interface togglecartAction{
    type:typeof TOGGLE_CART;
}
export interface hidecartAction{
    type:typeof HIDE_CART
}
export interface disablecartAction{
    type:typeof DISABLE_CART;
}
export interface activatecartAction{
    type:typeof ACTIVATE_CART
}
export interface addProductToCartAction{
    type:typeof ADD_PRODUCT_TO_CART;
    payload:product
}
export interface removeProductFromCartAction{
    type:typeof REMOVE_PRODUCT_FROM_CART;
    payload:product
}
export interface _product{
    id:number;
    productName:string;
    imgLink:string;
    price:number;
    total:number;
}
export interface ShopCartInterface{
    disabled:boolean;
    showCart:boolean;
    products:_product[]
}

export type ShopCartTypes = togglecartAction| disablecartAction | activatecartAction |hidecartAction |addProductToCartAction | removeProductFromCartAction
