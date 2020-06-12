export default (props) => {
  return (
    <>
      <style jsx>{`
                @media (max-width: 992px) {
                    menu {
                        display: block !important;
                    }
                }

                menu {
                    display: none;
                    width: 100%;
                    min-height: 40px;
                    max-height: 50px;
                    height: 8vh;
                    background: #222222;
                }

                .open-menu__button {
                    background: url('/mobile-menu-icon.png');
                    background-size: cover;
                    border: 0;
                    outline: none;
                    width: 25px;
                    height: 31px;
                    position: relative;
                    top: 20%;
                    right: 8px;
                    float: right;
                    padding-bottom: 2px;
                }
            `}</style>
      <menu>
        <button type="button" className="open-menu__button"></button>
      </menu>
    </>
  );
}