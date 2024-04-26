import NavMenu from "./NavMenu";
import styles from "./NavBar.module.css"

const NavBar = (props) => {
const {title} = props

    return (
        <header className={styles.container}>
            <h1>{title}</h1>
            <nav className={styles.menu}>
            <NavMenu/>
            </nav>
        </header>
    );
};

export default NavBar