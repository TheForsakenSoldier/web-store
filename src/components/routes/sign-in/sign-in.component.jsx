import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../../utils/firebase/firebase.utils.js'
const SignIn = () => {
    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        createUserDocumentFromAuth(user)    
    }
  return (
    <div>
      <h1> I am the SignIn component</h1>
      <button onClick={logGoogleUser}>
        sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
