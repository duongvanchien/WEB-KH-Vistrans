import React, { Component } from 'react';
import HomeScreen from '../screen/homeScreen';
import IntroScreen from '../screen/introScreen';
import SearchScreen from '../screen/searchScreen';
import PriceScreen from '../screen/PriceScreen';
import ContactScreen from '../screen/contactScreen';
import AddScreen from '../screen/addScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Header from '../components/header';
import Footer from '../components/footer';

export default class Navigator extends Component{
    render(){
        return(
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={HomeScreen}/>
                    <Route path="/gioithieu" exact component={IntroScreen}/>
                    <Route path="/tracuu" exact component={SearchScreen}/>
                    <Route path="/banggia" exact component={PriceScreen}/>
                    <Route path="/lienhe" exact component={ContactScreen}/>
                    <Route path="/themdonhang" exact component={AddScreen}/>
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

