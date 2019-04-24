import React from 'react';
import { Flex, Box } from 'rebass';
import { StarFull, StarEmpty } from 'styled-icons/icomoon/';

import colors from '../../styles/colors';
import Header from '../Header';

import data from './data';

export default ({ title, type }) => (
  <Box mb={3}>
    <Header mb={3} as="h3" text={title} />
    {data[type].map((skill, index) => (
      <Flex key={index} mb={2}>
        <Box width={1 / 3}>{skill.title}</Box>
        <Box width={1 / 3}>
          <Flex>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Box key={i} width={1 / 5} color={colors.hillight}>
                  {i < skill.rating ? <StarFull fontSize={1} /> : <StarEmpty />}
                </Box>
              ))}
          </Flex>
        </Box>
      </Flex>
    ))}
  </Box>
);
