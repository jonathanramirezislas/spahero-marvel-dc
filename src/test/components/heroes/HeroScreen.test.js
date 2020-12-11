import React from 'react';
import { mount } from 'enzyme'
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {

    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }
    
    test('debe de mostrar el componente redirect si no hay argumentos en el URL', () => {
        //Cuando nuestro componente en el URL no se tiene el id deber redirect a home
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ historyMock } />
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBe(true);

    });

    test('debe de mostrar un hero si el parámetro existe y se encuentra', () => {
        
            /*Simulando segmentos del URL */

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                {/*/hero/:heroeId se define porque asi lo tenemos definido en el DashboardRoutes */}
                <Route path="/hero/:heroeId" component={ HeroScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);
        

    });

    test('debe de regresar a la pantalla anterior con PUSH', () => {

        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ history } /> }
                />
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();


    });

    test('debe de regresar a la pantalla anterior GOBACK', () => {
        

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ historyMock } /> }
                />
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        
        expect( historyMock.push ).toHaveBeenCalledTimes(0);
        expect( historyMock.goBack ).toHaveBeenCalled();

    })


    test('debe de llamar el redirect si el hero no existe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123123123']}>
                <Route 
                    path="/hero/:heroeId" 
                    component={ () => <HeroScreen history={ historyMock } /> }
                />
            </MemoryRouter>
        );
        
        expect( wrapper.text() ).toBe('');
        
        
    })
    
    

    
    
    

    
})
