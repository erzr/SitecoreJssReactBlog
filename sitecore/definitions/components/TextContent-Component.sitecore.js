// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the TextContent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'TextContent-Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'content', type: CommonFieldTypes.RichText, displayName: 'Content' },
    ]
  });
}
