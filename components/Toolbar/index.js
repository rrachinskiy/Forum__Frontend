import styles from './toolbar.module.css';

const Toolbar = (props) => {
    return (
        <div className={styles.toolBar}>
            <div className={styles.login_buttons}>
                <a className={styles.login_link} href="#">
                    <span className={styles.login_link_text}>
                        Вже зареєстровані? Увійти
                    </span>
                </a>
                <a className={styles.register_link} href="#">
                    <span className={styles.login_link_text}>
                        Реєстрація
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Toolbar;