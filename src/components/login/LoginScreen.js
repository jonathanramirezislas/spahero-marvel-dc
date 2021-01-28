import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    
    const {dispatch} = useContext(AuthContext)

    const handleLogin= ()=>{
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Jonathan'
            }
        });

        history.replace( lastPath );
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
