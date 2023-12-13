import React from 'react';

const Recipe = (props) => {
    const handleClick = (e) => {
        if (e.target.nextElementSibling.style.display === 'block') {
            e.target.nextElementSibling.style.display = 'none'} else {
                e.target.nextElementSibling.style.display = 'block'
            }    
    }

    const ingredientsList = props.data.ingredient.map(item => <li>{item.name}   {item.amount} {item.unit}</li>)

    const stepsList = props.data.step.map(item => <li>{item.description}</li>)

    return <div key={props.data.name} className='meal-block'>
    <div className='meal-img'>
        <img 
        src={props.data.image} 
        alt={props.data.name} 
        height='200px' 
        width='auto' 
        loading='lazy'
        onError={(e) => {
            e.target.src = "https://placehold.co/320x260?text=404&font=roboto"
        }}/>
    <div className='transparent'>{props.data.name}</div> 
</div>
    <button className='how-tc' onClick={handleClick}>How to cook</button>
    <div className='steps' style={{display: 'none'}}>
        <p className='red'>Ingredients:</p>
       <ul>{ingredientsList}</ul>
       <p className='red'>Steps:</p> 
        <ol>{stepsList}</ol>  
    </div>
  </div>
}

export default Recipe;