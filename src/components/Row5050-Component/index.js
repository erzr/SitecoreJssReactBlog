import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const Row5050 = ({rendering}) => (
  <div className="row mb-2">
    <div className="col-md-6">
      <Placeholder name="jss-row-5050-left" rendering={rendering} />
    </div>
    <div className="col-md-6">
      <Placeholder name="jss-row-5050-right" rendering={rendering} />
    </div>
  </div>
);

export default Row5050;
