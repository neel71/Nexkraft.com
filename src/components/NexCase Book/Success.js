import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Link} from 'gatsby'
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
    return = e =>{
        e.preventDefault();
        this.props.firstStep();
    }
        render() {
            const {values, handleChange} =this.props;
        return (
            <MultiThemeProvider>
                <React.Fragment>
                    <h1 style={{
                        textAlign:'center',
                        color:'green',
                    }}>Thanks for your submission</h1>

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
