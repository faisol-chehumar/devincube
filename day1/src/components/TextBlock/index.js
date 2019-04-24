import React from 'react';
import { Text, Box } from 'rebass';
import Header from '../Header';

import data from './data';

export default ({ content }) => (
  <Box mb={3}>
    <Header mb={3} as="h3" text={data[content].title} />
    <Text>{data[content].desc}</Text>
  </Box>
);
