import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwkaBcaU9gYmOFMiHyqw2-zh33DK27kMg",
    authDomain: "tyguystudio-s-website.firebaseapp.com",
    projectId: "tyguystudio-s-website",
    storageBucket: "tyguystudio-s-website.appspot.com",
    messagingSenderId: "721457922018",
    appId: "1:721457922018:web:71ef1ae6a062b1cc1883bb"
  };

ReactDOM.render(
  <React.StrictMode>
    {/* cool firebase config thing */}
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


