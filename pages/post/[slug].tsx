import React from 'react'
import urlBuilder from '@sanity/image-url'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../../typings'

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  console.log(post);

  return (
    <div>[slug]</div>
  )
}

export default Post


export const getStaticPaths = async () => {
    cost query = `*[_type == "post"][0] {
      _id,
      title,
     description,
      mainImage,
      slug,
      body
    }`

      const post = await sanityClient.fetch(query);

      const paths = post.map(post => ({
          params: {
              slug: post.slug.current
          },
      }));

      return {
          paths,
          fallback: "blocking",
      };
};


export const getStaticProps: GetStaticProps = async ({params}) => {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
       description,
        mainImage,
        slug,
        body
      }`

      const post = await sanityClient.fetch(query, {
          slug: params?.slug,
      });

      if (!post) {
        return {
          notFound: true
        }
      };

      return {
        props: {
          post,
        }
      };
};