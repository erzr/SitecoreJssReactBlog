// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addRouteType({
    name: 'ListingPage-Route',
    fields: [{ name: 'title', type: CommonFieldTypes.SingleLineText, displayName: 'Title' }]
  });
}
