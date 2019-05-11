import React from 'react';
import { Link } from 'react-router-dom'
import gql from "graphql-tag";
import GraphQLData from '../../lib/GraphQLData';

const GET_HEADER_SETTINGS_QUERY = gql`
query GetHeaderSettings($settingsId:String)
{
  item(path:$settingsId) {
    ... on HeaderTemplate {
    	title {
        rendered
      }
      navLinks {
        targetItems {
          url
          ... on ListingPageRoute {
            title {
              rendered
            }
          }
        }
      }
    }
  }
}
`;

let HeaderTop = ({ title }) => (
    <div className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-12 text-center">
                <a className="blog-header-logo text-dark" href="/">{title}</a>
            </div>
        </div>
    </div>
);

let HeaderNavigation = ({ navLinks }) => (
    <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
            {navLinks.map((listItem, index) => (
                <Link to={listItem.url} className="p-2 text-muted" key={index}>{listItem.title.rendered}</Link>
            ))}
        </nav>
    </div>
);

let Header = ({ headerQuery }) => (
    <header>
        {headerQuery.item && headerQuery.item.title && <HeaderTop title={headerQuery.item.title.rendered} />}
        {headerQuery.item && headerQuery.item.navLinks && <HeaderNavigation navLinks={headerQuery.item.navLinks.targetItems} />}
    </header>
);

export default GraphQLData(GET_HEADER_SETTINGS_QUERY, { name: 'headerQuery', options: { 
    variables: { settingsId: "{2EF063EF-3F30-53B6-B425-90025FA5691A}" } } })(Header);