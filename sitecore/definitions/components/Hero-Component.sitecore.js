// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addComponent({
    name: 'Hero-Component',
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText, displayName: 'Title' },
      { name: 'description', type: CommonFieldTypes.SingleLineText, displayName: 'Description' },
      { name: 'link', type: CommonFieldTypes.GeneralLink, displayName: 'Link' },
    ],
  });
}
