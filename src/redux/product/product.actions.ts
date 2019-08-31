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

    ],
    jackets:[
        {
            id:5,
            imgLink:'https://images.unsplash.com/photo-1509539662397-116cb90542f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            productName:'Black Jacket',
            price:10,
        },
        {
            id:6,
            imgLink:'https://images.unsplash.com/photo-1552335020-8dc341015861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=782&q=80',
            productName:'Blue Jacket',
            price:11,
        },
        {
            id:7,
            imgLink:'https://images.unsplash.com/photo-1545272957-4a9a90740ce1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            productName:'Yellow Jacket',
            price:12,
        },
        {
            id:8,
            imgLink:'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            productName:'Gry Jacket',
            price:13,
        },
    ],
    sneakers:[
        {
            id:9,
            imgLink:'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
            productName:'White sneaker',
            price:14,
        },
        {
            id:10,
            imgLink:'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            productName:'Orange sneaker',
            price:15,
        },
        {
            id:11,
            imgLink:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80',
            productName:'Red sneaker',
            price:16,
        },
        {
            id:12,
            imgLink:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
            productName:'Black sneaker',
            price:17,
        }
    ],
    womens:[
        {
            id:13,
            imgLink:'https://i.ibb.co/7CQVJNm/blue-tank.png',
            productName:'Blue Tanktop',
            price: 18
        },
        {
            id:14,
            imgLink:'https://i.ibb.co/4W2DGKm/floral-blouse.png',
            productName:'Floral Blouse',
            price:19
        },
        {
            id:15,
            imgLink:'https://i.ibb.co/KV18Ysr/floral-skirt.png',
            productName:'Floral Dress',
            price:80
        },
        {
            id:16,
            imgLink:'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
            productName:'Red Dots Dress',
            price:80
        },
        {
            id:17,
            imgLink:'https://i.ibb.co/KmSkMbH/striped-sweater.png',
            productName:'Striped Sweater',
            price:45
        },
        {
            id:18,
            imgLink:'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
            productName:'Yellow Track Suit',
            price:135
        },
        {
            id:19,
            imgLink:'https://i.ibb.co/qBcrsJg/white-vest.png',
            productName:'White Blouse',
            price:20
        },
        
    ],
    mens:[
        {
            id:20,
            imgLink:'https://i.ibb.co/xJS0T3Y/camo-vest.png',
            productName:'Camo Down Vest',
            price:325
        },
        {
            id:21,
            imgLink:'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
            productName:'Floral T-shirt',
            price:20
        },
        {
            id:22,
            imgLink:'https://i.ibb.co/55z32tw/long-sleeve.png',
            productName:'Black & White Longsleeve',
            price:25
        },
        {
            id:23,
            imgLink:'https://i.ibb.co/RvwnBL8/pink-shirt.png',
            productName:'Pink T-shirt',
            price:25
        },
        {
            id:24,
            imgLink:'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
            productName:'Jean Long Sleeve',
            price:40
        },
        {
            id:25,
            imgLink:'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
            productName:'Burgundy T-shirt',
            price:25
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