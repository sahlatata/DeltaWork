import {
Box,Stack,Text,VStack,HStack,Button,Heading,SimpleGrid,StackDivider,useColorModeValue,List,ListItem,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneAnnonce } from '../../Redux/Actions/AnnonceActions';
import NavBarFreelancer from '../User/NavBarFreelancer';
import NavBarClient from '../User/NavBarClient'
import { addDemande, getDemande } from '../../Redux/Actions/DemandeActions';
import DemandeUser from '../Demande/DemandeUser'
import { getOneUser } from '../../Redux/Actions/UserActions';
const CardDetail=()=>{
const dispatch = useDispatch()
const navigate = useNavigate()
const {id} = useParams()

const oneAnnonce = useSelector(state=>state.AnnonceReducer.Annonce)
const User = useSelector(state=>state.UserReducer.User)
const Demandes = useSelector(state=>state.DemandeReducer.Demandes)
const oneUser = useSelector(state=>state.UserReducer.oneUser)
const [status,setStatus] =useState('')
const handleAdd=()=>{
dispatch(addDemande(id,navigate))
}


useEffect(()=>{
dispatch(getOneAnnonce(id))
dispatch(getDemande())
dispatch(getOneUser(oneAnnonce.client))
Demandes.map(el=> (User._id === el.FreelancerId._id && oneAnnonce._id === el.AnnonceId._id )&&
  setStatus(el.status))
},[Demandes])



return(
<>
{
User.role == "Freelancer" ? <NavBarFreelancer/> : <NavBarClient/>
}

<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 4, md: 10 }} py={{ base: 18, md: 4 }}>

<Box boxShadow='lg' w="800px" bg={useColorModeValue('white', 'gray.900')} rounded={'lg'}p={6}>

<Box bg={useColorModeValue('white', 'gray.700')} maxWidth="2xl" mx="auto" p={{base: '6',md: '8',}}rounded={{sm: 'lg',}}shadow={{md: 'base',}}>

{/* *********************************** */}

<Stack spacing={{ base: 6, md: 10 }}>
<Box as={'header'}>
<Heading
lineHeight={1.1}
fontWeight={600}
fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
color={useColorModeValue('bleub.500', 'discord.50')}>
{oneAnnonce.titre}
</Heading>
<Text
color={useColorModeValue('gray.900', 'gray.400')}
fontWeight={300}
fontSize={'2xl'}>
{oneAnnonce.dateAnnonce}
</Text>
<Text
color={useColorModeValue('gray.900', 'gray.400')}
fontWeight={300}
fontSize={'2xl'}>
{oneAnnonce.budget} {'DT'}
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
Project Details
</Text>

<List spacing={2}>
<ListItem>
<Text as={'span'} fontWeight={'bold'}>
  Domaine:{' '}{oneAnnonce.domaine}
</Text>

</ListItem>
<ListItem>
<Text as={'span'} fontWeight={'bold'}>
  Durée du projet ou date limite:{' '}????
</Text>

</ListItem>

<ListItem>
<Text as={'span'} fontWeight={'bold'}>
  Level:{' '}{oneAnnonce.niveau}
</Text>
</ListItem>

<ListItem>
<Text as={'span'} fontWeight={'bold'}>
  Prix:{' '}{oneAnnonce.budget} {'DT'}
</Text>
</ListItem>

</List>

</Box>
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
Informations sur le Client
</Text>

<List spacing={2}>

<ListItem>
<Text as={'span'} fontWeight={'bold'}>
  Nom et Prénom :{' '}{oneUser.nom} {oneUser.prenom} 
</Text>
</ListItem>

<ListItem>
<Text as={'span'} fontWeight={'bold'}>
  Pays :{' '}{oneUser.pays}
</Text>
</ListItem>

<ListItem>
<Text as={'span'} fontWeight={'bold'}>
  Email : {' '}{oneUser.email}
</Text>
</ListItem>

</List>

</Box>
</Stack>

{
  
User.role=='Freelancer'&& 

status == '' ?
 <Button
onClick={handleAdd}
>
POSTULER
</Button>
:  <Button isLoading loadingText='En attente' colorScheme='teal' variant='outline' spinnerPlacement='start'>En attente</Button>

}
</Stack>

{/* *************************************** */}
</Box>

</Box>

<Box  pl={40}>
{User.role === 'Client' && 
Demandes.map(el=> oneAnnonce._id === el.AnnonceId._id && 
<Box key={Math.random()} w="400px" boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10}>
<Text fontWeight={'bold'}>Liste des postulants : </Text>
<DemandeUser key={Math.random()} el={el}/>
</Box>
)}
</Box>
</SimpleGrid>
</>
)
}
export default CardDetail
