import React from 'react';
import { getFieldValue, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';

const YouTubeEmbedComponent = ({fields, sitecoreContext}) => {

  const video_id = getFieldValue(fields, 'video_id'),
        video_height = getFieldValue(fields, 'video_height') || '315',
        video_width = getFieldValue(fields, 'video_width') || '100%',
        video_controls = getFieldValue(fields, 'video_controls') || '1',
        src = `https://www.youtube.com/embed/${video_id}?controls=${video_controls}`,
        thumbnail = `https://img.youtube.com/vi/${video_id}/0.jpg`,
        isEditing = sitecoreContext && sitecoreContext.pageEditing;

  return (
    <React.Fragment>
      {!isEditing && <iframe width={video_width} height={video_height} src={src} frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>}
      {isEditing && <img src={thumbnail} /> }
    </React.Fragment>
  );

};

export default withSitecoreContext()(YouTubeEmbedComponent);
