import React from 'react'
import {connect} from 'react-redux'

import './Shopping.style.scss'
import { AppState } from '../../redux/rootReducer';
import { _product } from '../../redux/shopcart/shopcart.types';
import ShoppingCartItemComponent from '../ShoppingCartItem/ShoppingCartItem.component';



type Props = LinkState
const ShoppingCart = (props:Props) => {
    const {products} = props
    function calculateTotalPrice() {
        if(products.length===0){
            return 0
        }else{
            return products.reduce((value:number,product)=>{
                return value+(product.price*product.total)
            },0)
        }
        
    }
    function renderList() {
        return products.map(product =>{
            return <ShoppingCartItemComponent key={product.id} product={product}/>
        })
    }
    return (
        <div className="shoppingCart">
            <div className="shoppingCart_list">
                {products.length===0 ? <h1>Your bag is empty</h1> : null}
                {renderList()}
                
                
            </div>
            <div className="shoppingCart_total">
                    <h1>{`Total Price = ${calculateTotalPrice()} $`}</h1>
            </div>
            <button>Checkout</button>
        </div>
    )
}
interface LinkState{
    products:_product[];
}
const mapStateToProps = (state:AppState) :LinkState=>({
    products:state.cart.products
})
export default connect(mapStateToProps)(ShoppingCart)
