import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext)

    const handleLogin= ()=>{
        console.log('click');
        //history.push("/"); //don't use in login because you can go back to login screen
        //history.replace("/");  

        dispatch({
            type:types.login,
            payload:{
                name:'Jonathan'
            }
        })
        
        history.replace("/"); 
    }

    return (
        <div className="container mt-">
            <h1>Login Screen</h1>
            <hr/>
            <button className="btn btn-primary"
            onClick={handleLogin}
            >
                 Login
            </button>

        </div>
    )
}
