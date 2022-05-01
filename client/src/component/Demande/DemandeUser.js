import { AddIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
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
      
      <Center py={2}>
        <Box
          maxW={'350px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>

          <Flex justify={'center'} >
            <HStack>
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
             <Box>
              
              <Stack spacing={0} align={'center'} >
                <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                  {el.FreelancerId.nom} {el.FreelancerId.prenom}
                </Heading>
                <Text color={'gray.500'}>{el.FreelancerId.domaine}</Text>
              </Stack>
    
              <Stack direction={'row'} justify={'center'} spacing={12} mt={1}>
                  <Button><CheckIcon w={4} h={4} color='green'/></Button> 
                  <Button><CloseIcon w={4} h={4} color="red"/></Button>
              </Stack>
            </Box>
            </HStack>
          </Flex>
         
        </Box>
        
      </Center>
    );
  }
  export default DemandeUser;