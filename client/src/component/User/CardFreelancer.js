import {Heading,Avatar,Box,Center,Text,Stack, Button,Link,Badge, useColorModeValue, Divider, SimpleGrid, ListItem, List, VStack, StackDivider, CircularProgress, CircularProgressLabel,} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { current, deleteUser } from '../../Redux/Actions/UserActions';
import { Link as RouteLink } from "react-router-dom"   
// import { TestCard } from './Usercard/TestCard';
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

<Box boxShadow='lg' w={'full'} bg={useColorModeValue('white', 'gray.900')}ounded={'lg'}p={6}>
  {/* *******************   */}
{/* <TestCard/> */}
<Avatar
    size={'xl'}
    src={
    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    }
    alt={'Avatar Alt'}
    mb={4}
    pos={'relative'}
    _after={{ content: '""', w: 4, h: 4, bg: 'green.300',border: '2px solid white', rounded: 'full', pos: 'absolute', bottom: 0,  right: 3,}}
/>


<Heading fontSize={'2xl'} fontFamily={'body'}>
<Heading
    lineHeight={1.1}
    fontWeight={600}
    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
    {Freelancer.nom} {Freelancer.prenom} 
</Heading>
<Text
    color={useColorModeValue('gray.900', 'gray.400')}
    fontWeight={300}
    fontSize={'2xl'}>
    {Freelancer.role} 
</Text>

</Heading>
<Text spacing={{ base: 4, sm: 6 }} fontWeight={600}  mb={4}>
    Adresse Email: {Freelancer.email} <br/>
    Pays : {Freelancer.pays} <br/>  
</Text>

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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore
    </Text>
    <Text fontSize={'lg'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        aliquid amet at delectus doloribus dolorum expedita hic, ipsum
        maxime modi nam officiis porro, quae, quisquam quos
        reprehenderit velit? Natus, totam.
    </Text>
    </VStack>
    <Box>
    <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={useColorModeValue('yellow.500', 'yellow.300')}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Technologie
    </Text>

    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <List spacing={2}>
<ListItem> <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
#art</Badge></ListItem>

        <ListItem>Master Chronometer Certified</ListItem>{' '}
        <ListItem>Tachymeter</ListItem>
        </List>
        <List spacing={2}>
        
        </List>
    </SimpleGrid>
    </Box>
    <Box>
    <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={useColorModeValue('yellow.500', 'yellow.300')}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Product Details
    </Text>

    <List spacing={2}>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Between lugs:
        </Text>{' '}
        20 mm
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Bracelet:
        </Text>{' '}
        leather strap
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Case:
        </Text>{' '}
        Steel
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Case diameter:
        </Text>{' '}
        42 mm
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Dial color:
        </Text>{' '}
        Black
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Crystal:
        </Text>{' '}
        Domed, scratch‑resistant sapphire crystal with anti‑reflective
        treatment inside
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Water resistance:
        </Text>{' '}
        5 bar (50 metres / 167 feet){' '}
        </ListItem>
    </List>
    </Box>
</Stack>

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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore
    </Text>
    <Text fontSize={'lg'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
        aliquid amet at delectus doloribus dolorum expedita hic, ipsum
        maxime modi nam officiis porro, quae, quisquam quos
        reprehenderit velit? Natus, totam.
    </Text>
    </VStack>
    <Box>
    <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={useColorModeValue('yellow.500', 'yellow.300')}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Technologie
    </Text>

    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <List spacing={2}>
<ListItem> <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
#art</Badge></ListItem>

        <ListItem>Master Chronometer Certified</ListItem>{' '}
        <ListItem>Tachymeter</ListItem>
        </List>
        <List spacing={2}>
        
        </List>
    </SimpleGrid>
    </Box>
    <Box>
    <Text
        fontSize={{ base: '16px', lg: '18px' }}
        color={useColorModeValue('yellow.500', 'yellow.300')}
        fontWeight={'500'}
        textTransform={'uppercase'}
        mb={'4'}>
        Product Details
    </Text>

    <List spacing={2}>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Between lugs:
        </Text>{' '}
        20 mm
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Bracelet:
        </Text>{' '}
        leather strap
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Case:
        </Text>{' '}
        Steel
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Case diameter:
        </Text>{' '}
        42 mm
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Dial color:
        </Text>{' '}
        Black
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Crystal:
        </Text>{' '}
        Domed, scratch‑resistant sapphire crystal with anti‑reflective
        treatment inside
        </ListItem>
        <ListItem>
        <Text as={'span'} fontWeight={'bold'}>
            Water resistance:
        </Text>{' '}
        5 bar (50 metres / 167 feet){' '}
        </ListItem>
    </List>
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

        );
    }