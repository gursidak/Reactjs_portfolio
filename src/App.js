import React from 'react';
import './App.css';
import { Layout , Header , Navigation , Drawer , Content , Textfield} from 'react-mdl'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import projects from './components/projects'
import Main from './components/main';
import landing from './components/LandingPage';
import { Link } from 'react-router-dom';


// main 
function App() {
  return (

// {/* <div className="main-page">                                                  */}
    <Layout>
        <Header className='head' title="" >
        <h3>MY PORTFOLIO</h3>

            <Navigation>
                <Link to="/">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> 
            </Navigation>
        </Header>
        <Drawer style={{background:'black', opacity:'100%' ,color:'white' , padding:'20px'}} title="MY PORTFOLIO">
            <Navigation>
                <Link style={{color:'hotpink' , fontWeight:'500' , fontSize:'20px'}} to="/">About Me</Link>
                <Link style={{color:'hotpink' , fontWeight:'500' , fontSize:'20px'}} to="/resume">Resume</Link>
                <Link style={{color:'hotpink' , fontWeight:'500' , fontSize:'20px'}} to="/projects">Projects</Link>
                <Link style={{color:'hotpink' , fontWeight:'500' , fontSize:'20px'}} to="/contact">Contact</Link> 
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" >
            <Main />
            </div>
        </Content>
    </Layout>
// </div>


  );
}

export default App;





