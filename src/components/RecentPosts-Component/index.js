import React from 'react';
import gql from "graphql-tag";
import PostListing from '../PostListing';
import GraphQLData from '../../lib/GraphQLData';

const GET_RECENT_POSTS_QUERY = gql`
  query GetRecentPosts($howMany: Int) 
  {
    search(fieldsEqual:[{
      name:"_templatename"
      value:"Article-Route"
    },
    {
      name:"_fullpath"
      value:"/sitecore/content/blog*"
    }]
    first:$howMany) {
      results {
        items {
          item {
            url
            ... on ArticleRoute {
              title {
                value
              }
              summary {
                value
              }
            }
          }
        }
      }
    }
  }
`;

const RecentPosts = ({ postQuery }) =>
  <React.Fragment>
    {postQuery.search && <PostListing posts={postQuery.search.results.items} />}
  </React.Fragment>
  ;

export default GraphQLData(GET_RECENT_POSTS_QUERY, { name: 'postQuery', options: { variables: { howMany: 5 } } })(RecentPosts);
