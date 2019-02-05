// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addTemplate({
    name: 'ListingPage-Template',
    fields: [{ name: 'title', type: CommonFieldTypes.SingleLineText }],
  });
}
