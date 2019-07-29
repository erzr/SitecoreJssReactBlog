import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import styled from 'styled-components'

const StyledLink = styled(Image)`
  width: 100%;
`;

const ImagePromoComponent = ({fields}) => (
  <div>
    <StyledLink field={fields.image} />
  </div>
);

export default ImagePromoComponent;
