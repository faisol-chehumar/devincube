import React from 'react';
import { Box, Flex, Text } from 'rebass';

import Header from '../Header';
import data from './data.js';

export default ({ type }) => {
  return (
    <Box mb={3}>
      {data[type] && (
        <>
          <Header mb={3} as="h3" text={data[type].title} />
          {data[type].lists.map((row, i) => (
            <div key={i}>
              <Flex>
                <Box width={1 / 2}>
                  <h5>{row.title}</h5>
                </Box>
                <Box width={1 / 2}>
                  <Text textAlign="right" mt={3} fontSize={1}>
                    {row.date}
                  </Text>
                </Box>
              </Flex>
              {row.desc && (
                <ul>
                  {row.desc.map((text, k) => (
                    <li key={k}>{text}</li>
                  ))}
                </ul>
              )}
              {row.location && <b>{row.location}</b>}
            </div>
          ))}
        </>
      )}
    </Box>
  );
};
