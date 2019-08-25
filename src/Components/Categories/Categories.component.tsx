import React from 'react'
import CategoriesCard from '../../Utils/Cards/CategorieCard/CategoriesCard.component';

import './Categories.style.scss'

interface categorie{
    imgLink:string;
    header:string;
    big?:boolean;
}
const categories:categorie[]=[
    {
        imgLink:'https://images.unsplash.com/photo-1463701700197-69d4180d3ce6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1237&q=80',
        header:'hats'
    },
    {
        imgLink:'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        header:'jackets'
    },
    {
        imgLink:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        header:'sneakers'
    },
    {
        imgLink:'https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        header:'men',
        big:true
    },
    {
        imgLink:'https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        header:'women',
        big:true
    }


]

const Categories =() => {
    
function renderCategorieCards() {
    return categories.map(categorie => {
        if(categorie.big){
            return <CategoriesCard key={categorie.header} header={categorie.header} imgLink={categorie.imgLink} big={true}/>
        }
        return(
        <CategoriesCard key={categorie.header} header={categorie.header} imgLink={categorie.imgLink}/>
    )})
}

    return (
        <div className="categories">
            {renderCategorieCards()}
        </div>
    )
}

export default Categories
