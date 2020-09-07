import React, {useState, useEffect} from 'react'
import RecipeItem from './RecipeItem'


function Recipes(props) {
    const [recipes, setRecipes] = useState([]);
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    useEffect(() => {
        setRecipes(props.recipes.map(re => {
            return {label: re.recipe.label, ingredientLines: re.recipe.ingredientLines, image: re.recipe.image};
        }))            
    }, [])


    useEffect(() => {
        setSearchedRecipes(props.searchedRecipes.map(re => {
            return {label: re.recipe.label, ingredientLines: re.recipe.ingredientLines, image: re.recipe.image};
        }))
    }, [props.searchedRecipes])
    
    return (
        <>  
            <h2 className="text-3xl mb-5">Recipes you may like:</h2>
            <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
                {searchedRecipes.length > 0 ? searchedRecipes.map(recipe => <RecipeItem recipe={recipe}/>) : recipes.map(recipe => <RecipeItem recipe={recipe}/>)}
            </div>
        </>

    )
}

export default Recipes
