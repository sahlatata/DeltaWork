import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    VStack,
    HStack,
  } from '@chakra-ui/react';
  
 function DemandeUser({el}) {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>

          <Image
            h={'60px'}
            // w={'full'}
            // src={
            //   'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            // }
            // objectFit={'cover'}
          />
          
          <Flex justify={'center'} mt={-12}>
          
            <Avatar
              size={'xl'}
              src={
                el.FreelancerId.image
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
              
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {el.FreelancerId.nom}
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
                <Text fontWeight={600}>Accepter</Text>
                <Text fontWeight={600}>Refuser</Text>
            </Stack>
           
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
             Voir Profile
            </Button>
          </Box>
        </Box>
        
      </Center>
    );
  }
  export default DemandeUser;