import { Box, Container, HStack, Input, Link, SimpleGrid, Stack} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAnnonce } from "../../Redux/Actions/AnnonceActions"
import CardAnnonce from "./CardAnnonce"
import Filter from "./Filter"

import { Link as RouteLink } from "react-router-dom" 
import NavBarHome from "../User/NavBarHome"
const HomeAnnonces=()=>{
  
    const Annonces = useSelector(state=>state.AnnonceReducer.Annonces)
    const User = useSelector(state=>state.UserReducer.User)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getAnnonce())
    },[])
    /*Pour faire le filtre*/
    const [search,setSearch] = useState('') 
    return(
        
        <div>
        <NavBarHome/>
<Container maxW="container.2xl">           
<SimpleGrid columns={{ base: 1, lg: 2 }} py={{ base: 18, md: 4 }}>
            
        
        <Filter/>

        {/* ***************************************************** */}
        <Stack   spacing={{ base: 6, md: 10 }} >
        <Stack direction={'row'} >
        <Input placeholder='Rechercher par Titre' onChange={(e)=>setSearch(e.target.value)}/>
        </Stack> 

        <Box w={'full'} boxShadow={'lg'} rounded={'lg'} p={6} mt={10} mb={10}  >   
                { Annonces.filter(el=>(el.titre.toUpperCase().includes(search.toUpperCase())))
                .map(el=><Link as={RouteLink} to={'/SignIn'}><CardAnnonce el={el}/></Link>) }
        </Box>
        </Stack>

</SimpleGrid>
  </Container>          
        </div>
    )
}
export default HomeAnnonces