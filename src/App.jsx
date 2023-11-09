import FirebaseStorage from "./components/firebaseStorage"
import FirebaseAuthentication from "./components/firebaseAuthentication"
import './App.css'

function App() {
  return (
    <>
      <h1>Firebase Storage</h1>
      <FirebaseStorage />

      <hr />

      <h1>Cloud Firestore</h1>

      <hr />

      <h1>Firebase Authentication</h1>
      <FirebaseAuthentication />
    </>
  )
}

export default App
