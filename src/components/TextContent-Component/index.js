import React from 'react';
import { RichText } from '@sitecore-jss/sitecore-jss-react';

const TextContent = ({fields}) => (
  <div>
    <RichText field={fields.content} />
  </div>
);

export default TextContent;
