import {
    Box,chakra,Container,Stack,Text,Image,Flex,VStack,Button,Heading,SimpleGrid,StackDivider,useColorModeValue,VisuallyHidden,List,ListItem,
  } from '@chakra-ui/react';
import { useEffect } from 'react';

  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneAnnonce } from '../../Redux/Actions/AnnonceActions';
import NavBarFreelancer from '../User/NavBarFreelancer';
import NavBarClient from '../User/NavBarClient'
const CardDetail=()=>{
   const dispatch = useDispatch()
   const {id} = useParams()
   console.log(id)
   useEffect(()=>{
     dispatch(getOneAnnonce(id))
   },[])
   const oneAnnonce = useSelector(state=>state.AnnonceReducer.Annonce)
   const User = useSelector(state=>state.UserReducer.User)
    return(
        <div>
           {
                User.role == "Freelancer" ? <NavBarFreelancer/> : <NavBarClient/>
            }
        <Container maxW={'7x1'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
         
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {oneAnnonce.titre}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {oneAnnonce.budget}
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                Date de l'annonce
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                    {oneAnnonce.description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Slills
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                
                      {/* i'm going to loop skills table and show them in listItem */}
                    {oneAnnonce.technologie}
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Project Details
                </Text>
  
                <List spacing={2}>
                  
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Durée du projet ou date limite:
                    </Text>{' '}
                    ????
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Level:
                    </Text>{' '}
                    {oneAnnonce.niveau}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Prix:
                    </Text>{' '}
                    </ListItem>
                    {oneAnnonce.budget}
                </List>
                
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Informations sur le Client
                </Text>
  
                <List spacing={2}>
                  
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Nom et Prénom: 
                    </Text>{' '}
                    {oneAnnonce.client}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Level:
                    </Text>{' '}
                    {oneAnnonce.niveau}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Prix:
                    </Text>{' '}
                    </ListItem>
                    {oneAnnonce.budget}
                </List>
                
              </Box>
            </Stack>
              
            {
              User.role=='Freelancer' &&  <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              // bg={useColorModeValue('gray.900', 'gray.50')}
              // color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              POSTULER
            </Button>
            
            }
         
  
          </Stack>
        </SimpleGrid>
      </Container>
        </div>
    )
}
export default CardDetail