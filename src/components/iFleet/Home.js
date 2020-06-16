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
                    <p>Looking for a systematic and beneficial fleet management service? 
                                            nexFleet pledges a digitalized process that reduces the stress both on 
                                            paper-based service and employees. nexFleet affiliates your fleet service 
                                            with Logbook, GPS tracking, Archive, Dashboard, Pick & Drop service and so on.
    
     
                                            </p>
                                            <strong><u>Core Feature of iFleet</u></strong>
                                            <br/><br/>
                                            <ul>
                                                <li>iFleet Driver</li>
                                                <li>iFleet User</li>
                                                <li>Pick & Drive</li>
                                                <li>Defect part Record</li>
                                                <li>Maximum Productivity</li>
                                                <li>Data History</li>
                                                <li>Vehicle Monitoring</li>
                                                <li>Database Synchronization</li>
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
