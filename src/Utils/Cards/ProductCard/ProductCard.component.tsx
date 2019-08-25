import React from 'react'

import { ThunkDispatch } from 'redux-thunk';
import {connect} from 'react-redux'
import { AppActions } from '../../../redux/root.types';
import { bindActionCreators } from 'redux';
import { addProductToCard } from '../../../redux/shopcart/shopcart.actions';
import { product } from '../../../redux/product/product.types';

import './ProductCard.style.scss'

interface ProductCardProps{
    imgLink:string;
    productName:string;
    id:number;
    price:number;
}

type Props=ProductCardProps & LinkDispatchProps
const ProductCard = (props:Props) => {
    const {imgLink,productName,id,price,addProductToCard} = props;
    function handleClick(){
        addProductToCard({id,productName,imgLink,price})
    }
    return (
        <div key={id} className="productCard">
            <div className="productCard_imageContainer">
                    <img src={imgLink} alt="product_image" className="image"/>
                    <button className="productCard_button" onClick={()=>handleClick()}>ADD TO CARD</button>
            </div>
            <div className="productCard_footer">
                <p>{productName}</p>
            </div>
        </div>
    )
}
interface LinkDispatchProps{
    addProductToCard:(product:product)=>void
}
const mapDispatchToProps = (dispatch:ThunkDispatch<any,any,AppActions>):LinkDispatchProps => ({
    addProductToCard:bindActionCreators(addProductToCard,dispatch)
})
export default connect(null,mapDispatchToProps)(ProductCard)
