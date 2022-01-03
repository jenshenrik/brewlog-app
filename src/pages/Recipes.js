import { useEffect, useState } from 'react';
import RecipeListElement from '../components/recipes/RecipeListElement';
  

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchRecipesHandler = () => {
        setIsLoading(true);
        fetch('https://brewlog-api.azurewebsites.net/recipes').then(response => {
            return response.json();
        }).then(data => {
            setRecipes(data);
            setIsLoading(false);
        }).catch(error => {
            console.log("error", error);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        fetchRecipesHandler();
    }, []);

    return <>
        <h1>Recipes</h1>
        {!isLoading && recipes.length > 0 && recipes.map(r => <RecipeListElement recipe={r} key={r.id} />)}
        {!isLoading && recipes.length === 0 && <p>No recipes found.</p>}
        {isLoading && <p>Loading...</p>}
    </>
}

export default Recipes;