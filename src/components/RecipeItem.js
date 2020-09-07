import React from 'react'
import './RecipeItem.css'
function RecipeItem({recipe}) {

    
    return (
        <div className="r-card shadow bg-gray-100 w-5" >
            <div id="img" className="w-full">
                <img src={recipe.image} className="h-full w-full" alt={recipe.label} />
            </div>
            <div className="r-title mt-4 mb-3">
                <h3 className="text-xl">{recipe.label}</h3>
            </div>
            <div className="r-description">
                <h5 className="text-red-900 mb-2">Ingredients:</h5>
                { recipe.ingredientLines.map(ing => <p>{'- ' + ing}</p>) }
            </div>
        </div>
    )
}

export default RecipeItem
