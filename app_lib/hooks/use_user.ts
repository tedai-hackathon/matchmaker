import { useState, useMemo, useRef } from 'react';
import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';


export const useUser = () => {
    const user = useRef<CognitoUser | null | any>(null);
    const email = useRef<string>('');


    const getUser = async () => {
        try {
            user.current = await Auth.currentAuthenticatedUser();
            email.current = user.current.attributes.email;
        } catch (error) {
            console.error("Error getting user", error);
            // handle the error accordingly
            user.current = null;
            email.current = "";
        }
    };

    useMemo(() => {
        getUser();
    }, []);

    return {user: user.current, email: email.current};
};
