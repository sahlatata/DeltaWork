import { Box, HStack, Input, Link} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAnnonce } from "../../Redux/Actions/AnnonceActions"
import CardAnnonce from "./CardAnnonce"
import Filter from "./Filter"

import { Link as RouteLink } from "react-router-dom" 
import NavBarHome  from "../User//NavBarHome"
import NavBarFreelancer from "../User/NavBarFreelancer"
import NavBarClient from "../User/NavBarClient"
const ListAnnonces=({rech})=>{
  
    const Annonces = useSelector(state=>state.AnnonceReducer.Annonces)
    const User = useSelector(state=>state.UserReducer.User)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getAnnonce())
    },[])
    /*Pour faire le filtre*/
    const [search,setSearch] = useState(rech) 
    const [domaine,setDomaine] = useState('')
    const [niveau,setNiveau] = useState('')
    const [prix,setPrix] = useState('0')
    const [pays,setPays] = useState('')
    const [duree,setDuree] = useState(0)

    return(
        
        <div>
            {
                User.role == "Freelancer" ? <NavBarFreelancer/> : <NavBarClient/>
            }
        
            <HStack spacing='100px' mt={10}>    
            <Box  height='80px' width='400px' ml='50px'>

          
                <Filter  setDomaine={setDomaine} setNiveau={setNiveau} niveau={niveau} setPays={setPays} setPrix={setPrix} setDuree={setDuree}/>

              

            </Box>
                <Box  height='80px'>
                <Input placeholder='Rechercher par Titre' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                
                { Annonces.filter(el=>(el.titre.toUpperCase().includes(search.toUpperCase())))
                .filter(el=>(el.niveau.toLowerCase()).includes(niveau.toLowerCase()))
                .filter(el=>(el.domaine.toLowerCase()).includes(domaine.toLowerCase()))
                .filter(el=>(el.client.pays.toLowerCase()).includes(pays.toLowerCase()))
                .filter(el=>(el.budget>parseInt(prix)))
                .filter(el=>(el.duree>parseInt(duree)))
                .map(el=><Link as={RouteLink} to={`/AnnonceDetail/${el._id}`}><CardAnnonce key={Math.random()} el={el}/></Link>) }
                
                </Box>
                
            </HStack>
            
            
        </div>
    )
}
export default ListAnnonces