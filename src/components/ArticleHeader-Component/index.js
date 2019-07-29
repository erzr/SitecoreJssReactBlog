import React from 'react';
import { Text, DateField, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const ArticleHeaderComponent = ({ sitecoreContext }) => {

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <React.Fragment>
      <Text field={sitecoreContext.route.fields.title} tag="h2" className="blog-post-title" />
      <p class="blog-post-meta">
        <DateField field={sitecoreContext.route.fields.date} 
          render={(date) => date.toLocaleDateString('en-US', dateOptions)} tag="strong" />
        {' by '}
        <Text field={sitecoreContext.route.fields.author.fields.first_name} tag="strong" />
        <hr />
      </p>
    </React.Fragment>
  );

};

export default withSitecoreContext()(ArticleHeaderComponent);
