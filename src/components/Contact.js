import React, { Component } from 'react';
import {Cell , Grid , List , ListItem , ListItemContent  } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div  className='contact-body' >
                <Grid className='contact-grid'>
                    <Cell className='contact-cells' col={6}>
                        <h2> GURSIDAK SINGH </h2>
                        <img src='https://cdn4.iconfinder.com/data/icons/startup-general/512/man-3-512.png' alt='LOGO' height='250px' />
                        <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </Cell>

                    <Cell className='contact-cells' col={6}>
                        <h2>CONTACT ME</h2>
                            <div className='contact-list'>
                                 <List>
                                      <ListItem>

                                        <ListItemContent style={{fontSize:'40px' , fontFamily:'Anton'}}>
                                           <i className='fa fa-phone-square' aria-hidden='true'></i>
                                            7986473925
                                        </ListItemContent>
                                      </ListItem>

                                      <ListItem>
                                        <ListItemContent style={{fontSize:'40px' , fontFamily:'Anton'}}>
                                           <i className='fa fa-fax' aria-hidden='true'></i>
                                            123-567-987
                                        </ListItemContent>
                                      </ListItem>

                                      <ListItem>
                                        <ListItemContent style={{fontSize:'30px' , fontFamily:'Anton'}}>
                                           <i className='fa fa-envelope-square' aria-hidden='true'></i>
                                            gursidak@gmail.com
                                        </ListItemContent>
                                      </ListItem>

                                      <ListItem>
                                        <ListItemContent style={{fontSize:'30px' , fontFamily:'Anton'}}>
                                           <i className='fa fa-skype' aria-hidden='true'></i>
                                            My Skype ID
                                        </ListItemContent>
                                      </ListItem>

                                 </List>
                            </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact
