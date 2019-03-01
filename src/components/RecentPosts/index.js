import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Text } from '@sitecore-jss/sitecore-jss-react';
import PostListing from '../PostListing';

const GET_RECENT_POSTS = gql`
  {
    search(fieldsEqual:[{
      name:"_templatename"
      value:"Article-Template"
    },
    {
      name:"_fullpath"
      value:"/sitecore/content/blog*"
    }]) {
      results {
        items {
          item {
            ... on ArticleTemplate {
              title {
                value
              }
              body {
                value
              }
            }
          }
        }
      }
    }
  }
`;

const RecentPosts = (props) => (
  <Query query={GET_RECENT_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <PostListing posts={data.search.results.items} />
      );
    }}
  </Query>
);

export default RecentPosts;
