import {Button,Flex,FormControl,FormLabel,Heading, Input, Stack, useColorModeValue, Avatar, AvatarBadge, IconButton, Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { current, editUser } from '../../Redux/Actions/UserActions';
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
    useEffect(()=>{
    setNom(User.nom)
    setPrenom(User.prenom)
    setPays(User.pays)
    setEmail(User.email)
    },[User])

    const handleEdit=(e)=>{
            e.preventDefault()
            dispatch(editUser(id,{nom,prenom,pays,email}))
            navigate('/Profile')
    }



return (
    <div>
    <NavBarFreelancer/>
<Flex minH={'100vh'}   align={'center'}justify={'center'}  bg={useColorModeValue('gray.50', 'gray.800')}>
<Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
<Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
Modifier le profil
</Heading>
<FormControl id="userName">
            <FormLabel>Mon icon</FormLabel>
            <Stack direction={['column', 'row']} spacing={6}>
            <Center>
                <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                <AvatarBadge as={IconButton} size="sm" rounded="full" top="-10px" colorScheme="red" aria-label="remove Image" icon={<SmallCloseIcon />} />
                </Avatar>
            </Center>
            <Center w="full">
                <Button w="full">Changer l'icon</Button>
            </Center>
            </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
            <FormLabel>Nom</FormLabel>
            <Input value ={nom} onChange={(e)=>setNom(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>
        <FormControl id="userName" isRequired>
            <FormLabel>Prenom</FormLabel>
            <Input  value ={prenom} onChange={(e)=>setPrenom(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>
        <FormControl id="userName" isRequired>
            <FormLabel>Pays</FormLabel>
            <Input  value ={pays} onChange={(e)=>setPays(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="text" />
        </FormControl>
        <FormControl id="email" isRequired>
            <FormLabel>Adresse email</FormLabel>
            <Input  value ={email} onChange={(e)=>setEmail(e.target.value)} placeholder="UserName" _placeholder={{ color: 'gray.500' }}type="email" />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
<Button bg={'red.400'} color={'white'} w="full"  _hover={{ bg: 'red.500',  }}>
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