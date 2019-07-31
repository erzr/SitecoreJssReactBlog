// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';
import packageJson from '../../../package.json';

/**
 * Adds the RelatedArticles-Component component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'RelatedArticles-Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText, displayName: 'Title' },
      {
        name: 'articles',
        type: CommonFieldTypes.ContentList,
        displayName: 'Articles',
        source: `dataSource=/sitecore/content/${
          packageJson.config.appName
          }/home/Articles&IncludeTemplatesForSelection=Article-Route`
      }
    ]
  });
}
