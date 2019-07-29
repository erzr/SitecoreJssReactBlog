// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addRouteType({
    name: 'Article-Route',
    icon: SitecoreIcon.ShapeSquare,
    fields: [
        { name: 'title', type: CommonFieldTypes.SingleLineText },
        { name: 'summary', type: CommonFieldTypes.MultiLineText },
        { name: 'date', type: CommonFieldTypes.Date },
        { name: 'author', type: CommonFieldTypes.ItemLink }
    ],
  });
}
