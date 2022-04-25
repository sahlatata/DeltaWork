import { Box, HStack, Input, Link} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAnnonce } from "../../Redux/Actions/AnnonceActions"
import CardAnnonce from "./CardAnnonce"
import Filter from "./Filter"

import { Link as RouteLink } from "react-router-dom" 
import { NavBarSimple } from "../NavBarSimple"
import NavBarFreelancer from "../User/NavBarFreelancer"
import NavBarClient from "../User/NavBarClient"
const ListAnnonces=()=>{
  
    const Annonces = useSelector(state=>state.AnnonceReducer.Annonces)
    const User = useSelector(state=>state.UserReducer.User)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getAnnonce())
    },[])
    /*Pour faire le filtre*/
    const [niveau,setNiveau] = useState('') 
    
    return(
        
        <div>
          
            
            {
                User.role == "Freelancer" ? <NavBarFreelancer/> : User.role=="Client"? <NavBarClient/>:<NavBarSimple/>
            }
           
        
            <HStack spacing='100px' mt={10}>
                
            <Box  height='80px' width='400px' ml='50px'>
            
                <Filter setNiveau={setNiveau} niveau={niveau}/>
            </Box>
                <Box  height='80px'>
                <Input placeholder='Rechercher par Titre' />
                
                { Annonces.map(el=><Link as={RouteLink} to={`/AnnonceDetail/${el._id}`}><CardAnnonce el={el}/></Link>) }
                
                </Box>
                
            </HStack>
            
            
        </div>
    )
}
export default ListAnnonces