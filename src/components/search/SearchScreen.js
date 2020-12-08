import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    //get q from URL (parms in the URI)
    const location = useLocation();
    //if q is undefined establish '' as defualt value
    const { q = '' } = queryString.parse( location.search );
    //SearchText (intialvalue)
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    //this willl help has to avoid to render atomatically when we change the state of searchText
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div className="Container ml-2">
            <h1>Search Screen</h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    { 
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                There is no a hero with { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
