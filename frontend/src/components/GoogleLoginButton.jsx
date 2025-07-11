import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleLoginButton({ onSuccess }) {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log('Google Login Success:', credentialResponse);
        onSuccess(credentialResponse);
      }}
      onError={() => {
        console.log('Google Login Failed');
      }}
    />
  );
}

export default GoogleLoginButton;
