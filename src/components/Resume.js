import React, { Component } from 'react'
import { Grid, Cell , Card , CardActions , CardTitle , CardText , Button} from 'react-mdl'


 class Resume extends Component {
    render() {
        return (
            <div className='resume' >
                <header className='rs-head'>
                    <h3>MY-RESUME</h3>
                </header>
                <Grid className='resume-grid'>
                <Cell className='left-col' col={3}>
                    <div className='left-col-contentBox'>
                         <div className='left-col-imageBox'>
                             < img src = 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png'   alt='avatar' className = 'avatar-logo' / >
                             <h2>GURSIDAK SINGH</h2>
                         </div>
                         <h4>Programmer</h4>                        
                         <hr className='left-col-hr' />
                         <ul>
                            <li className='left-li'>
                                 Lead programmer with a track record of incorporating user and business requirements into cost-effective, secure and user-friendly solutions known for scalability and durability.
                            </li>
                            <li className='left-li'>
                                 Knowledge of commercial and open source software/database engineering tools, design techniques, CASE tools and security standards.  
                            </li>
 
                            <li className='left-li'>
                                 Proven leader and project manager; drive system architecture decisions and lead projects from concept through the release process.
                            </li>     

                            <li className='left-li'>
                                Innovator of next-generation solutions, systems and applications giving companies a competitive edge and producing outstanding results for customers. 
                            </li> 
                        </ul>             
                         <hr className='left-col-hr' />
                         <h4>Address</h4>
                         <hr className='left-col-hr' />

                         <h5>Home-Address : </h5>
                         <p>#123, abc Nagar,near xyz rRoad , Ludhaina</p>
                         <h5>Email-Address : </h5>
                         <p> starboygursidak@gmail.com</p>
                         <h5>Contact Number : </h5>
                         <p>7986473925</p>
                         <hr className='left-col-hr' />

                    </div>       

                </Cell>




                <Cell className='right-col' col={9}>
                    <h3>EDUCATION</h3>
                    {/* <hr className='right-col-hr' /> */}

                    
                    <div className='edu-scroll'>
                        <div className='edu-cards'>
                            <h3>card 1</h3>
                            <p>kgggubigktkgukrrrrrrrrrrb7br7rbbrdkty d bdy6 d  6ii 6 66</p>
                        </div>
                        <div className='edu-cards'>
                            <h3>card 1</h3>
                            <p>kgggubigktkgukrrrrrrrrrrb7br7rbbrdkty d bdy6d6ii666</p>
                        </div>

                        <div className='edu-cards'>
                            <h3>card 1</h3>
                            <p>kgggubigktkgukrrrrrrrrrrb7br7rbbrdkty d bdy6 d  6ii 6 66</p>
                        </div>

                        <div className='edu-cards'>
                            <h3>card 1</h3>
                            <p>kgggubigktkgukrrrrrrrrrrb7br7rbbrdkty d bdy6 d  6ii 6 66</p>
                        </div>

                     </div>
                                                                                            
                </Cell>
      
                </Grid>
                

            </div>
        )
    }
}

export default Resume
