// @ts-nocheck
import React from 'react';
import useToken from './components/useToken';
import Login from './components/Login';
import MainRouter from './MainRouter';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import GoogleLogin from 'react-google-login';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
//import './components/Login.css';

interface AppState {

}

// class App extends React.Component<{/*default props*/}, AppState> {
    

//     constructor(props : any) {
//         super(props);
//     }

//     render() {
//         return <>
//             <MainRouter />
//         </>
//     }
// }

function setToken(userToken) {
    localStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function App() {
    //const { token, setToken } = useToken();
    //if(!token || getToken() != "Insert Token") {
    //    // @ts-ignore
    //  return <Login setToken={setToken} />
    //}
  
    //return (
    //    <MainRouter />
    //);

    //responseGoogle = (response)=>{
    //  console.log(response);
    //  console.log(response.profileObj);
    //}
    
    const { token, setToken } = useToken();

    if(!token || getToken() != "INSERT_GOOGLE_TOKEN") {

      return (
        <div className="login-wrapper">
        <main>
        <center>
          <div class="section"></div>

          <h1>Real Estate Analytics Dashboard</h1>
    
          <h5 class="indigo-text">Please log in to access your account:</h5>
          <div class="section"></div>
    
          <div class="container">
            <div class="z-depth-1 grey lighten-4 row" id="thisOne">
    
            <div>
          <GoogleLogin
            clientId="Insert Client ID"
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
            />
        </div>
            </div>
          </div>
        </center>
        </main>
        </div>
      )
    }

    return (
        <MainRouter />
    );
    
  }

  const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    setToken(data);
    if (getToken() == "3c92f90e047af0f002cb34c6f0f831a0") {
      window.location.reload();
    }
  }

  App.propTypes = {
    setToken: PropTypes.func.isRequired
  };

export default App;

// <iframe src={`https://${"admin"}:${"4PhIydjIwv4^MzzG0Xn#bqyYTSq@&PGvr5qa37St5G5O2ty$pl2GjpoI9w0*0mt36zD^eMw!WBuEYUbIvrworjinh5rlu@%86z^"}@authproxy.http://3.15.180.37:3000/d-solo/PDhby9-Gk/first-dashboard?orgId=1&from=1611580817014&to=1611602417014&panelId=2`} />
