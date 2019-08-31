import {ShopCartInterface,ShopCartTypes, ADD_PRODUCT_TO_CART, _product, REMOVE_PRODUCT_FROM_CART,} from './shopcart.types'
import {TOGGLE_CART,DISABLE_CART,ACTIVATE_CART, HIDE_CART, } from './shopcart.types'
const INITIAL_STATE:ShopCartInterface={
    disabled:false,
    showCart:true,
    products:[]
}
export default(state=INITIAL_STATE,action:ShopCartTypes) => {
    switch (action.type) {
        case TOGGLE_CART:
            return {...state,showCart:!state.showCart}
        case HIDE_CART:
            return {...state,showCart:false}
        case DISABLE_CART:
            return {...state,disabled:true}
        case ACTIVATE_CART:
            return {...state,disabled:false}
        case ADD_PRODUCT_TO_CART:{
            const isTheProductInsideTheBasket =state.products.find(product => {
                return product.id===action.payload.id
            })
            if(isTheProductInsideTheBasket){
                const newProductsArray=state.products.map((product:_product) =>{
                    if(product.id===action.payload.id){
                        return {...product,total:product.total+1}
                    }
                    return {...product}
                });
                return {...state,products:newProductsArray}
            }
            else{
                return {...state,products:[...state.products,{...action.payload,total:1}]}
            }
        }
        case REMOVE_PRODUCT_FROM_CART:{
                const newProductsArray=state.products.map((product:_product) =>{
                    if(product.id===action.payload.id){
                        return {...product,total:product.total-1}
                    }
                    return {...product}
                    }).filter(product=>{
                        return product.total!==0
                    });
                    return {...state,products:newProductsArray}
        }
        default:
            return state;
    }
}