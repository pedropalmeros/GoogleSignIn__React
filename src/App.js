import { useEffect } from 'react';
import './App.css';


function App() {
  function handleCallbackResponse (response){
    console.log(response);
    console.log("Encoded JWT ID token: " + response.credential);

    const body = {id_token: response.credential};

    fetch('http://localhost:8080/auth/google',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(body)
    })

  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id: "160235058947-42ri2mstjjl5epb49k68rau12sal41jp.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      {theme: "outline", size: "large"}
    )
  },[]);




  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
