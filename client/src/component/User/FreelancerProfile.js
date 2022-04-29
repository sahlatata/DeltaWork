import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, IconButton, Input, List, ListItem, SimpleGrid, SkeletonCircle, SkeletonText, Spacer, Square, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import NavBarFreelancer from './NavBarFreelancer'
import CardFreelancer from './CardFreelancer'
import { SearchIcon } from '@chakra-ui/icons';
import {getDemande} from '../../Redux/Actions/DemandeActions'
import { useDispatch, useSelector } from 'react-redux';

import DemandeCard from '../Demande/DemandeCard';
export default function FreelancerProfile(props) {
    const Freelancer = useSelector(state=>state.UserReducer.User)
    const myAnnonces = useSelector(state=>state.AnnonceReducer.MyAnnonces)
    const Annonce = useSelector(state=>state.AnnonceReducer.Annonce)
    const demandes = useSelector(state=>state.DemandeReducer.Demandes)
    const dispatch = useDispatch()
    const ann = []
useEffect(()=>{
 dispatch(getDemande())   
},[])
// ****************recuperation de la date**************
let today = new Date();
let dateLocale = today.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });

// ******************************
return (
        <div>
        <NavBarFreelancer/> 

<Container maxW="container.xl">
<Box w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10} >
<Text  fontSize='xl'>
{dateLocale}
</Text>
<Heading >Good Morning</Heading>
<Text fontSize='xl'>
{Freelancer.nom} <br/>
</Text>
</Box>
{/* ************************ */}



<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 4 }}>
{/* **********carte profile************** */}
<CardFreelancer />
{/* ********** input ************** */}
<Stack spacing={{ base: 6, md: 10 }}>
<Stack direction={'row'}>
<Input placeholder='Chercher une annonce' />
<IconButton aria-label='Search database' icon={<SearchIcon />} />
</Stack>
{/* **********menue ************** */}
<Box  w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10} >
<Tabs>
<TabList>
<Tab>Annonces enregistrées </Tab>
<Tab>Annonces récentes</Tab>
</TabList>
<TabPanels>
<TabPanel>
    {/* ******a changer par component Card annonce ******************* */}
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
</Center> 

{/* ************************* */}
</TabPanel>
<TabPanel>
{

demandes.map(el => Freelancer._id === el.FreelancerId._id &&  <DemandeCard el={el}/> )

}

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

