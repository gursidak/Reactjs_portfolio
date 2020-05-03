import React, { Component } from 'react'
import { Tab , Tabs , Grid , Cell ,Card , CardActions , CardTitle , CardText , Button, CardMenu, IconButton} from 'react-mdl'

class projects extends Component {
    
    constructor(props){
        super(props);

        this.state={
            activetab:0
        }
    }
    
    changeState(tabId){
          
            this.setState({activetab : tabId});
    }

    toggleCategories(){



        if(this.state.activetab === 1){
            return(
                <div>
                    <h1>Hello HTML CSS lovers</h1>
                </div>
            )
        }

        if(this.state.activetab === 0){
             return (
                    

                    <div className='return-projects'>
                        
                    {/* Project #1 */}
                    <Card shadow={0} className='projects-card-style' >
                        <CardTitle className='card-title'>
                            React project #1
                        </CardTitle>
                        <CardText>
                            My first React project with a drm to become a MERN stack developer. this is my portfolio .
                        </CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>live-DEmo</Button>

                        </CardActions>
                        <CardMenu>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>


                    {/* Project #2 */}
                    <Card className='projects-card-style' shadow={0}>
                        <CardTitle  className='card-title' >
                            React project #2
                        </CardTitle>
                        <CardText>
                            My first React project with a drm to become a MERN stack developer. this is my portfolio .
                        </CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>live-DEmo</Button>

                        </CardActions>
                        <CardMenu>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>



                    {/* Project #3 */}
                    <Card className='projects-card-style' shadow={0}>
                        <CardTitle className='card-title'>
                            React project #3
                        </CardTitle>
                        <CardText>
                            My first React project with a drm to become a MERN stack developer. this is my portfolio .
                        </CardText>

                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>live-DEmo</Button>

                        </CardActions>
                        <CardMenu>
                            <IconButton name='share' />
                        </CardMenu> 
                    </Card>

                </div>
                );
        }
            
       else if (this.state.activetab == 2){

        return(
            <div>
                <h1>Hello Vue lovers</h1>
            </div>
        )
       }            
        
        else if(this.state.activetab === 1){
            return (
           <div><h1>hello angular lovers</h1></div> 
                )
        }
       
    }
        
    
    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab= {this.state.activetab} onChange ={ (tabId)=>this.changeState(tabId)}  >
                    <Tab className='tabs'>React</Tab>
                    <Tab className='tabs'>HTML/CSS</Tab>
                    <Tab className='tabs'>Angular</Tab>
                    <Tab className='tabs'>vuejs</Tab>
                    <Tab className='tabs'>mongo-db</Tab>
                    <Tab className='tabs'>C++</Tab>
                    
                </Tabs>

                <section className='projects-grid'>
                     {this.toggleCategories()};                                           
                </section>
            </div>
        );
    }

}
export default projects
