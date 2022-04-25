import {Flex,Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,Text,useColorModeValue,Link, Select, Radio, RadioGroup} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import NavBarSimple from './NavBarSimple';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/Actions/UserActions';
import Errors from './Errors';
import { Link as RouteLink } from "react-router-dom"
export default function SignupCard() {
const [showPassword, setShowPassword] = useState(false);
const [nom , setNom]=useState('')
const [prenom , setPrenom]=useState('')
const [email , setEmail]=useState('')
const [pays , setPays]=useState('')
const [password , setPassword]=useState('')
const [image,setImage] = useState()
const [role, setRole] = useState('Freelancer')

const dispatch = useDispatch()
const navigate = useNavigate()
const handleRegister =(e)=>{
e.preventDefault()
dispatch(register({nom,prenom,email,password,pays,role},navigate))
}
return (
<Box textAlign="center" fontSize="xl">
    {/* <NavBarSimple/>   */}
<Flex minH={'100vh'} align={'center'}justify={'center'}bg={useColorModeValue('gray.50', 'gray.800')}> 
<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
<Stack align={'center'}>
    <Heading fontSize={'4xl'} textAlign={'center'}>
    Cree un compte
    </Heading>
    <Text fontSize={'lg'} color={'gray.600'}>
    Pour postuler a l'annonce de votre choix  ✌️
    </Text>
</Stack>
<Box rounded={'lg'}bg={useColorModeValue('white', 'gray.700')}boxShadow={'lg'}p={8}>
<Stack spacing={4}>
<Errors/>
    {/* ****************role********************* */}
    <HStack>
    <FormControl id="firstName" isRequired>
        <FormLabel>Vous etes :</FormLabel>
    <RadioGroup  onChange={setRole} defaultValue='2'>
    <Stack spacing={5} direction='row'>
    <Radio colorScheme='blue' value='Freelancer' onClick='role()' >Freelancer</Radio>
    <Radio colorScheme='green' value='Client'>Client</Radio>
    </Stack>
    </RadioGroup>
    </FormControl>
    </HStack>
    {/* ************************************* */}
    <HStack>
    <Box>
        <FormControl id="firstName" isRequired>
        <FormLabel>Prenom</FormLabel>
        <Input type="text" onChange={(e)=>setPrenom(e.target.value)}/>
        </FormControl>
    </Box>
    <Box>
        <FormControl id="lastName">
        <FormLabel>Nom</FormLabel>
        <Input type="text" onChange={(e)=>setNom(e.target.value)}/>
        </FormControl>
    </Box>
    </HStack>
<FormControl id="email" isRequired>
    <FormLabel>Adress Email</FormLabel>
    <Input type="email" onChange={(e)=>setEmail(e.target.value)}/>
</FormControl>
{/* ***********Pays*************** */}


<FormControl>
<FormLabel >Country</FormLabel>
<Select id='pays'  onChange={(e)=>setPays(e.target.value)} placeholder='Selectionner votre pays'>
    <option>Tunisie</option>
    <option>France</option>
    <option>Algerie</option>
    <option>Maroc</option>
    <option>Suisse</option>
    <option>Senegal</option>
    
  </Select>
</FormControl>

{/* ************************** */}
<FormControl id="password" isRequired>
    <FormLabel>Mot de passe</FormLabel>
    <InputGroup>
    <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)} />
    <InputRightElement h={'full'}>
    <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>{showPassword ? <ViewIcon /> : <ViewOffIcon />}</Button>
    </InputRightElement>
    </InputGroup>
</FormControl>

<Stack spacing={10} pt={2}>
    <Button onClick={(e)=>handleRegister(e)} loadingText="Submitting"size="lg"bg={'blue.400'}color={'white'}_hover={{bg: 'blue.500',}}>
        Creer un compte
    </Button>
</Stack>
<Stack pt={6}>
    <Text align={'center'}>
    Vous avez déja un compte ?  <Link as={RouteLink} to="/SignIn" color={'blue.400'}> Connexion </Link>
    </Text>
</Stack>
</Stack>
</Box>
</Stack>
</Flex>


</Box>

);
}