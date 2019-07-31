import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addTemplate({
    name: 'HeaderSettings-Template',
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText, displayName: 'Title' },
      { name: 'navLinks', type: CommonFieldTypes.ContentList, displayName: 'Navigation Links' }
    ]
  });
}
