import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Title from '../../components/Title';
import MainLayout from '../../components/MainLayout';
import SectionsBox from '../../components/Sectionsbox';
import fetch from 'node-fetch';

const PostList = ({ data }) => {
  // const [posts, setPosts] = useState([]);
  // const [section, setSection] = useState({});
  // const { id } = props.router.query;
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(`${process.env.api}/post/${id}/10/1`);
  //     res
  //       .json()
  //       .then(res => { setPosts(res.posts); setSection(res.section[0]); console.log(res) })
  //       .catch(err => console.log(err));
  //   }
  //   fetchData();

  // }, []);
  return (
    <MainLayout path={'router.pathname'}>
      <Title title={data.success ? data.section.title : "Some error occured"} />
      <style jsx>{`
        section {
          width: 100%;
          float: left;
          margin-bottom: 9px;
        }

        @media (max-width: 992px) {
          section {
            float: none;
            width: 98%;
          }
        }

        .section {
          display: flex;
        }

        .section:hover {
          background-color: rgba(0,0,0, 0.1);
        }

        .section__icon {
          width: 30px;
          margin-left: 15px;
          margin-top: 5px;
        }

        .section__icon img {
          width: 24px;
          padding-bottom: 5px;
        }

        .section__info {
          width: 90%;
          height: 100%;
          margin-left: 7px;
          margin-top: 8px;
        }

        .section-link {
          color: #313131;
          text-decoration: none;
          display: block;
          font-weight: bold;
        }

        .sections-link span {
          display: inline-block;
          margin-top: 10px;
        }
      `}</style>
      <SectionsBox boxTitle="Список тем">
        {
          data.success ?
            data.posts.map(post => {
              return (
                <Link key={post.id} href='/post/[id]' as={`/post/${post.id}`}>
                  <a key={post.id} className="section-link">
                    <div className="section">
                      <div className="section__icon">
                        <img src="/section-icon.png" alt="Іконка для розділу" />
                      </div>
                      <div className="section__info">
                        <span>{post.title}</span>
                      </div>
                    </div>
                  </a>
                </Link>
              )
            }) : "Записи відсутні"
        }
      </SectionsBox>
    </MainLayout>
  )
}

export async function getServerSideProps({ query }) {
  let res, data;
  try {
    res = await fetch(`${process.env.api}/post/${query.id}/10/1`);
    data = await res.json();
  } catch (err) {
    //return { props: { data: false } }
  }
  return { props: { data } }
}

// PostList.getInitialProps = async ({ query }) => {
//   const { id } = query;
//   return { id };
// };


export default withRouter(PostList);