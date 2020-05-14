export default (props) => {
    return (
        <>
            <style jsx>{`
                .sections {
                    background: #E3E8EA;
                    border: 1px solid #ececec;
                    border-radius: 5px;
                    margin-top: 11px;
                }

                @media (max-width: 992px) {
                    .sections {
                        margin-left: 9px;
                    }
                }

                .sections h2 {
                    font-family: 'Georgia';
                    font-weight: bold;
                    font-size: 1.05rem;
                    letter-spacing: 0.001em;
                    margin-left: 18px;
                    margin-top: 10px;
                    padding-bottom: 10px;
                }

                .sections-content {
                    background: #FAFAFA;
                    margin-left: 6px;
                    margin-right: 6px;
                    margin-bottom: 6px;
                    border: 1px solid #CED2D3;
                }
            `}</style>
            <div className="sections">
                <h2>Розділи</h2>
                <div className="sections-content">
                    {props.children}
                </div>
            </div>
        </>
    )
}