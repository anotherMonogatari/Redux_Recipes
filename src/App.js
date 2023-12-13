import React, {useMemo, useEffect} from 'react';
import './main.scss'
import { connect } from 'react-redux';
import Recipe from './components/Recipe'
import debounce from 'lodash.debounce';

function App( {recipe, filterList, resetList} ) {
  const recipeList = recipe.map(recipe => {
    return <Recipe data={recipe}/>
  }) 

  const debouncedFilterList = useMemo(() => debounce(filterList, 300), [])

  useEffect(() => {
    return () => {
      debouncedFilterList.cancel()
    }
  }, [])

  return (
    <div>
      <div className='search'>
       <input type='text' name='filter' placeholder='Search here' onChange={debouncedFilterList}/>
       <button onClick={resetList}>Reset</button>
      </div>
      <div className='recipes-wrapper'>{recipeList}</div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   filterList: () => dispatch({type: 'FILTER',payload: document.querySelector('input').value.toLowerCase()}),
   resetList: () => {
    document.querySelector('input').value = '';
     return dispatch({type:'RESET'})}
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
