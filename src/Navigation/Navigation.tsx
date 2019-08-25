import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import HomePage from '../Screens/HomePage/Homepage.component'
import Navbar from '../Components/Navbar/Navbar.component'
import Categorie from '../Screens/Categorie/Categorie.component'
const Navigation= () => (
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/categories/:product" component={Categorie}/>
        </Switch>
        
    </Router>
)
export default Navigation