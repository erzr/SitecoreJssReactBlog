import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';

const PostListingItem = ({ post }) => (
    <div className="blog-post">
        <Link to={post.item.url}>
            <h2 className="blog-post-title">
                <Text field={post.item.title} editable={false} />
            </h2>
        </Link>
        <hr />
        <RichText field={post.item.summary} editable={false} />
    </div>
);

export default PostListingItem;