import React from 'react'

export const LoginScreen = ({history}) => {
    
    const handleLogin= ()=>{
        console.log('click');
        //history.push("/"); //don't use in login because you can go back to login screen
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
