export default ({ title }) => {
  return (
    <>
      <style jsx>{`
                .title-block {
                    margin-top: 9px;
                    background-color: #EAEAEA;
                    border-radius: 5px;
                    height: 70px;
                }

                .title-block h1 {
                    color: #474747;
                    font-size: 2rem;
                    letter-spacing: 2px;
                    display: inline-block;
                    margin-left: 35px;
                    margin-top: 20px;
                }
            `}</style>
      <div className="title-block">
        <h1>{title}</h1>
      </div>
    </>
  );
}