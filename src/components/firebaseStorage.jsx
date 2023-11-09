import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage,getDownloadURL,uploadBytes,ref } from "firebase/storage";
import { useEffect,react }  from 'react'


function firebaseStorage() {

  let app;
  let analytics;
  let storage;

  // Firebaseの設定
  function setupFirebase() {
    const firebaseConfig = {

      apiKey: "AIzaSyDgPUdH-dlnjaa7BqKSUkVKyY3kG5_eB3k",
    
      authDomain: "nightgroove-992a3.firebaseapp.com",
    
      projectId: "nightgroove-992a3",
    
      storageBucket: "nightgroove-992a3.appspot.com",
    
      messagingSenderId: "363941909332",
    
      appId: "1:363941909332:web:7fdd987d77f35e50256ec1",
    
      measurementId: "G-PDJEL3NLSW"
    
    };
    
    // Initialize Firebase
    
    app = initializeApp(firebaseConfig);
    
    analytics = getAnalytics(app);
  
    storage = getStorage(app);
  }

  useEffect(() => {
    setupFirebase();
  },[])

  // ファイルアップロード
  const fileUpload = async() => {
    const inputRef =  document.getElementById('Uploadfile');
    const file = inputRef.files[0];
    const fileRef = ref(storage, "test/" + file.name);
    uploadBytes(fileRef, file);
    console.log("upload");
  }

  // ファイルダウンロード
  const fileDownload = async() => {
    const imgRef = document.getElementById("img");
    const fileName = "b030.png";
    const fileRef = ref(storage, "test/" + fileName);
    const url = await getDownloadURL(fileRef);
    imgRef.setAttribute('src', url);
  }

  return (
    <>
      <input type="file" id='Uploadfile'/>
      <input type="button" value="Upload" onClick={fileUpload}/>
      <input type="button" value="Download" onClick={fileDownload}/>
      <img id="img"/>
    </>
  )
}

export default firebaseStorage
