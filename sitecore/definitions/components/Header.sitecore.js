import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addComponent({
    name: 'Header',
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'navLinks', type: CommonFieldTypes.ContentList }
    ]
  });
}
