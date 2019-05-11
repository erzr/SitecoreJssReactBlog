import React from 'react';
import PostListingItem from '../PostListingItem';

const PostListing = ({posts}) => (
  <React.Fragment>
      {
        posts.map((post, index) => (
          <PostListingItem post={post} key={index} />
        ))
      }
  </React.Fragment>
);

export default PostListing;