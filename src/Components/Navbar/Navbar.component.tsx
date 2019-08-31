import React,{useEffect,useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {AppState} from '../../redux/rootReducer'
import {toggleUser} from '../../redux/user/user.actions'

import useWindowWidth from '../../hooks/useWindowWidth'

import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../redux/root.types';
import { bindActionCreators } from 'redux';

import './Navbar.style.scss'
import crown from './crown.jpg'
import shoppingCart from './shop.svg'
import ShoppingCart from '../ShoppingCart/ShoppingCart.component';
import { toggleCart, disableCart, activateCart, hideCart } from '../../redux/shopcart/shopcart.actions';
import MobileMenu from '../../Utils/MobileMenu/MobileMenu.component';
import { _product } from '../../redux/shopcart/shopcart.types';

type Props = LinkStateProps & LinkDispatchProps

const Navbar = (props:Props) => {
    const {userLoggedIn,toggleUser,toggleCart,hideCart,products} = props
    const [showMobileMenu,setShowMobileMenu] =useState(false)
    const windowWitdh=useWindowWidth()
    useEffect(()=>{
        if(windowWitdh){
            handleResize(windowWitdh)
        }
    },[windowWitdh])
    function handleResize(width:number){
        if(width>=600){
            setShowMobileMenu(false)
        }else{
            hideCart()
        }
    }
    function showOrNotShow(){
        return  props.showCart &&userLoggedIn
    }
    function handleSignInOrOut():void {
        toggleUser()
        hideCart()  
    }
    function handleShoppingCartClick(){
        toggleCart()
    }
    function handleMobileMenu(){
        setShowMobileMenu(!showMobileMenu)
    }
    return(
    <nav className="navbar">
        <div className="navbar_container">
            <Link to="/">
                <img src={crown} alt="logo" className="logo"/>
            </Link>
            
            <ul className="navbar_menu">
                <li className="navbar_menu--item"><Link to="/shop">SHOP</Link></li>
                <li className="navbar_menu--item"><Link to="/contact">CONTACT</Link></li>
                <li className="navbar_menu--item" onClick={()=>handleSignInOrOut()}>{userLoggedIn? 'SIGN OUT' : 'SIGN IN'}</li>
                {userLoggedIn ? (
                    <li className="navbar_menu--item" onClick={()=>handleShoppingCartClick()}>
                        <span className="shoppingCard"><img src={shoppingCart} alt="shopping-cart"/><p>{products.length}</p></span>
                    </li>
                ): null}
            </ul>
            {showOrNotShow() ? <ShoppingCart/> : null}
            <span className="burger-menu" onClick={()=>handleMobileMenu()}>&#9776;</span>
        </div>
        {showMobileMenu ? <MobileMenu/> : null}
    </nav>
)}

interface LinkStateProps {
    userLoggedIn:boolean;
    disabled:boolean;
    showCart:boolean;
    products:_product[];
}
interface LinkDispatchProps{
    toggleUser :() => void;
    toggleCart:()=>void;
    disableCart:()=>void;
    activateCart:()=>void;
    hideCart:()=>void;
}

const mapStateToProps  = (state:AppState)=>({
    userLoggedIn:state.user.isLoggedIn,
    disabled:state.cart.disabled,
    showCart:state.cart.showCart,
    products:state.cart.products,
})

const mapDispatchToProps = (dispatch:ThunkDispatch<any,any,AppActions>):LinkDispatchProps => ({
    toggleUser:bindActionCreators(toggleUser,dispatch),
    toggleCart:bindActionCreators(toggleCart,dispatch),
    disableCart:bindActionCreators(disableCart,dispatch),
    activateCart:bindActionCreators(activateCart,dispatch),
    hideCart:bindActionCreators(hideCart,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)