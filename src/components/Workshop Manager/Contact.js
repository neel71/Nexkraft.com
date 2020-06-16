import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField'
import { Form ,Col,Button} from 'react-bootstrap'
import buttonStyle from '../button.module.scss'
export class FormUserDetails extends Component {
    continue= e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
        render() {
            const {values, handleChange} =this.props;
        return (
            <MultiThemeProvider>
                <React.Fragment>
                    <div>                                                              
                        <Form method="Post"  action="https://formspree.io/xgenykdn">
                            <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name="name"  size="sm"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Mobile No.</Form.Label>
                                    <Form.Control type="text" placeholder="Mobile No." name="mobile"  size="sm"/>
                                    </Form.Group>
                                </Form.Row>                                                          
                             
                                <Form.Group  controlId="formGridPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" name="_replyto"  size="sm"/>
                                    <Form.Control type="hidden" placeholder="Email"
                                      value="" size="sm"/>
                                </Form.Group>  

                                {/* <Form.Group controlId="formGridState">
                                    <Form.Label>App List </Form.Label>
                                    <Form.Control as="select" defaultValue="WorkShop Manager" name="choice_item" size="sm">
                                        <option>Choose...</option>
                                        <option>iFleet</option>
                                        <option>nexParc</option>
                                        <option>NexCase Book</option>
                                        <option>Biz View</option>
                                        <option>Micro Finance</option>
                                        <option>NexFleet</option>
                                        <option>Data Tools</option>
                                        <option>NexComm Chatbot</option>
                                        <option>WorkShop Manager</option>
                                    </Form.Control>
                                </Form.Group>    */}
                            
                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Message...</Form.Label>
                                    <Form.Control as="textarea" rows="3" 
                                        placeholder="Write your message" name="message" size="sm"/>
                                </Form.Group>
                                
                                <div style={{textAlign:'right'}}>

                                     <button type="submit" className={buttonStyle.button_style}
                                     onClick={this.back}>
                                        <span className={buttonStyle.p_style}>&nbsp;&nbsp;Back&nbsp;&nbsp;</span>
                                    </button>
                                    &nbsp;&nbsp; 
                                    <button type="submit" className={buttonStyle.button_style}
                                     onClick={this.continue}>
                                        <span className={buttonStyle.p_style}>Submit</span>
                                    </button>   
                                </div>
                        </Form>        
                    </div>
                    <br/>  
                </React.Fragment>
            </MultiThemeProvider>
        )
    }
}
const styles = {
    button:{
        margin:15
    }
}
export default FormUserDetails
