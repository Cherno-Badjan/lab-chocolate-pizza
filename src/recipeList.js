import React from 'react';
import { ingredients } from './data.js';

const newIngredients = ingredients.map((ingredient) => {
    return <div><input type='checkbox'></input>{ingredient.amount} {ingredient.food}</div>
})
export default class RecipeList extends React.Component {
    render() {
        return (
            <div style={{
                backgroundImage: `url('../list-bg.png')`
            }}>
                <div>{newIngredients}</div>
            </div >
        )
    }
}