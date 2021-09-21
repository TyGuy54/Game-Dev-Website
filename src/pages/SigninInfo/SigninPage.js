import React, {useState} from 'react'
import FirebaseUser from '../FirebaseUser';

import {
    SignInName,
    SignInButton,
    SigninContainer,
    SignInPass,
    TyguyLogo,
    SignInForom,
    //TestBox
} from "./SigninData"

const SigninPage = () => {
    const [ signInOrUp, setSignInOrUp ] = useState("");
    return (
      <SigninContainer>
        <div>
          {
            signInOrUp ? (
              <FirebaseUser action={ signInOrUp } />
            ) : (
              <>
                <TyguyLogo>Tyguy Studios</TyguyLogo>
                  <SignInForom>
                    <SignInName>
                      <SignInButton type="button" onClick={ () => setSignInOrUp("signin") } >Log in with existing user</SignInButton>
                    </SignInName>
                    <SignInPass>
                      <SignInButton type="button" onClick={ () => setSignInOrUp("signup") } >Create a new user</SignInButton>
                    </SignInPass>
                  </SignInForom>
              </>
            )
          }
        </div>
      </SigninContainer>
    );
}

export default SigninPage
