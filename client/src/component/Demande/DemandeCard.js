import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    
    useColorModeValue,
    
  } from '@chakra-ui/react';
import React from 'react';



function DemandeCard ({el}) {
    
    return (
        <div>
        <Center py={6}>
  <Box
    maxW={'700px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    rounded={'md'}
    p={6}
    overflow={'hidden'}>
    <Stack>
    <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
          {el.AnnonceId.titre} {el.status}
          
        </Heading>
      <Text color={'gray.500'}>
        {el.AnnonceId.description}
      </Text>
    </Stack>
    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
    
      <Stack direction={'column'} spacing={0} fontSize={'sm'}>
      <Text fontWeight={600}>Posted by</Text>
        <Text fontWeight={600}>Achim Rolle</Text>
        <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
      </Stack>
    </Stack>
  </Box>
</Center> 

    </div>






    );
}

export default DemandeCard;