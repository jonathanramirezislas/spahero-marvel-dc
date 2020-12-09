const { authReducer } = require("../../auth/authReducer");
const { types } = require("../../types/types");


describe('Pruebas en authReducer',()=>{

    test('debe de retornar el estado por defecto',()=>{
                                //initialvalues&action
        const state =authReducer({logged:false},{});

        expect(state).toEqual({logged:false});

    })

    test('debe de autenticar  y colocar el name del usuario',()=>{
 
        const action={
            type:types.login,
            payload:{
                name:'Alejandro'
            }
        }
        const state =authReducer({logged:false},action);

        expect(state).toEqual({
            logged:true,
            name:'Alejandro'
        });
        
    })

    test('debe de borrar el name del usario y logged in false locaStorage',()=>{
     
        const action={
            type:types.logout,
        }

        const state =authReducer({logged:true},action);

        expect(state).toEqual({ logged:false});

    })

})