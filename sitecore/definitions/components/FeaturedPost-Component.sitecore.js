// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addComponent({
    name: 'FeaturedPost-Component',
    fields: [
      { name: 'eyebrow', type: CommonFieldTypes.SingleLineText, displayName: 'Eyebrow' },
      { name: 'title', type: CommonFieldTypes.GeneralLink, displayName: 'Title' },
      { name: 'date', type: CommonFieldTypes.Date, displayName: 'Date' },
      { name: 'description', type: CommonFieldTypes.SingleLineText, displayName: 'Description' },
      { name: 'readMore', type: CommonFieldTypes.GeneralLink, displayName: 'Read More Link' },
      { name: 'image', type: CommonFieldTypes.Image, displayName: 'Image' }
    ]
  });
}
