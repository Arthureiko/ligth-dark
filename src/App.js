import React from 'react'
import useLocalStorage from 'use-local-storage';
import { FaApple, FaFacebook, FaTwitch,  FaLinkedin, FaGoogle, FaToggleOn } from 'react-icons/fa';
import './index.css'

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  
  const swicthThemes = () => { 
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
            <a href="https://www.google.com.br/"> <FaGoogle/></a >
            <a href="https://www.facebook.com/" ><FaFacebook/></a >
            <a  href="https://www.linkedin.com/"><FaLinkedin/></a >
            <a  href="https://twitter.com/"><FaTwitch/></a >
            <a  href="https://www.apple.com/"><FaApple/></a >

          </div>
          <p className="divider"><span>Or</span></p>
          <form>
            <label>E-mail</label>
            <input type="email" name="email" placeholder="Enter your email" />
            <label>Password</label>
            <input type="password" name="passwoed" placeholder="Enter your password" />
            <div className="remember">
              <input type="checkbox" name="checkbox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p> Forgot your password?</p>
            <a href="/" >Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div className="theme-toggle">
          <h2>Ligth Theme</h2>
          <i onClick={swicthThemes}><FaToggleOn/></i>
        </div>
      </div>
    </div>
  );
}

export default App;
