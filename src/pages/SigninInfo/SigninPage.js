import React, {useState} from 'react'
import FirebaseUser from '../FirebaseUser';

import {
    SignInName,
    SignInButton,
    SigninContainer
} from "./SigninData"

const SigninPage = () => {
    const [ signInOrUp, setSignInOrUp ] = useState("");
    return (
      <SigninContainer>
      <SignInName>
      {
        signInOrUp ? (
          <FirebaseUser action={ signInOrUp } />
        ) : (
          <>
            <SignInButton type="button" onClick={ () => setSignInOrUp("signin") } >Log in with existing user</SignInButton>
            <SignInButton type="button" onClick={ () => setSignInOrUp("signup") } >Create a new user</SignInButton>
          </>
        )
      }
      </SignInName>
    </SigninContainer>
    );
}

export default SigninPage
