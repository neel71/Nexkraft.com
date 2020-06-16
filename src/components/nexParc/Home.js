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
                    <p>Starting from parking solutions, we are offering a variety of 
                                            parking related services to our customers. Just choose your desired service 
                                            , fill out your basic information and our team will 
                                            reach you. You will find this services in the drawer menu labeled 
                                            as 'Additional Services' under 'Service' option
     
                                            </p>
                                            <strong><u>Core Feature of nexParc</u></strong>
                                            <br/><br/>
                                            <ul>
                                                <li>Parking solution</li>
                                                <li>Simple Interface</li>
                                                <li>Easy Filtering</li>
                                                <li>Easy Reservation</li>
                                                <li>Easily Available</li>
                                                <li>Push Notification</li>
                                                <li>Parking Reservation</li>
                                                <li>Easy Guidelines</li>
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
