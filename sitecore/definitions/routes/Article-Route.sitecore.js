// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

export default function(manifest) {
  manifest.addRouteType({
    name: 'Article-Route',
    icon: SitecoreIcon.ShapeSquare,
    fields: [
        { name: 'title', type: CommonFieldTypes.SingleLineText, displayName: 'Title' },
        { name: 'summary', type: CommonFieldTypes.MultiLineText, displayName: 'Summary' },
        { name: 'date', type: CommonFieldTypes.Date, displayName: 'Date' },
        { name: 'author', type: CommonFieldTypes.ItemLink, displayName: 'Author' },
        { name: 'tags', type: CommonFieldTypes.ContentList, displayName: 'Tags',
        source: `dataSource=/sitecore/content/${
          packageJson.config.appName
        }/home/Tags&IncludeTemplatesForSelection=ListingPage-Route` }
    ],
  });
}
