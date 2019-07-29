import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const BlockQuoteComponent = ({ fields }) => (
  <blockquote class="blockquote text-right">
    <Text field={fields.quote} tag="p" class="mb-0" />
    <Text field={fields.citation} tag="footer" class="blockquote-footer" />
  </blockquote>
);

export default BlockQuoteComponent;
