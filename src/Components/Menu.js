
import { Link } from "react-router-dom"

const Menu = () => {

    return (
        <nav className="container">
            <a href="/">HOME</a>    <a href="/Contador">CONTADOR</a>  <a href="/Login">LOGIN</a>

            {/* <link to="/">HOME</link>
            <link to="/contador">CONTADOR</link> */}

        </nav>
    )

}

export default Menu;