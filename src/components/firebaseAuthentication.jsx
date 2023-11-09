import { useState } from "react";
import {signupWithEmail,signinWithEmail,signoutWithEmail} from "./firebaseConfig.jsx";


export default function FirebaseAuthentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Sign up with email and password.
   *
   * @param {Event} event
   */
  const signup = async (event) => {
    event.preventDefault();
    console.log(email);
    const user = await signupWithEmail(email, password); // Make sure signupWithEmail is implemented correctly.
  }

    /**
   * Sign up with email and password.
   *
   * @param {Event} event
   */
    const signin = async (event) => {
        event.preventDefault();
        console.log(email);
        await signinWithEmail(email, password); // Make sure signupWithEmail is implemented correctly.
      }

/**
   * Sign up with email and password.
   *
   * @param {Event} event
   */
    const signout  = async (event) => {
        event.preventDefault();
        await signoutWithEmail(); // Make sure signupWithEmail is implemented correctly.
      }

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
      <button type="button" onClick={signup}>Sign Up</button>

      <h2>Sign In</h2>
      <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
      <button type="button" onClick={signin}>Sign In</button>

      <h3>Sign Out</h3>
      <button onClick={signout}>Sign out</button>
    </div>
  );
}
