import React from 'react';
import { Placeholder, VisitorIdentification } from '@sitecore-jss/sitecore-jss-react';
import Helmet from 'react-helmet';

// Using bootstrap is completely optional. It's used here to provide a clean layout for samples,
// without needing extra CSS in the sample app. Remove it in package.json as well if it's removed here.
import 'bootstrap/dist/css/bootstrap.css';
import './assets/app.css';

const Layout = ({ route }) => (
  <React.Fragment>
    <VisitorIdentification />
    <div className="container">
      <Placeholder name="jss-main" rendering={route} />
    </div>
  </React.Fragment>
);

export default Layout;
