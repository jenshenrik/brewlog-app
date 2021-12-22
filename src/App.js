import { useEffect, useState } from 'react';

import RecipeListElement from './components/recipes/RecipeListElement';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = () => {
    setIsLoading(true);
    fetch('https://brewlog-api.azurewebsites.net/recipes').then(response => {
      console.log("response", response);
      return response.json();
    }).then(data => {
      console.log("data", data);
      setRecipes(data);
      setIsLoading(false);
    }).catch(error => {
      console.log("error", error);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  return (
    <div>
      <header>
        
      </header>
      <body>
        {!isLoading && recipes.length > 0 && recipes.map(r => <RecipeListElement recipe={r} />)}
        {!isLoading && recipes.length === 0 && <p>No recipes found.</p>}
        {isLoading && <p>Loading...</p>}
      </body>
    </div>
  );
}

export default App;
