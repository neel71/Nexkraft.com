import React, { Component } from 'react'
import Home from './Home'
import Contact from './Contact'

import Success from './Success'
export class UserForm extends Component {
    state={
        step: 1,
        firstName: '',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    nextStep=()=>{
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep=()=>{
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e =>{
        this.setState({[input]:e.target.value})
    }
     
    render() {
        const { step } = this.state;
        const { firstName, lastName,email,city,
            occupation,bio} = this.state;
        const values = { firstName,lastName,email,
            occupation,city,bio }
        switch(step){
            case 1 :
               return(
                   <Home
                       nextStep = {this.nextStep}
                       handleChange = {this.handleChange}
                       values = {values}
                   />
               ) 
            case 2:
                return (
                    <Contact
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                       handleChange = {this.handleChange}
                       values = {values}
                    />
                )

            case 3:
                return (
                    <Success/>
                )
        }
    }
}

export default UserForm
