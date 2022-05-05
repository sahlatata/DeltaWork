
import './App.css';

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";

import Errors from "./component/Errors";
import Home from './component/Home'
import { ChakraProvider } from "@chakra-ui/react";
import FreelancerProfile from './component/User/FreelancerProfile'
import Register from './component/Register'
import SignIn from './component/SignIn';
import EditFreelancer from './component/User/EditFreelancer'
import EditClient from './component/User/EditClient'
import CardAnnonce from './component/Annonce/CardAnnonce';
import ListAnnonces from './component/Annonce/ListAnnonces';
import CardDetail from './component/Annonce/CardDetail';
import ProfileClient from './component/User/ProfileClient'
import Admin from './component/Admin'
import AddAnnonce from './component/Annonce/AddAnnonce';
import EditPassword from './component/User/EditPassword';
import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import { current } from './Redux/Actions/UserActions';
import { CompleteProfile } from './component/User/CompleteProfile';
import EditAnnonce from './component/Annonce/EditAnnonce';
import ViewProfilByClient from './component/User/ViewProfilByClient';
import HomeAnnonces from './component/Annonce/HomeAnnonces';
function App() {
  const [rech,setRech] = useState('')
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  return (
    <div>
      
     
      
      <Errors/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Profile' element={<PrivateRoute><FreelancerProfile setRech={setRech}/></PrivateRoute>}/> 
          <Route path='/Register' element={<Register/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/EditFreelancer/:id' element={<EditFreelancer/>}/>
          <Route path='/EditClient/:id' element={<EditClient/>}/>
          <Route path='/ListAnnonces' element={<ListAnnonces rech={rech}/>}/>
          <Route path='/AnnonceDetail/:id' element={<CardDetail/>}/>
          <Route path='/ProfileClient' element={<ProfileClient/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/AddAnnonce' element={<AddAnnonce/>}/>
          <Route path='/EditPassword/:id' element={<EditPassword/>}/>
          <Route path='/CompleteProfile/:id' element={<CompleteProfile/>}/>
          <Route path='/EditAnnonce/:id' element={<EditAnnonce/>}/>
          <Route path='/HomeAnnonces'  element={<HomeAnnonces/>}/>
          <Route path='/ViewProfilByClient/:id'  element={<ViewProfilByClient/>}/>
        </Routes>
        
      {/* <DemandeUser/> */}

      
    </div>
  );
}

export default App;
