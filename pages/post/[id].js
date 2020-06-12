import { withRouter } from 'next/router';
import fetch from 'node-fetch';

import { MainLayout, MessageBox } from '../../components';

const Post = ({ post }) => {
  const Post = post.post;
  const postDate = new Date(Post.last_update);
  return (
    <MainLayout path={'router.pathname'}>
      <MessageBox
        user={{
          nickname: Post.creator.user_name,
          signature: Post.creator.signature,
          image: Post.creator.profile_image
        }}
        message={{
          text: Post.text,
          date: `${postDate.getDate()}/${postDate.getMonth() + 1}/${postDate.getFullYear()} о ${postDate.getHours()}:${postDate.getMinutes()}:${postDate.getSeconds()}`
        }}
      />
    </MainLayout>
  );
}

export async function getServerSideProps({ query }) {
  let res = null, post = null;
  try {
    res = await fetch(`${process.env.api}/post/${query.id}`);
    post = await res.json();
  } catch (err) {

  }
  return { props: { post } };
}

export default withRouter(Post);