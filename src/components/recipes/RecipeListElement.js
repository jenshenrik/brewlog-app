import Card from "../ui/Card";
import styles from './RecipeListElement.module.css';
import { Link } from 'react-router-dom';

const RecipeListElement = (props) => {
    return <Link to={"/recipes/" + props.recipe.id}><Card classes={styles["recipe-list-element"]}>
        <h3>{props.recipe.name}</h3>
        <span><i>{props.recipe.abv}% {props.recipe.style}</i></span>
    </Card></Link>;
};


export default RecipeListElement;