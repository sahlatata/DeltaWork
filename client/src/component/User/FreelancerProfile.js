import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, IconButton, Input, List, ListItem, SimpleGrid, SkeletonCircle, SkeletonText, Spacer, Square, Stack, StackDivider, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import NavBarFreelancer from './NavBarFreelancer'
import CardFreelancer from './CardFreelancer'
import { SearchIcon } from '@chakra-ui/icons';
import {getDemande} from '../../Redux/Actions/DemandeActions'
import { useDispatch, useSelector } from 'react-redux';

import DemandeCard from '../Demande/DemandeCard';
import { useNavigate } from 'react-router-dom';
export default function FreelancerProfile() {
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
<Box w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10} bg={useColorModeValue('white', 'gray.700')}  >
<Text  fontSize='xl'>
{dateLocale}
</Text>
<Heading color={useColorModeValue('bleub.500', 'discord.50')}>Good Morning</Heading>
<Text fontSize='xl'>
{Freelancer.nom} <br/>
</Text>
</Box>
{/* ************************ */}



<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 4 }}>
{/* **********carte profile************** */}
<CardFreelancer />
{/* ********** input ************** */}
<Stack spacing={{ base: 6, md: 10 }}  >
<Stack direction={'row'} >
<Input placeholder='Chercher une annonce' bg={useColorModeValue('white', 'gray.700')} />
<IconButton aria-label='Search database' icon={<SearchIcon />} />
</Stack>
{/* **********menue ************** */}
<Box  w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10} >
<Tabs colorScheme="dark"> 
<TabList >
<Tab >Demandes en attentes </Tab>
<Tab>Demandes acceptées</Tab>
</TabList>
<TabPanels>

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

