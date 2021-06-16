import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function SingUp() {
    return <>
            <h1 >SIGN UP</h1>
            <div className='sign-up'>
                <form className='sign-up-form'>
                <input type="email" name="emali" placeholder="Your email" className='sign-up-form-input'></input>
                <input type="password" placeholder="Password here" className='sign-up-form-input'></input>
                <input type="password" placeholder="Confirm Password" className='sign-up-form-input'></input>
                <Button buttonStyle="btn--outline" buttonSize="btn--large" className='sign-up-form-button' >SignUp</Button>
                </form>
            </div>
    </>
    
}