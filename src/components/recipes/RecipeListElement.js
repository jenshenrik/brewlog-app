import Card from "../ui/Card";
import styles from './RecipeListElement.module.css';

const RecipeListElement = (props) => {
    return <Card classes={styles["recipe-list-element"]}>
        <h3>{props.recipe.name}</h3>
        <span><i>{props.recipe.abv}% {props.recipe.style}</i></span>
    </Card>;
};


export default RecipeListElement;