import './RecipeListElement.module.css';
import Card from "../ui/Card";

const RecipeListElement = (props) => {
    return <Card>
        <h3>{props.recipe.name}</h3>
        <span><i>{props.recipe.abv}% {props.recipe.style}</i></span>
    </Card>;
};


export default RecipeListElement;