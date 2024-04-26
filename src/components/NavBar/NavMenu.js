import styles from "./NavBar.module.css"
const NavMenu = () => {
    return (
        <ul className={styles.container}>
        <li className={styles.container}><a>home</a></li>
        <li className={styles.container}><a>about</a></li>
        <li className={styles.container}><a>contact</a></li>
    </ul>
    )
}

export default NavMenu