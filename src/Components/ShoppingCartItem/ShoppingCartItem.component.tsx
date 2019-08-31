import React from 'react'
import { _product } from '../../redux/shopcart/shopcart.types';
import {connect} from 'react-redux'
import './ShoppingCartItem.style.scss'
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../redux/root.types';
import { bindActionCreators } from 'redux';
import { addProductToCard, removeProductFromCard } from '../../redux/shopcart/shopcart.actions';
import { product } from '../../redux/product/product.types';

type Props = LinkState & LinkDispatch
const ShoppingCartItem = (props:Props) => {
    const {product,addProductToCard,removeProductFromCard} = props
    function handleIncrement() {
        addProductToCard(product)
    }
    function handleDecrement() {
        removeProductFromCard(product)
    }
    return (
        <div className="shoppingCartItem">
            <img src={product.imgLink} alt={product.productName} />
            <div className="shoppingCartItem_label">
                <h1>{product.productName}</h1>
                <div className="shoppingCarItem_total">
                    <button onClick={handleDecrement}>-</button>
                    <p>{product.total}</p>
                    <button onClick={handleIncrement}>+</button>
                </div>
            </div>
            <p className="totalPrice">{`${product.price * product.total}$`}</p>
        </div>
    )
}
interface LinkState{
    product:_product
}
interface LinkDispatch{
    addProductToCard:(product:product)=>void
    removeProductFromCard:(product:product) => void
}
const mapDispatchToProps = (dispatch:ThunkDispatch<any,any,AppActions>) =>({
    addProductToCard:bindActionCreators(addProductToCard,dispatch),
    removeProductFromCard:bindActionCreators(removeProductFromCard,dispatch)
})

export default connect(null,mapDispatchToProps)(ShoppingCartItem)
