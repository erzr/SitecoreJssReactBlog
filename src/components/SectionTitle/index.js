import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const SectionTitle = ({ fields }) => (
  <h3 className="pb-4 mb-4 font-italic border-bottom">
    <Text field={fields.title} />
  </h3>
);

export default SectionTitle;
