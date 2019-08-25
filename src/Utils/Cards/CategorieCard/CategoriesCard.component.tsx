import React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import './CategoriesCard.style.scss'

interface CategoriesProps extends RouteComponentProps{
    imgLink:string,
    header:string,
    big?:boolean
}
const CategoriesCard = (props:CategoriesProps) => {
    const {header,imgLink,big,history} = props
    function handleClick() {
        history.push(`/categories/${header}`)
    }
    return (
        
            <div className={`categoriesCard ${big ? 'big' : ''}`} onClick={handleClick} >
                
                <div className="categoriesCard_imageContainer">
                    <img src={imgLink} alt="categories_image" className="image"/>
                </div>
            
                <div className="categories_content">
                    <h1 className="categories_content--header">{header.toUpperCase()}</h1>
                    <p>BUY NOW</p>
                </div>
        </div>
        
        
    )
}

export default withRouter(CategoriesCard)
