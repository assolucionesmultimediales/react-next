import styles from './Footer.module.css'

const Footer = () => {

    return(
        <div className={styles.containerfooter}>
            <adress>
                <a>
                    www.casateconsatoru.com
                </a>
            </adress>

            <nav className={styles.menufooter}>
                <ul>
                    <li><a>join us</a></li>
                    <li><a>about</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Footer