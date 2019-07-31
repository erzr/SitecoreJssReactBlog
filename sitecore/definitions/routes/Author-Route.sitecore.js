// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addRouteType({
    name: 'Author-Route',
    icon: SitecoreIcon.Person,
    fields: [
        { name: 'first_name', type: CommonFieldTypes.SingleLineText, displayName: 'First Name' },
        { name: 'last_name', type: CommonFieldTypes.SingleLineText, displayName: 'Last Name' }
    ],
  });
}
