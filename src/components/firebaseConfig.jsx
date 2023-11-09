import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyDgPUdH-dlnjaa7BqKSUkVKyY3kG5_eB3k",
  
    authDomain: "nightgroove-992a3.firebaseapp.com",
  
    projectId: "nightgroove-992a3",
  
    storageBucket: "nightgroove-992a3.appspot.com",
  
    messagingSenderId: "363941909332",
  
    appId: "1:363941909332:web:7fdd987d77f35e50256ec1",
  
    measurementId: "G-PDJEL3NLSW"
  
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



export const signupWithEmail = async (email, password) => {
    try {
        const auth = getAuth();
        const user = await createUserWithEmailAndPassword(auth,email, password);
        await sendEmailVerification(auth.currentUser);
        console.log(user);
        return user;
    } catch (error) {
        console.error(error);
        alert("メールアドレスとパスワード(5字以上)を正しく入力してください。");
        throw error; 
    }
};

export const signinWithEmail = async (email, password) => {
    try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth,email, password);
        console.log(user);
    } catch (error) {
        console.error(error);
        alert("パスワードまたはメールアドレスが間違っています。");
        throw error; 
    }
};

export const signoutWithEmail = async (email, password) => {
    const auth = getAuth();
    console.log(auth.currentUser);
    await signOut(auth);
    console.log(auth.currentUser);
};