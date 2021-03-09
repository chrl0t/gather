import * as firebase from "firebase";

import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABFgaESzRNl-O4DTL4XILradWPK1UxS0k",
  authDomain: "gather-2e231.firebaseapp.com",
  projectId: "gather-2e231",
  storageBucket: "gather-2e231.appspot.com",
  messagingSenderId: "263207888022",
  appId: "1:263207888022:web:1a4aa646598fccdd0d8eb7"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
