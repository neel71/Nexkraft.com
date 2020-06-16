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
                    <p>If you analyze your data & get insights only then you 
                                            can enrich your business. By implementing advanced analytics 
                                            into your business, smart and sharp decision-making follows. 
                                            Bizview not only delivers the analytics wherever you are but 
                                            also communicates the value whenever you need. 
                                            </p>
                                            <strong><u>Core Feature of NexCase Book</u></strong>
                                            <br/><br/>
                                            <ul>
                                                <li>Centralized data sources</li>
                                                <li>Data Preservation</li>
                                                <li>Data Examine</li>
                                                <li>Data Facilities</li>
                                                <li>Accessible from anywhere</li>
                                                <li>Customized workflow</li>
                                                <li>Design and UI</li>
                                                <li>Easy Input</li>
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
