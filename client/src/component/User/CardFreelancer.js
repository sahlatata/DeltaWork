import {Heading,Avatar,Box,Text,Stack, Button,Link,Badge, useColorModeValue, Divider, SimpleGrid, ListItem, List, VStack, StackDivider, CircularProgress, CircularProgressLabel, AvatarBadge, Flex, Icon, HStack, Wrap, Tag,} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { current, deleteUser } from '../../Redux/Actions/UserActions';
import { Link as RouteLink } from "react-router-dom" 
import { GoVerified ,GoMail,GoDeviceMobile, GoPencil,GoGlobe,GoCalendar } from 'react-icons/go';  

    export default function SocialProfileSimple() {
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const handleDelete =(e)=>{
        e.preventDefault()
        dispatch(deleteUser (Freelancer._id , navigate))

    }
            useEffect(()=>{
            dispatch(current())
            },[])

const Freelancer = useSelector(state=>state.UserReducer.User)
        return (
<Box boxShadow='lg' w={'full'} bg={useColorModeValue('white', 'gray.900')} rounded={'lg'}p={6}>
<Box bg={useColorModeValue('white', 'gray.700')} maxWidth="2xl" mx="auto" p={{base: '6',md: '8',}}rounded={{sm: 'lg',}}shadow={{md: 'base',}}>
<Stack direction={{base: 'column',md: 'row',}} spacing={{base: '4',md: '10'}}>

<Avatar size="2xl" name="Samantha"src="https://images.unsplash.com/photo-1506935077180-46af676a2f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80">
<AvatarBadge borderWidth="4px" borderColor={'white'} insetEnd="3" bottom="3">
<Icon as={GoVerified} fontSize="2xl" color={'green'} />
</AvatarBadge> 
</Avatar>
{/* ************************* */}
<Box width="full" >
<Flex justifyContent="space-between" alignItems="center">
<Heading size="md" fontWeight="extrabold" letterSpacing="tight" marginEnd="6">
{Freelancer.nom} {Freelancer.prenom}
</Heading>
<Link as={RouteLink} to={`/EditUser/${Freelancer._id}`}><Button size="sm" variant="outline" leftIcon={<Icon as={GoPencil} color="gray.400" marginStart="-1" />} >
Edit
</Button></Link>
</Flex>
<Text mt="1" fontWeight="medium">
{Freelancer.role} 
    </Text>
    <Stack spacing="1" mt="2">
    <HStack fontSize="sm">
        <Icon as={GoGlobe} color="gray.500" />
        <Text>{Freelancer.pays} </Text>
    </HStack>
    <HStack fontSize="sm">
        <Icon as={GoMail} color="gray.500" />
        <Text>{Freelancer.email} </Text>
    </HStack>
    <HStack fontSize="sm">
        <Icon as={GoDeviceMobile} color="gray.500" />
        <Text>{Freelancer.numero} </Text>
    </HStack>
    </Stack>

    
</Box>
</Stack>
{/* ************** */}
 
<Stack
    spacing={{ base: 4, sm: 6 }}
    direction={'column'}
    divider={
    <StackDivider
        borderColor={useColorModeValue('gray.200', 'gray.600')}
    />
    }>
    <Box mt={10}>
    <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={useColorModeValue('gray.600', 'yellow.300')}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Description :
    </Text>

    <SimpleGrid  spacing={10}>
    <Text fontSize={'lg'}>
    {Freelancer.description}
    </Text>
    </SimpleGrid>
    </Box>
    <Box>
    <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={useColorModeValue('gray.600', 'yellow.300')}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Domaine d'activité :
    </Text>
    <SimpleGrid  spacing={10}>
    <Text fontSize={'lg'} >
            {Freelancer.domaine}
     </Text>
     </SimpleGrid> 
    </Box>
    
    <Box>
    <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={useColorModeValue('gray.600', 'yellow.300')}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Niveau d'expereience :
    </Text>
    <SimpleGrid  spacing={10}>
    <Text fontSize={'lg'} >
            {Freelancer.niveau}
     </Text>
     </SimpleGrid> 
     </Box>

<Box>
    <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={useColorModeValue('gray.600', 'yellow.300')}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
    Technologie :
    </Text>

    <Wrap shouldWrapChildren>
    <Tag>Productivity</Tag>
    <Tag>Work</Tag>
    <Tag>Business</Tag>
    <Tag>Woman</Tag>
    </Wrap>
    
    </Box>


    


</Stack>


            
{/* *******************   */}
<Stack mt={8} direction={'row'} spacing={4}>
<Button  onClick={handleDelete} 
flex={1} fontSize={'sm'} rounded={'full'} _focus={{bg: 'gray.200', }}>
Effacer
</Button>
<Link as={RouteLink} to={`/EditUser/${Freelancer._id}`}><Button 
flex={1} fontSize={'sm'} rounded={'full'}bg={'blue.400'}  color={'white'} boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'} _hover={{ bg: 'blue.500',}}_focus={{   bg: 'blue.500',}}>
Edit
</Button></Link>
</Stack>
{/* *******************   */}
</Box>
</Box>
        );
    }