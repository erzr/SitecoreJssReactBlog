// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the YouTubeEmbed-Component component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addComponent({
    name: 'YouTubeEmbed-Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'video_id', type: CommonFieldTypes.SingleLineText, displayName: 'Video Id' },
      { name: 'video_height', type: CommonFieldTypes.SingleLineText, displayName: 'Video Height' },
      { name: 'video_width', type: CommonFieldTypes.SingleLineText, displayName: 'Video Width' },
      { name: 'video_controls', type: CommonFieldTypes.Checkbox, displayName: 'Show Video Controls' }
    ]
  });
}
