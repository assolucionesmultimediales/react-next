import NavMenu from "./NavMenu";

const NavBar = (props) => {
const {title} = props

    return (
        <header>
            <h1>{title}</h1>
            <nav>
            <NavMenu/>
            </nav>
        </header>
    );
};

export default NavBar