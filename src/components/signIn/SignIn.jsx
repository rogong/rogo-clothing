import React from 'react';
import './SignIn.scss'
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
      const {value, name} = event.target;

      this.setState({ [name]: value })

  }

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Signin with your email & password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            handleChange={this.handleChange}
            label='email'
            required
          />
      
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            label='password'
            handleChange={this.handleChange}
            required
          />
       
         <div className='buttons'>
         <CustomButton type="submit" >Sign In</CustomButton>
         <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
         {''}
         Google{''}
         </CustomButton>
         </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
