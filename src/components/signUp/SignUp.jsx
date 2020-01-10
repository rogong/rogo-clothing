import React from 'react';
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import './SignUp.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit  = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            
          await  createUserProfileDocument(user, { displayName });

          
        this.setState({ 
            displayName:'',
            email: '', 
            password: '',
            confirmPassword: ''
         });

        } catch (error) {
            console.log(error);
        }
      };
    
      handleChange = (event) => {
          const {value, name} = event.target;
    
          this.setState({ [name]: value })
    
      }
    

    render() {
        const {displayName, email, password, confirmPassword } = this.state;

        return(
            <div className='sign-up'>
            <h1>I do not have an account</h1>
        <span>Sign up with your email & password</span>

        <form onSubmit={this.handleSubmit}>
        <FormInput
        type="text"
        value={displayName}
        name="displayName"
        handleChange={this.handleChange}
        label='Display Name'
        required
      />
          <FormInput
            type="email"
            value={email}
            name="email"
            handleChange={this.handleChange}
            label='Email'
            required
          />
      
          <FormInput
            type="password"
            value={password}
            name="password"
            label='Password'
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            label='Confirm Password'
            handleChange={this.handleChange}
            required
          />
       
         <div className='buttons'>
         <CustomButton type="submit" >Sign Up</CustomButton>
        
         </div>
        </form>
            </div>
        )
    }
}

export default SignUp;