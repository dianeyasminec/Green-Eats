import React from 'react'
import Cards from './Cards'

export default function AllRecipes(props) {

const {details} =  props

    console.log(details)  

    // details.map(detail => {
    //   return(detail.gf)
    // })


  return (
    <>
    <div className='lead'>
      <h1 className='text-center '>Fresh and Healthy Meals</h1>
      <p className='text-center'>Welcome to our recipes page! We know that finding the perfect recipe can be a challenge, 
        which is why we've designed our recipe layout with you in mind. Our sophisticated layout 
        combines the best of both worlds - a grid view layout for easy browsing, and a single-page
         layout for all the details you need for each recipe. Our grid view layout showcases a 
         variety of recipes with thumbnail images that make it easy to find what you're looking 
         for. When you click on a recipe, you'll be taken to a single page that provides all the
          information you need, including ingredients, instructions, and photos. We've also
           included a section for related recipes, so you can easily find other recipes that 
           are similar to the one you're viewing. We hope you enjoy our recipes and our 
           easy-to-use layout. Whether you're an experienced chef or just starting out,
            we're confident you'll find a recipe that's perfect for you on our website.
        </p>
    </div>

    <div>
    <h1 className='text-center lead display-4 text-decoration-underline py-5'>Our Recipes</h1>

      <div className='container-fluid '>
        <div className='container '>
          <div className='row '>

       {details.map((detail,id) =>{
        return(
             <Cards title={detail.title}  ingredients={detail.ingredients} image={detail.image} 
             recipe={detail.recipe} servings={detail.serving} category={detail.category}
             />
        )
       })}
      
        </div>
        </div>

  </div>

    </div>
    </>
  )
}
