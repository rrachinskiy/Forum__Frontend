export default (props) => {
    return (
        <>
            <style jsx>{`
                footer {
                    font-family: 'Roboto', sans-serif;
                    margin-top: 9px;
                    border: 1px solid #090A0A;
                    border-radius: 3px;
                    height: 60px;
                    background-color: #212226;
                }

                @media (max-width: 992px) {
                    footer {
                    }
                }

                footer p {
                    display: block;
                    text-align: right;
                    margin-right: 30px;
                    margin-top: 15px;
                }

                footer p span {
                    display: inline-block;
                    color: #F2F2F2;
                    padding-bottom: 3px;
                }

                footer p a {
                    text-decoration: none;
                    color: #AAAAAA;
                    font-size: 0.85rem;
                }

                footer p a:hover {
                    text-decoration: underline;
                }
            `}</style>
            <footer>
                <div className="footer__container">
                    <p>
                        <span>IT-Forum</span><br />
                        <a href="https://t.me/RRostislav" target="_blank">Powered by Rostyslav Rachynskiy</a>
                    </p>
                </div>
            </footer>
        </>
    )
}