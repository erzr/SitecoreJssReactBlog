import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const Callout = ({fields}) => (
  <div className="p-4 mb-3 bg-light rounded">
    <h4 className="font-italic">
      <Text field={fields.title} />
    </h4>
    <RichText field={fields.body} className="mb-0" />
  </div>
);

export default Callout;
