import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Heading, HStack, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Stack, Tag, TagCloseButton, TagLabel, Text, Textarea, useBreakpointValue, useColorModeValue, Wrap } from '@chakra-ui/react'
import * as React from 'react'
import { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { current, editUser } from '../../Redux/Actions/UserActions'
import { NavBarSimple } from '../NavBarSimple'



export const CompleteProfile = () => {
  const {id}=useParams()
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [numero,setNumero]=useState(0)
  const [domaine,setDomaine]=useState('')
  const [niveau,setNiveau]=useState('')
  const [description,setDescription]=useState('')
  const [technologie,setTechnologie]=useState('')


  const handleComplete=(e)=>{
    e.preventDefault()
    dispatch(editUser(id,{id,numero,domaine,niveau,description,technologie}))
    navigate('/Profile')
}
useEffect(()=>{
  dispatch(current(id))
},[])
// ***************************
return(
<>
<NavBarSimple/>
<Box  w={'full'} bg={useColorModeValue('white', 'gray.900')}ounded={'lg'}p={6}>
<Container  boxShadow='lg' py={{ base: '16', md: '8' }}>
<Stack spacing={{ base: '8', md: '10' }}>

{/* ***********titre *********** */}
<Stack spacing={{ base: '4', md: '5' }} align="center">
<Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>Completer votre Profil ! </Heading>
<Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
Completer votre profil pour pouvoir profiter de l'integralité de nos fonctions 
</Text>

{/* ******************************numero de telephone**************************************************** */}

  <FormControl>
  <FormLabel >Numero de telephone</FormLabel>
  <InputGroup>
  <InputLeftElement pointerEvents='none' children={<PhoneIcon/>}/>
  <Input onChange={(e)=>setNumero(e.target.value)} type='tel' placeholder='numero' />
  </InputGroup>
  <FormHelperText>Nous ne partagerons jamais votre numero de telephone.</FormHelperText>
  
</FormControl>


{/* **********************************************Domaine**************************************************** */}
<FormControl>
  <FormLabel>Domaine d'activité</FormLabel>
  <Select onChange={(e)=>setDomaine(e.target.value)} placeholder="Selectionner votre domaine d'activité">
    <option>Developpement mobile </option>
    <option>developpement web  </option>
    <option>DevOps </option>
    <option>DataScience </option>
    <option>Developpement jeux video </option> 
  </Select>
</FormControl>
{/* **********************************************Niveau**************************************************** */}
<FormControl as='fieldset'>
  <FormLabel as='legend'>Niveau</FormLabel>
  <RadioGroup onChange={setNiveau} defaultValue='Débutant'>
  
    <HStack  spacing='24px'>
    <Stack >
      <Radio value='Débutant'>Débutant</Radio>
      <Radio value='Intermediaire'>Intermediaire</Radio>
      <Radio value='Professionel'>Professionel</Radio>
      </Stack>
    </HStack>
 </RadioGroup>
 



  <FormHelperText>Precisez votre niveau dans votre domaine d'activité</FormHelperText>
</FormControl>
</Stack>
{/* **********************************Description**************************************************** */}
<FormControl id="name">
<FormLabel>Description</FormLabel>
<Textarea  onChange={(e)=>setDescription(e.target.value)} borderColor="gray.300" _hover={{ borderRadius: 'gray.300', }} placeholder="message"/>
<FormHelperText>Decrivez votre parcours scolaire,experience Professionel, vos atous... </FormHelperText>
</FormControl>
{/* ************************************Tag*********************************** */}



<FormControl>
  <FormLabel >Technologies</FormLabel>
  <Input onChange={(e)=>setTechnologie(e.target.value)}  type='tag' />
</FormControl>
<HStack spacing={4}>
<Tag borderRadius='full' variant='solid' colorScheme='green'>
      <TagLabel>Green</TagLabel>
      <TagCloseButton />
</Tag>
</HStack>






<Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify="center">
<Button onClick={(e)=>handleComplete(e)} >
Completer
</Button>
<Button >
Anuler
</Button>
</Stack>

</Stack>
</Container>
</Box>
</>
)}