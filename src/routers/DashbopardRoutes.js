import React from 'react'
import {  Switch, Route,Redirect } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar'
import { marvel } from '../components/marvel/MarvelScreen';
import {HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashbopardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="Container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ marvel } />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
