import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

import {
    FirebseInputContainer,
    TyguyLogoInput,
    SignOrUpBtn,
    UserInputEmail,
    UserInputPassword,
    UserInfo
} from "./FireBaseElements"

const useField = () => {
    const [ value, setValue ] = useState("");
	return { value, onChange: x => setValue( 'string' === typeof x ? x : x.target.value ) };
};

function FirebaseUser ( { action = 'signin' }) {
    const email = useField();
    const password = useField();
    const [ auth, setAuth ] = useState( null );
    const [ error, setError ] = useState( '' );
    const firebase = useFirebaseApp();
    const setReceivedData = data => setAuth( data );
    const setReceivedError = error => setError( error.message );

    const signIn = e => {
        e.preventDefault();
        setError( '' );
        firebase.auth()
            .signInWithEmailAndPassword(email.value, password.value)
            .then( setReceivedData )
            .catch( setReceivedError );
    };
    
    const signUp = e => {
        e.preventDefault();
        setError( '' );
        firebase.auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then( setReceivedData )
            .catch( setReceivedError );
    };

    const manage = 'signin' === action 
        ? {
            success: `Logged in as ${ auth?.user.email ?? '' }`,
            method: signIn,
            label: 'Sign In'
        }
        : {
            success: `Signed up as ${ auth?.user.email ?? '' }`,
            method: signUp,
            label: 'Sign Up'
        };

    return (
        <FirebseInputContainer>
            <div>
                {
                    auth ? (
                        <p>{ manage.success }</p>
                    ) : (
                        <>
                            <TyguyLogoInput>TyGuy Studios</TyguyLogoInput>
                            <form onSubmit={ manage.method }>
                                <UserInfo>
                                    <UserInputEmail { ...email } placeholder="Email" />
                                    <UserInputPassword { ...password } type="password" placeholder="Password" />
                                    <SignOrUpBtn type="submit">{ manage.label }</SignOrUpBtn>
                                </UserInfo>
                                {
                                    error && <p>{ error }</p>
                                }
                            </form>
                        </>
                    )
                }
            </div>
        </FirebseInputContainer>
    );
}

export default FirebaseUser;