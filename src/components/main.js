import React from 'react';
import { Route , Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Projects from './projects';
import Resume from './Resume';

const Main = () => (

    <switch>
        <Route exact path='/' component= {LandingPage} />
        <Route path='/aboutme' component={AboutMe} />         
        <Route path='/resume' component={Resume} /> 
        <Route path='/projects' component={Projects} /> 
        <Route path='/contact' component={Contact} /> 
    </switch>
    
)


export default Main ;