// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addComponent({
    name: 'FeaturedPost',
    fields: [
      { name: 'eyebrow', type: CommonFieldTypes.SingleLineText },
      { name: 'title', type: CommonFieldTypes.GeneralLink },
      { name: 'date', type: CommonFieldTypes.Date },
      { name: 'description', type: CommonFieldTypes.SingleLineText },
      { name: 'readMore', type: CommonFieldTypes.GeneralLink },
      { name: 'image', type: CommonFieldTypes.Image },
    ]
  });
}
