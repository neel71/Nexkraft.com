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
                    <p>Effective data management is no easy feat. 
                                            Data tools is a solution to manage your data more 
                                            efficiently, saving your time and money. It provides a suite 
                                            of tools to help businesses control their data processes. This 
                                            module provides centralization of your most basic and necessary 
                                            information.
                                            </p>
                                            <strong><u>Core Feature of Data Tools</u></strong>
                                            <br/><br/>
                                            <ul>
                                                <li>Database Synchronization</li>
                                                <li>Survey Results</li>
                                                <li>Saving Feedback</li>
                                                <li>Better View</li>
                                                <li>Assign Tasks</li>
                                                <li>Cost Reduce</li>
                                                <li>Easy Design</li>
                                                <li>Data visualization</li>
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
