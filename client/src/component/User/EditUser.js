import {Button,Flex,FormControl,FormLabel,Heading, Input, Stack, useColorModeValue, Avatar, AvatarBadge, IconButton, Center, Select, Textarea,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { current, editUser } from '../../Redux/Actions/UserActions';
import NavBarClient from '../User/NavBarClient';

import NavBarFreelancer from '../User/NavBarFreelancer';
export default function EditUser(){
    const {id}=useParams()
    const dispatch = useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
    dispatch(current(id))
    },[])
    const User = useSelector(state=>state.UserReducer.User)
    const [nom,setNom]=useState(User.nom)
    const [prenom,setPrenom]=useState(User.prenom)
    const [pays,setPays]=useState(User.pays)
    const [email,setEmail]=useState(User.email)
    const [numero,setNumero]=useState(User.numero)
    const [domaine,setDomaine]=useState(User.domaine)
    const [niveau,setNiveau]=useState(User.niveau)
    const [description,setDescription]=useState(User.description)
    const [technologie,setTechnologie]=useState(User.technologie)

    const[image,setImage]= useState(User.image)

    useEffect(()=>{
    setNom(User.nom)
    setPrenom(User.prenom)
    setPays(User.pays)
    setEmail(User.email)
    setNumero(User.numero)
    setDomaine(User.domaine)
    setNiveau(User.niveau)
    setDescription(User.description)
    setTechnologie(User.technologie)
    setImage(User.image)
    },[User])
    var data = new FormData()
    data.append("nom",nom)
    data.append("prenom",prenom)
    data.append("pays",pays)
    data.append("email",email)
    data.append("domaine",domaine)
    data.append("niveau",niveau)
    data.append("description",description)
    data.append("technologie",technologie)
    data.append("image",image)
    const handleEdit=(e)=>{
            e.preventDefault()
            dispatch(editUser(id,data))
            navigate('/Profile')
    }



return (
    <div>
        {
            User.role=='Freelancer'? <NavBarFreelancer/>: <NavBarClient/>
        }
    
<Flex minH={'100vh'}   align={'center'}justify={'center'}  bg={useColorModeValue('gray.50', 'gray.800')}>
<Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
<Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
Modifier le profil
</Heading>
<FormControl id="userName">
            <FormLabel>Mon icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
            <Center>
                <Avatar size="xl" src={User.image}>
                <AvatarBadge as={IconButton} size="sm" rounded="full" top="-10px" colorScheme="red" aria-label="remove Image" icon={<SmallCloseIcon />} />
                </Avatar>
            </Center>
            <Center w="full">
                {/* <Button w="full" type='file'>Changer l'icon</Button> */}
                <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
            </Center>
            </Stack>
</FormControl>


        <FormControl id="userName" >
            <FormLabel>Nom</FormLabel>
            <Input value ={nom} onChange={(e)=>setNom(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>
        <FormControl id="userName" >
            <FormLabel>Prenom</FormLabel>
            <Input  value ={prenom} onChange={(e)=>setPrenom(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>
        <FormControl id="userName" >
            <FormLabel>Pays</FormLabel>
            <Input  value ={pays} onChange={(e)=>setPays(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>
        <FormControl id="email" >
            <FormLabel>Adresse email</FormLabel>
            <Input  value ={email} onChange={(e)=>setEmail(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="email" />
        </FormControl>
        {
            User.role=="Freelancer" &&
<>
        <FormControl id="userName" >
            <FormLabel>Numero</FormLabel>
            <Input value ={numero} onChange={(e)=>setNumero(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>

        <FormControl id="name">
        <FormLabel>Description</FormLabel>
        <Textarea  value ={description} onChange={(e)=>setDescription(e.target.value)} borderColor="gray.300" _hover={{ borderRadius: 'gray.300', }} placeholder="message"/>
        </FormControl>

        <FormControl>
        <FormLabel >Technologies</FormLabel>
        <Input value ={technologie} onChange={(e)=>setTechnologie(e.target.value)}  type='subtle' />
        </FormControl>

        <FormControl>
            <FormLabel>Domaine d'activité</FormLabel>
                <Select onChange={(e)=>setDomaine(e.target.value)} placeholder="Selectionner votre domaine d'activité">
                    <option>Developpement mobile</option>
                    <option>developpement web</option>
                    <option>DevOps</option>
                    <option>DataScience</option>
                    <option>Developpement jeux video</option> 
                </Select>
            </FormControl>

            <FormControl>
            <FormLabel>Niveau</FormLabel>
            <Select onChange={(e)=>setNiveau(e.target.value)} placeholder="Selectionner votre domaine d'activité">
                <option>Débutant</option>
                <option>Intermediare</option>
                <option>Expert</option>
            </Select>
            </FormControl>

            </>}
            
<Stack spacing={6} direction={['column', 'row']}>
<Button   w="full">
            Anuler
</Button>
<Button   onClick={(e)=>handleEdit(e)} bg={'blue.400'} color={'white'} w="full" _hover={{ bg: 'blue.500',}}>
            Modifier
</Button>
        </Stack>


</Stack>
</Flex>
</div>
    );
}