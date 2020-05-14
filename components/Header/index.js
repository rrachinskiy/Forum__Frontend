export default (props) => {
    return (
        <>
            <style jsx>{`
                .header {
                    font-family: 'Roboto', sans-serif;
                    height: 60px;
                    background: linear-gradient(rgba(30, 30, 30, 0.8) 0%, rgba(30, 30, 30, 0.9) 100%);
                    border: 1px solid #090A0A;
                    border-radius: 5px;
                    margin-top: 8px;
                    overflow: hidden;
                }
                
                @media (max-width: 992px) {
                    .header {
                        margin-top: 0px;
                        border-radius: 0px;
                        background: linear-gradient(#3D3F40, #2F3031);;
                        display: flex;
                        justify-content: center;
                    }
                
                    .logo {
                        width: 100%;
                        text-align: center;
                    }
                
                    .logo a {
                        margin-left: 0px !important;
                    }
                }
                
                .logo {
                    height: 100%;
                    width: 300px;
                    float: left;
                    overflow: hidden;
                }
                
                .logo a {
                    display: inline-block;
                    color: #f1f1f1;
                    font-size: 1.2rem;
                    text-decoration: none;
                    width: 100px;
                    height: 100%;
                    text-align: center;
                    padding-top: 21px;
                    margin-left: 48px;
                }
                
                .mainNavigation {
                    display: block;
                    float: left;
                    width: 80%;
                    height: 100%;
                    overflow: hidden;
                }
                
                .mainNavigation__content {
                    height: 100%;
                }
                
                .mainNavigation_li {
                    display: block;
                    width: 100px;
                    text-align: center;
                    float: right;
                    height: 100%;
                }
            `}</style>
            <header className="header">
                <div className="logo">
                    <a href="/"><span>IT-Forum</span></a>
                </div>
                {/* <nav className="mainNavigation">
                    <ul className={styles.mainNavigation__content}>
                        <li className={styles.mainNavigation_li}>
                            <a href="#">Пункт меню</a>
                        </li>
                        <li className={styles.mainNavigation_li}>
                            <a href="#">Пункт меню</a>
                        </li>
                        <li className={styles.mainNavigation_li}>
                            <a href="#">Пункт меню</a>
                        </li>
                        <li className={styles.mainNavigation_li}>
                            <a href="#">Пункт меню</a>
                        </li>
                    </ul>
                </nav> */}
            </header>
        </>
    )
}