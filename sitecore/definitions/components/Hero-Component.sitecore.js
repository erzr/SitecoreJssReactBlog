// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addComponent({
    name: 'Hero-Component',
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.SingleLineText },
      { name: 'link', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
