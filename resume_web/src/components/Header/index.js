import React from 'react';
import { Heading } from 'rebass';
import styled from 'styled-components';

import colors from '../../styles/colors';

const Header = styled(Heading)`
  border-bottom: 3px solid ${colors.hillight};
  padding-bottom: 1rem;
`;

export default ({ text }) => (
  <Header mb={3} as="h3">
    {text}
  </Header>
);
