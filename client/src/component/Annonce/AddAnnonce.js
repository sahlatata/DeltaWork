import { Box, Button, Container, Input, Select, Stack, Text, useColorModeValue, useBreakpointValue, Heading, FormControl, FormLabel, Textarea, FormHelperText  } from '@chakra-ui/react';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAnnonce } from '../../Redux/Actions/AnnonceActions';
import NavBarClient from '../User/NavBarClient';
const AddAnnonce=()=> {
const [titre,setTitre]=useState("")
const [description,setDescription]=useState("")
const [technologie,setTechnologie]=useState("")
const [budget,setBudget]=useState(0)
const [niveau,setNiveau]=useState("")
const [domaine,setDomaine] = useState("")
const dispatch = useDispatch()
const navigate=useNavigate()
const handleAdd=(e)=>{
    e.preventDefault()
    dispatch(addAnnonce({titre,description,technologie,budget,niveau,domaine},navigate))
    
}
return (
<div>
    
    <NavBarClient/>
    
            

<Box  w={'full'} bg={useColorModeValue('white', 'gray.900')}ounded={'lg'}p={6}>
<Container boxShadow='lg' py={{ base: '16', md: '1' }}>
<Stack spacing={{ base: '4', md: '5' }} >
<Heading size={useBreakpointValue({ base: 'sm', md: 'md' })} align="center">Completer votre Profil ! </Heading>
<Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
Completer votre profil pour pouvoir profiter de l'integralité de nos fonctions 
</Text>

<FormControl>
  <FormLabel htmlFor='email'>Titre</FormLabel>
  <Input  onChange={(e)=>setTitre(e.target.value)} />
  <FormHelperText>Entrer le titre de l'annonce</FormHelperText>
</FormControl>

<FormControl id="name">
<FormLabel>Description</FormLabel>
<Textarea borderColor="gray.300" _hover={{ borderRadius: 'gray.300', }} onChange={(e)=>setDescription(e.target.value)} placeholder="message"/>
<FormHelperText>Decrivez votre parcours scolaire,experience Professionel, vos atous... </FormHelperText>
</FormControl>
   
<FormControl>
  <FormLabel htmlFor='email'>Technologies</FormLabel>
  <Input  onChange={(e)=>setTechnologie(e.target.value)} />
  <FormHelperText>Entrer les technologies que vous maitrisez</FormHelperText>
</FormControl>

<FormControl>
  <FormLabel htmlFor='email'>Budget</FormLabel>
  <Input  onChange={(e)=>setBudget(e.target.value)} />
  <FormHelperText>Entrer le budget</FormHelperText>
</FormControl>

<FormControl>
  <FormLabel htmlFor='country' >Domaine d'activité</FormLabel>
  <Select   placeholder="Selectionner votre domaine d'activité" value={domaine} onChange={(e)=>setDomaine(e.target.value)}>
    <option>Developpement mobile </option>
    <option>Developpement web  </option>
    <option>DevOps </option>
    <option>Data Science </option>
    <option>Developpement jeux video </option> 
  </Select>
</FormControl>   
<FormControl>
  <FormLabel htmlFor='country' >Niveau</FormLabel>
  <Select   placeholder="Selectionner votre domaine d'activité"  value={niveau} onChange={(e)=>setNiveau(e.target.value)}>
    <option>Débutant </option>
    <option>Intermediaire</option>
    <option>Expert</option>
    
  </Select>
</FormControl>  


<Button onClick={(e)=>handleAdd(e)}>Poster</Button>
</Stack>
</Container>   
</Box> 

        </div>
    );
}

export default AddAnnonce;