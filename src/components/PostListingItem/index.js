import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const PostListingItem = ({ post }) => (
    <div className="blog-post">
        <h2 className="blog-post-title">
            <Text field={post.item.title} editable={false} />
        </h2>
        <hr />
        <RichText field={post.item.body} editable={false} />
    </div>
);

export default PostListingItem;