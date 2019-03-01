// eslint-disable-next-line no-unused-vars
import { Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adding placeholders is optional but allows setting a user-friendly display name. Placeholder Settings
 * items will be created for any placeholders explicitly added, or discovered in your routes and component definitions.
 * Invoked by convention (*.sitecore.js) when `jss manifest` is run.
 * @param {Manifest} manifest
 */
export default function addPlaceholdersToManifest(manifest) {
  manifest.addPlaceholder(
    { name: 'jss-main' },
    { name: 'jss-row-5050-left' },
    { name: 'jss-row-5050-right' },
    { name: 'jss-row-7525-left' },
    { name: 'jss-row-7525-right' }
  );
}
