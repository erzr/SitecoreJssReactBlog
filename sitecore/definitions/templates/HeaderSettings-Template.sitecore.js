import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addTemplate({
    name: 'HeaderSettings-Template',
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'navLinks', type: CommonFieldTypes.ContentList }
    ]
  });
}
