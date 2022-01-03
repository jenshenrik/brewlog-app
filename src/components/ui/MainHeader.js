import { NavLink } from "react-router-dom";

const MainHeader = () => {
    return (
        <header>
            <h1>Brewlog</h1>
            <nav>
                <ul>
                    <li><NavLink activeClassName="active" to='/recipes'>Recipes</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;