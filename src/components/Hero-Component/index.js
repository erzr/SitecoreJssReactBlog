import React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';

const Hero = ({ fields }) => (
  <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
    <div className="col-md-6 px-0">

      {
        fields.title && 
          <h1 className="display-4 font-italic"><Text field={fields.title} /></h1>
      }

      {
        fields.description && 
          <p className="lead my-3"><Text field={fields.description} /></p>
      }

      {
        fields.link && 
          <p className="lead mb-0">
            <Link field={fields.link} className="text-white font-weight-bold" />
          </p>
      }

    </div>
  </div>
);

export default Hero;
