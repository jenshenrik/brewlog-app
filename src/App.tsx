import { useEffect, useState } from 'react';

interface Recipe {
  name: string;
}

function App() {

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = () => {
    fetch('https://brewlog-api.azurewebsites.net/recipes').then(response => {
      setIsLoading(true);
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
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
        <ul>
          { recipes.map(r => <li>{r.name}</li>)}
        </ul>}
      </body>
    </div>
  );
}

export default App;
