import {Dispatch} from 'redux'
import {fetchProductsAction,clearProductsAction,products} from './product.types'
import {FETCH_PRODUCTS,CLEAR_PRODUCTS} from './product.types'
const product:products={
    hats:[
        {   
            id:1,
            imgLink:'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            productName:'Gry Hat',
            price:10,
        },
        {
            id:2,
            imgLink:'https://images.unsplash.com/photo-1525740615880-50bb88fe0b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            productName:'Black Hat',
            price:15,
        },
        {
            id:3,
            imgLink:'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            productName:'Gry Hat',
            price:8,
        },
        {
            id:4,
            imgLink:'https://images.unsplash.com/photo-1517941823-815bea90d291?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            productName:'Blue Hat',
            price:9,
        }

    ]
}

export const fetchProducts = (productName:keyof products) => (dispatch:Dispatch)=>{
    dispatch<fetchProductsAction>({
        type:FETCH_PRODUCTS,
        payload:product[productName]
    })
}
export const clearProducts = () => (dispatch:Dispatch) => {
    dispatch<clearProductsAction>({
        type:CLEAR_PRODUCTS
    })
}