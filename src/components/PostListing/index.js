import React from 'react';
import PostListingItem from '../PostListingItem';

const PostListing = ({posts}) => (
  <div>
      {
        posts.map(post => (
          <PostListingItem post={post} />
        ))
      }
  </div>
);

export default PostListing;