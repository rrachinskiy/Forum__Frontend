import Link from 'next/link';

export default (props) => {
  return (
    <>
      <style jsx>{`
            .breadcrumb__block {
                margin-top: 11px;
                border: 1px solid #ececec;
                border-radius: 5px;
                background: linear-gradient(#E7ECF0 0%, #EAEFF3 100%);
                height: 38px;
                overflow: hidden;
            }

            @media (max-width: 992px) {
                .breadcrumb__block {
                    display: none;
                }
            }
            
            .breadcrumb {
                width: 100%;
                height: 100%;
                margin-top: 10px;
                margin-left: 15px;
            }

            .breadcrumb-item {
                display: inline-block;
                padding-left: .5rem;
                line-height: 15px;
            }

            .breadcrumb-item:after {
                display: inline-block;
                padding-left: .5rem;
                position: relative;
                top: 2px;
                font-size: 1.15rem;
                color: #6c757d;
                content: "/";
            }

            .breadcrumb-item a {
                color: #0056b3;
                text-decoration: none;
                font-size: 1.025rem;
            }

            .breadcrumb-item a:hover {
                text-decoration: underline;
            }

            .active {
                color: #6c757d;
            }

            .active:after {
                content: '';
                padding-left: 0;
            }
            `}</style>
      <div className="breadcrumb__block">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a><span>Головна</span></a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <a href="/"><span>Розділ</span></a>
          </li>
          <li className="breadcrumb-item active">
            <span>Тема</span>
          </li>
        </ol>
      </div>
    </>
  )
}