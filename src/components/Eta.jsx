import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

function Eta({ nextStopName, nextStopDistance, nextStopDuration }) {
  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} flexWrap="wrap" ml='30px' alignItems="flex-start">
      <Text flexGrow={1} mb={{ base: 1, md: 0 }} fontWeight="bold" as="h3">Nyabugogo - Kimironko</Text>
      <Box flexBasis={{ base: '80%', md: '15%' }} mb={{ base: 1, md: 0 }}>
        <Text>Next Stop: {nextStopName}</Text>
      </Box>
      <Box flexBasis={{ base: '80%', md: '15%' }} mb={{ base: 1, md: 0 }}>
        <Text>Distance: {nextStopDistance} &nbsp;&nbsp;&nbsp;&nbsp; Time: {nextStopDuration}</Text>
      </Box>
    </Flex>
  );
}

export default Eta;
