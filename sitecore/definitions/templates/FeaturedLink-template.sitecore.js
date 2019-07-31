// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addTemplate({
    name: 'FeaturedLink-Template',
    fields: [{ name: 'link', type: CommonFieldTypes.GeneralLink, displayName: 'Link' }]
  });
}
