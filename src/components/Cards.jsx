import React from 'react'

export default function Cards(props) {
    const {title,
        ingredients,
        recipe,
        image,
        category,
        servings,
                } =  props
    console.log(title)

  return (
    <>
        <div className='col-lg-4 col-md-6 col-sm-12 col-xl-4 col-xxl-4  '>
      <div className='card h-95 shadow rounded my-4'>
        <div className='card-body lead'>
     <div className='d-flex justify-content-evenly '>
     
     </div>
     
    <img src={image}/>
   <h3 className='card-title'>{title}</h3>
   <p className=''>{ingredients}</p>
   <p className=''>{recipe}</p>
   <p className=''> serving: {servings}</p>
   <div className='d-grid justify-content-end mt-'>
    
   </div>

  </div>
    </div>
    </div>
    </>
  )
}
