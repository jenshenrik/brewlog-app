import { Navigate, Route, Routes } from 'react-router-dom';
import MainHeader from './components/ui/MainHeader';

import RecipeDetail from './pages/RecipeDetail';
import Recipes from './pages/Recipes';


function App() {



  return (
    <>
      <header><MainHeader /></header>
      <main>
        <div>
            <Routes>
              <Route path="/" element={<Navigate to='/recipes' />} />
              <Route path="/recipes" element={<Recipes />} exact />
              <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
            </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
