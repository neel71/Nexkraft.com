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
                        <p>Stop being messy with the paper for managing workshop. 
                        Workshop Manager provides a short and simple way to manage 
                        your workshop’s reports. Monitor the daily process of vehicle 
                        documents, fleet assets and your precious time with the workshop manager.
                        </p>
                        <strong><u>Core Feature of WorkShop Manager</u></strong>
                        <br/><br/>
                        <ul>
                            <li>Database Synchronization</li>
                            <li>Manage Workflow</li>
                            <li>System Integration</li>
                            <li>Better View</li>
                            <li>Assign Tasks</li>
                            <li>Easy Dashboard</li>
                            <li>Work Management</li>
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
