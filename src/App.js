import './App.css';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


function App() {
  useEffect(() => {
    // Find the container and buttons
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    // Add event listeners to the buttons
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Clean up event listeners on component unmount
    return () => {
        registerBtn.removeEventListener('click', () => {
            container.classList.add("active");
        });

        loginBtn.removeEventListener('click', () => {
            container.classList.remove("active");
        });
    };
}, []);
  
  return (
    <div class="container" id="container">
        <div class="form-container sign-up">
            <form >
                <h1>Create Account</h1>
                <div class="social-icons">
                    <a href="#" class="icon">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                    </a>
                    <a href="#" class="icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" class="icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="#" class="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" 
                placeholder="Name" />
                <input type="email" 
                placeholder="Email" />
                <input type="password" 
                placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in">
            <form >
                <h1>Sign In</h1>
                <div class="social-icons">
                    <a href="#" class="icon">
                    <FontAwesomeIcon icon={faGooglePlusG} />
                    </a>
                    <a href="#" class="icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" class="icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="#" class="icon">
                    <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <span>or use your email and password</span>
                <input type="email" 
                placeholder="Email" />
                <input type="password" 
                placeholder="Password" />
                <a href="">Forgot your email or password?</a>
                <button>Sign in</button>
            </form>
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button class="hidden" id="login">Sign In</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Hello, User!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button class="hidden" id="register">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
