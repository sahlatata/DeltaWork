
import './App.css';

import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";

import Errors from "./component/Errors";
import Home from './component/Home'
import { ChakraProvider } from "@chakra-ui/react";
import FreelancerProfile from './component/User/FreelancerProfile'
import Register from './component/Register'
import SignIn from './component/SignIn';
import EditUser from './component/User/EditUser'
import CardAnnonce from './component/Annonce/CardAnnonce';
import ListAnnonces from './component/Annonce/ListAnnonces';
import CardDetail from './component/Annonce/CardDetail';
import ProfileClient from './component/User/ProfileClient'
import Admin from './component/Admin'
import AddAnnonce from './component/Annonce/AddAnnonce';
import EditPassword from './component/User/EditPassword';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { current } from './Redux/Actions/UserActions';
import { CompleteProfile } from './component/User/CompleteProfile';
import EditAnnonce from './component/Annonce/EditAnnonce';
import DemandeUser from './component/Demande/DemandeUser';
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(current())
  },[])
  return (
    <div>
      
      <ChakraProvider>
      
      <Errors/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Profile' element={<PrivateRoute><FreelancerProfile/></PrivateRoute>}/> 
          <Route path='/Register' element={<Register/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='/EditUser/:id' element={<EditUser/>}/>
          <Route path='/ListAnnonces' element={<ListAnnonces/>}/>
          <Route path='/AnnonceDetail/:id' element={<CardDetail/>}/>
          <Route path='/ProfileClient' element={<ProfileClient/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/AddAnnonce' element={<AddAnnonce/>}/>
          <Route path='/EditPassword/:id' element={<EditPassword/>}/>
          <Route path='/CompleteProfile/:id' element={<CompleteProfile/>}/>
          <Route path='/EditAnnonce/:id' element={<EditAnnonce/>}/>
          
        </Routes>
        
      {/* <DemandeUser/> */}
      </ChakraProvider>
      
    </div>
  );
}

export default App;
