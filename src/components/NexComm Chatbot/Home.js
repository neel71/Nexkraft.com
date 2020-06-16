import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField'
import buttonStyle from '../button.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export class FormUserDetails extends Component {
    continue= e =>{
        e.preventDefault();
        this.props.nextStep();
    }
        render() {
            const {values, handleChange} =this.props;
        return (
            <MultiThemeProvider>
                <React.Fragment>
                    <div>
                        <p>Nexcomm chat bot serves streamline interactions between people and service 
                        while enhancing customer experience. At the same time, it offers new opportunities 
                        to the organizations to improve customer engagement. It brings a fast and secure
                         way to connect customers.

                        </p>
                        <strong><u>Core Feature of NexComm Chatbot</u></strong>
                        <br/><br/>
                        <ul>
                            <li>Mature Conversation</li>
                            <li>language Effectiveness</li>
                            <li>System Integration</li>
                            <li>Short and Simple</li>
                            <li>Accessible Anywhere</li>
                            <li>Action Handler</li>
                            <li>Conversation Capable</li>
                            <li>Human-like Approach</li>
                        </ul>
                        <div style={{textAlign:"right"}}>
                            <button className={buttonStyle.button_style}
                            onClick={this.continue}>
                            <span className={buttonStyle.p_style}>Request for Query
                            &nbsp;<FontAwesomeIcon icon={faArrowRight} /></span>
                            
                            </button>
                        </div>
                    </div>
                </React.Fragment>
            </MultiThemeProvider>
        )
    }
}
export default FormUserDetails
