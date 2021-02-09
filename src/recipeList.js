import React from 'react';
import recipeImg from './list-bg.png';
import { ingredients } from './data.js';

const newIngredients = ingredients.map((ingredient) => {
    return <ul><li>{ingredient.amount} {ingredient.food}</li></ul>
})
export default class RecipeList extends React.Component {
    render() {
        return (
            <form>
                <img alt='list' src={recipeImg} />
                <ul>{newIngredients}</ul>
            </form>
        )
    }
}