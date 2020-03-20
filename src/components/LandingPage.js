import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            
        <div style = {{ width: '100%', height: '1140px' } } >
            <Grid className = "landing-grid" >
                <Cell col = { 12 } >
                       < img src = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png'   alt='avatar' className = 'avatar-logo' / >

                     <div className = 'banner-text' >
                         <h1> Front-End Web Developer </h1> 
                         <hr />
                         <p> HTML / CSS | Javascript | Bootstraop | React | Mysql </p>
                   

                         <div className='social-icons' >
                            
                            {/* Linked-in */}
                             <a alt='linkedIn' rel = 'noopener noreferrer' target = '_blank' src = 'https://in.linkedin.com/' >
                                  <i className = "fa fa-linkedin-square" aria-hidden="true" /> 
                             </a>
                            {/* Github */}
                             <a alt='linkedIn' rel = 'noopener noreferrer' target = '_blank' src = 'https://in.linkedin.com/' >
                                <i class="fa fa-github-square"></i>                                
                             </a>
                            {/* Free-code-camp*/}
                             <a alt='linkedIn' rel = 'noopener noreferrer' target = '_blank' src = 'https://in.linkedin.com/' >
                                <i class="fa fa-free-code-camp"></i>                            
                             </a>                            
                            {/* Youtube */}
                             <a alt='linkedIn' rel = 'noopener noreferrer' target = '_blank' src = 'https://in.linkedin.com/' >
                                <i class="fa fa-youtube"></i>                            
                             </a>
                         </div>
                    </div>
                 </Cell>
             </Grid>
        </div>
    )
  }
}

export default LandingPage;