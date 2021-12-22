import './Card.css';

interface CardProps {
    classes?: string,
    children?: React.ReactNode
}
const Card: React.FC<CardProps> = (props: CardProps) => {
    const classes = 'card ' + props.classes;
    return <div className={classes}>{props.children}</div>;
}

export default Card;