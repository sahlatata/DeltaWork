import { SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, IconButton, Input, Link, List, ListItem, SimpleGrid, SkeletonCircle, SkeletonText, Spacer, Square, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyAnnonce } from '../../Redux/Actions/AnnonceActions';
import CardAnnonce from '../Annonce/CardAnnonce';
import NavBarClient from './NavBarClient';
import CardFreelancer from './CardFreelancer'
import { Link as RouteLink } from "react-router-dom"
function ProfileClient() {
    const myAnnonces = useSelector(state=>state.AnnonceReducer.MyAnnonces)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getMyAnnonce())
    },[])
    let today = new Date();
    let dateLocale = today.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });
    return (
        <div>
            <NavBarClient/>
           
            <Container maxW="container.xl">
<Box w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10} >
<Text  fontSize='xl'>
{dateLocale}
</Text>
<Heading >Good Morning</Heading>
<Text fontSize='xl'>
Sahla T. <br/>
</Text>
</Box>
{/* ************************ */}



<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 4 }}>
{/* **********carte profile************** */}
<CardFreelancer/>
{/* ********** input ************** */}
<Stack spacing={{ base: 6, md: 10 }}>
<Stack direction={'row'}>
<Input placeholder='Chercher une annonce' />
<IconButton aria-label='Search database' icon={<SearchIcon/>} />
</Stack>
{/* **********menue ************** */}
<Box  w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10} >
<Tabs>
<TabList>
<Tab>Mes Annonces  </Tab>

<Tab>Annonces récentes</Tab>
</TabList>
<TabPanels>
<TabPanel>
    {/* ******a changer par component Card annonce ******************* */}
    {
                myAnnonces.map(el=><Link as={RouteLink} to={`/AnnonceDetail/${el._id}`}><CardAnnonce el={el}/></Link>)
            }
{/* <Center py={2}>
    <Box
    maxW={'700px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    rounded={'md'}
    p={6}
    overflow={'hidden'}>
    <Stack>
        <Heading
        color={useColorModeValue('gray.700', 'white')}
        fontSize={'2xl'}
        fontFamily={'body'}>
        Titre
        </Heading>
        <Text color={'gray.500'}>
    Description
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
<Center py={2}>
    <Box
    maxW={'700px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    rounded={'md'}
    p={6}
    overflow={'hidden'}>
    <Stack>
        <Heading
        color={useColorModeValue('gray.700', 'white')}
        fontSize={'2xl'}
        fontFamily={'body'}>
        Titre
        </Heading>
        <Text color={'gray.500'}>
    Description
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
</Center>  */}
{/* ************************* */}
</TabPanel>
<TabPanel>
    <p>two!</p>
</TabPanel>
</TabPanels>
</Tabs>
</Box>
</Stack>

</SimpleGrid>









</Container>



        </div>
    );
}

export default ProfileClient;