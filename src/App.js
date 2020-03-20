import React from 'react';
import './App.css';
import { Layout , Header , Navigation , Drawer , Content , Textfield} from 'react-mdl'
import Resume from './components/Resume'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import projects from './components/projects'
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (

<div className="main-page">
    <Layout>
        <Header className='head' title="Title" scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> 
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link> 
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>







  );
}

export default App;




{/* <Link to="/aboutme">About Me</Link>
<Link to="/resume">Resume</Link>
<Link to="/projects">Projects</Link>
<Link to="/contact">Contact</Link> */}