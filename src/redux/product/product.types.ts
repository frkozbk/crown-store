
export const FETCH_PRODUCTS="FETCH_PRODUCTS"
export const CLEAR_PRODUCTS="CLEAR_PRODUCTS"
export interface fetchProductsAction{
    type:typeof FETCH_PRODUCTS,
    payload:product[]
}
export interface product{
    id:number;
    productName:string;
    imgLink:string;
    price:number;
}
export interface clearProductsAction{
    type:typeof CLEAR_PRODUCTS;
}

export interface products{
    hats:product[]
}

export type ProductActionTypes = fetchProductsAction | clearProductsAction