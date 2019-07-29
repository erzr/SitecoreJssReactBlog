import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import styled from 'styled-components'
import GraphQLData from '../../lib/GraphQLData';
import gql from 'graphql-tag';

const ArticleQuery = gql`
query ConnectedQuery($datasource: String!) {
  data:datasource(value: $datasource) {
    id
    name
    ... on RelatedArticlesComponent {
      articles {
      	targetItems {
          ... on ArticleRoute {
            title {
              jss
            }
            url
          }
        }
      }
    }
  }
}
`;
const RelatedArticlesDiv = styled.div`
  padding-top: 15px;
`;

const RelatedArticlesComponent = ({fields, articleQuery}) => {

  const queryData = articleQuery.data || {};

  const {articles} = queryData;

  return (
    <RelatedArticlesDiv>
      <Text field={fields.title} tag="h4" />
      <hr />
      <ul>
      {articles &&
          articles.targetItems.map((listItem, index) => (
            <li key={`related-article-${index}`}>
              <a href={listItem.url}>
                <Text field={listItem.title.jss} />
              </a>
            </li>
          ))}
      </ul>
    </RelatedArticlesDiv>
  )
};

export default GraphQLData(ArticleQuery, { name: 'articleQuery' })(RelatedArticlesComponent);