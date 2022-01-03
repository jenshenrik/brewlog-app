import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const params = useParams();

    const recipeId = params['recipeId'];

    return <section>
        <h3>Recipe detail {recipeId}</h3>
    </section>
}

export default RecipeDetail;