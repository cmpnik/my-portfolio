import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={`${styles.header} center`}>
            <h3>
                <a>My Portfolio</a>
            </h3>
            <nav className={`center ${styles.nav}`}>
                <ul style={{ display: 'flex' }} className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <a className='link link--nav'>Projects</a>
                    </li>
                    <li className={styles.nav__item}>
                        <a className='link link--nav'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
