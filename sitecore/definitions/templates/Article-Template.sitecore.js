// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addTemplate({
    name: 'Article-Template',
    fields: [
        { name: 'title', type: CommonFieldTypes.SingleLineText },
        { name: 'body', type: CommonFieldTypes.RichText }
    ],
  });
}
