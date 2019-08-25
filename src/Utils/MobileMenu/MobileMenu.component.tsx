import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { AppState } from '../../redux/rootReducer';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../redux/root.types';
import { bindActionCreators } from 'redux';
import { toggleUser } from '../../redux/user/user.actions';

import './MobileMenu.style.scss'

interface MobileMenuProps extends LinkDispatchProps{
    userLoggedIn:boolean
}

const MobileMenu= (props:MobileMenuProps) => {
    const {userLoggedIn,toggleUser} = props
    function handleSignInOrOut(){
        toggleUser()
    }
    return (
        <div className="mobile-menu">
            <ul className="navbar_menu">
                <li className="navbar_menu--item"><Link to="/shop">SHOP</Link></li>
                <li className="navbar_menu--item"><Link to="/contact">CONTACT</Link></li>
                {userLoggedIn ? (
                    <li className="navbar_menu--item">
                        <Link to="/shopping-cart">SHOPPING CART</Link>
                    </li>
                ): null}
                <li className="navbar_menu--item" onClick={()=>handleSignInOrOut()}>{userLoggedIn? 'SIGN OUT' : 'SIGN IN'}</li>
            </ul>
        </div>
    )
}
interface LinkDispatchProps{
    toggleUser :() => void;
}

const mapStateToProps  = (state:AppState)=>({
    userLoggedIn:state.user.isLoggedIn,
    
})

const mapDispatchToProps = (dispatch:ThunkDispatch<any,any,AppActions>):LinkDispatchProps => ({
    toggleUser:bindActionCreators(toggleUser,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(MobileMenu)
