import Card from "../ui/Card";

export interface RecipeListElementModel {
    id: string;
    name: string;
    style?: string;
    abv?: number;
}

interface RecipeListElementProps {
    recipe: RecipeListElementModel
}

const RecipeListElement = (props: RecipeListElementProps) => {
    return <Card>
        <h3>{props.recipe.name}</h3>
        <p>{props.recipe.abv}% {props.recipe.style}</p>
    </Card>;
};


export default RecipeListElement;