import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

const FeaturedLinks = ({ fields }) => (
  <div className="p-4">
    <h4 className="font-italic">
      <Text field={fields.title} />
    </h4>
    <ol className="list-unstyled">
      {fields.links.map((listItem, index) => (
        <li key={index}>
          <Link field={listItem.fields.link} />
        </li>
      ))}
    </ol>
  </div>
);

export default FeaturedLinks;
