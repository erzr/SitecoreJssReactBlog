// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addComponent({
    name: 'Callout-Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText, displayName: 'Title' },
      { name: 'body', type: CommonFieldTypes.RichText, displayName: 'Body' }
    ]
  });
}
