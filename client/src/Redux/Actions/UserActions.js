import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionsTypes/UserTypes"
import axios from 'axios'
import { alertError } from "./errorAction"

// **********************************SignUp*******************************************
export const register =(newUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',newUser)
        dispatch({
            type:REGISTER,
            payload : res.data
        })
        // marche
        newUser.role == "Freelancer"?navigate('/CompleteProfile/:id'): navigate('/ProfileClient')
    } catch (error) {
        error.response.data.errors.forEach(element=>{
            dispatch(alertError(element.msg))
        })
    dispatch({
        type:FAIL,
        payload: error.response.data
    })   
    }
}
// *************************************SignIn****************************************
export const login =(oldUser,navigate)=>async(dispatch)=>{
try {
const res = await axios.post('/api/auth/SignIn',oldUser)
dispatch ({
    type: LOGIN,
    payload : res.data
})
 // marche 
res.data.found.role == "Freelancer"?navigate('/Profile'): res.data.found.role == "Client" ? navigate('/ProfileClient'): navigate('/Admin')

} catch (error) {
    error.response.data.errors.forEach(element=>{
        dispatch(alertError(element.msg))
    })
    dispatch({
        type :FAIL,
        payload : error.response.data
    })  
}
}
// **********************************DeleteFreelancer*******************************************
export const deleteUser =(id,navigate)=>async(dispatch)=>{
    try {
    await axios.delete(`/api/auth/DeleteUser/${id}`)  
    navigate('/')
} catch (error) {
    error.response.data.errors.forEach(element=>{
        dispatch(alertError(element.msg))
    })
dispatch({
    type:FAIL,
    payload: error.response.data
})   
}
}
// ***************************************GetUser**************************************
export const current =()=>async(dispatch)=>{
const config = {
headers : {
authorization : localStorage.getItem('token')
        }
    }
try {
    const res = await axios.get('/api/auth/GetUser',config)
    dispatch({
        type : CURRENT,
        payload : res.data
    })
} catch (error) {
dispatch({
    type :FAIL,
    payload : error.response.data
}) 
}
}
// ***************************************EditUser**************************************
export const editUser = (id,data)=>async(dispatch)=>{
    try {
    await axios.put(`/api/auth/EditUser/${id}`,data) 
    // dispatch(current())
    } catch (error) {
        error.response.data.errors.forEach(element=>{
            dispatch(alertError(element.msg))
        })
    dispatch({
        type:FAIL,
        payload: error.response.data
    })   
    }
    }
// ***************************************logout**************************************
export const logout =()=>{
    return({
        type : LOGOUT
    })
}
/**************************************edit password***************************** */
export const editpassword =(passwords,navigate)=>async(dispatch)=>{
    try {
    const res = await axios.put(`/api/auth/EditPassword/${passwords.id}`,passwords)
    navigate('/Profile')
    } catch (error) {
        error.response.data.errors.forEach(element=>{
            dispatch(alertError(element.msg))
        })
        dispatch({
            type :FAIL,
            payload : error.response.data
        })
    }
    }

/********************************************Complete profile************************* */
