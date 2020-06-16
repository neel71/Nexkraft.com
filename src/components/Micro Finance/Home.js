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
                    <p>Micro Finance management is no easy feat. 
                                            Micro Finance is a solution to manage anyone 
                                            work more efficiently, saving your time and money. It 
                                            provides a suite of tools to help anyone control their 
                                            processes. This module provides centralization of your 
                                            most basic and necessary financing functions.
    
    
                                            </p>
                                            <strong><u>Core Feature of Micro Finance</u></strong>
                                            <br/><br/>
                                            <ul>
                                                <li>Better View</li>
                                                <li>Language Compatibility</li>
                                                <li>Data Storage</li>
                                                <li>Database Synchronization</li>
                                                <li>Data visualization</li>
                                                <li>Data Managing</li>
                                                <li>User Environment</li>
                                                <li>Assign Tasks</li>
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
