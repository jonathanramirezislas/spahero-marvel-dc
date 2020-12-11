import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';



describe('Pruebas en <Navbar />', () => {
 
    //creamos el history el cual es creado por el componente router
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Alejandro'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        //cuando hacemos un mock es importante limpiar
        jest.clearAllMocks();
    });

    test('debe de mostrarse correctamente', () => {
     
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Alejandro');

    });

    test('debe de llamar el logout y el usar history', () => {
        
        //Simulamos el click en el botton logout
        wrapper.find('button').prop('onClick')();

        //si dispatch de contextValue fue llamado con un objeto que contiene type.logout
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');

    })
    
    

})
