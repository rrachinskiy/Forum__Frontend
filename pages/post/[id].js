import { withRouter } from 'next/router';
import fetch from 'node-fetch';
import { useState, useEffect } from 'react';

import { MessageBox, MessageEditor, Title } from '../../components';

const Post = ({ post, answers }) => {
  const Post = post?.post;
  const postDate = new Date(Post?.last_update);
  const Answers = answers?.answers;

  return (
    <>
      <Title title={Post.title} />
      <MessageBox
        id={Post.id}
        user={{
          nickname: Post?.creator.user_name,
          signature: Post?.creator.signature,
          image: Post?.creator.profile_image,
          role: Post?.creator.role
        }}
        message={{
          text: Post?.text,
          date: `${postDate.getDate()}/${postDate.getMonth() + 1}/${postDate.getFullYear()} о ${postDate.getHours()}:${postDate.getMinutes()}:${postDate.getSeconds()}`
        }}
      />

      {
        Answers?.map(answer => {
          return (
            <MessageBox
              key={answer.id}
              user={{
                nickname: answer.creator.user_name,
                signature: answer.creator.signature,
                image: answer.creator.profile_image,
                role: answer.creator.role
              }}
              message={{
                text: answer.text,
                date: `${new Date(answer.last_update).getDate()}/${new Date(answer.last_update).getMonth() + 1}/${new Date(answer.last_update).getFullYear()} о ${new Date(answer.last_update).getHours()}:${new Date(answer.last_update).getMinutes()}:${new Date(answer.last_update).getSeconds()}`
              }}
            />
          );
        })
      }
      <MessageEditor postId={Post?.id} />
    </>
  );
}

export async function getServerSideProps({ query }) {
  try {
    let resPost = await fetch(`${process.env.api}/post/${query.id}`);;
    let post = await resPost.json();

    let resAnswers = await fetch(`${process.env.api}/post/answer/${query.id}/10/2`);
    let answers = await resAnswers.json();
    return { props: { post, answers } };
  } catch (err) {
    return { props: {} }
  }
}

export default withRouter(Post);