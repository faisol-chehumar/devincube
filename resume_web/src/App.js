import React from 'react';
import { Card, Image, Heading, Text } from 'rebass';
import { Flex, Box } from '@rebass/grid';

import TextBlock from './components/TextBlock';
import SkillBox from './components/SkillBlock';
import IconGroup from './components/IconGroup';
import ListBlock from './components/ListBlock';

const App = () => (
  <Flex
    // width={'100%'}
    ml={[0, 200]}
    mr={[0, 200]}
    color="white"
    bg="#333"
    flexDirection={['column', 'row']}
  >
    <Box p={4} width={[1, 1 / 2]}>
      <Box width={[256, '100%']}>
        <Card borderRadius={5} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
          <Image
            borderRadius={5}
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
          />
        </Card>
      </Box>
      <Heading mt={3} as="h3">
        Faisol Chehumar
      </Heading>
      <Text fontSize={[3, 4, 2]} fontWeight={600} mt={2}>
        Fullstack Developer, Bloger
      </Text>
      <Flex mt={2}>
        <Box width={3 / 12}>
          <Text fontSize={[1, 1, 1]}>Email: </Text>
        </Box>
        <Box width={9 / 12}>
          <Text fontSize={[1, 1, 1]}>Faisol.chehumar@gmail.com</Text>
        </Box>
      </Flex>
      <Flex mt={2}>
        <Box width={3 / 12}>
          <Text fontSize={[1, 1, 1]}>Address: </Text>
        </Box>
        <Box width={9 / 12}>
          <Text fontSize={[1, 1, 1]}>Bangkok</Text>
        </Box>
      </Flex>
      <IconGroup type="social" />
      <TextBlock content="profile" />
      <SkillBox title="Technical Skills" type="technical" />
      <SkillBox title="Language Skills" type="language" />
    </Box>
    <Box p={3} mt={5} width={[1, 1 / 2]}>
      <ListBlock type="exp" />
      <ListBlock type="edu" />
      <IconGroup title="Interests" type="interests" />
    </Box>
  </Flex>
);

export default App;
