import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyDcljSmfPj-K2KFAIkSJovXh5vomh91q60",
  authDomain: "burger-queen-a4832.firebaseapp.com",
  databaseURL: "https://burger-queen-a4832.firebaseio.com",
  projectId: "burger-queen-a4832",
  storageBucket: "burger-queen-a4832.appspot.com",
  messagingSenderId: "358515366780"
};
firebase.initializeApp(config);
export default firebase;