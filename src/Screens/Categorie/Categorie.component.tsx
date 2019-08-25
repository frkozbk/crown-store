import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {products,product} from '../../redux/product/product.types'
import {} from '../../redux/shopcart/shopcart.types'
import { AppState } from '../../redux/rootReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../redux/root.types';
import { bindActionCreators } from 'redux';
import { fetchProducts, clearProducts } from '../../redux/product/product.actions';
import { withRouter, RouteComponentProps } from 'react-router';

import './Categorie.style.scss'
import ProductCard from '../../Utils/Cards/ProductCard/ProductCard.component';

interface routeInfo{
    product:keyof products | any
}
type Props=LinkDispatchProps & LinkStateProps

const Categorie= (props:Props ) => {
    const {match:{params}} = props
    console.log(props.products)
    const {fetchProducts,clearProducts,products} = props
    useEffect(()=>{
        fetchProducts(params.product)
        return ()=>clearProducts()
    },[props.fetchProducts])
    useEffect(()=>{
        renderProducts(props.products)
    },[props.products])
    function renderProducts(products:product[]) {
        return products.map(product =>{
            return <ProductCard key={product.id} id={product.id} imgLink={product.imgLink} productName={product.productName} price={product.price}/> 
        })
    }
    return (
        <>
        <h1>Hats</h1>
        <div className="categorie_container">
            {renderProducts(products)}
        </div>
        </>
        
    )
}

interface LinkStateProps  extends RouteComponentProps<routeInfo>{
    products: product[]
}
interface LinkDispatchProps {
    fetchProducts:(product:keyof products)=>void,
    clearProducts:()=>void
}
const mapStateToProps = (state:AppState)=>({
    products:state.products
})
const mapDispatchProps =(dispatch:ThunkDispatch<any,any,AppActions>)=>({
    fetchProducts:bindActionCreators(fetchProducts,dispatch),
    clearProducts:bindActionCreators(clearProducts,dispatch)
})
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchProps
    )(Categorie))
