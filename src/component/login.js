import React, { useState } from 'react';
import './styles.css'; // External CSS file for styling

function LoginForm() {
  // State to manage the mode (true for dark mode, false for light mode)
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark' : 'light'}`}>
      <h4>Sfectoria</h4>
      <div className="box">
        <h2>Welcome Back!</h2>
        <form>
          <div className="input-group">
            <label className='email' htmlFor="Email">Email</label>
            <input type="text" id="email" name="email" placeholder='Enter your email'/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder='Enter password'/>
            <div className='rpass'>forgot password?</div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="mode-toggle">
      <label className="theme-switch">
        <input type="checkbox" className="checkbox" checked={darkMode} onChange={toggleMode} />
        <div className="container1">
          <div className="circle-container">
            <div className="sun-moon-container">
              <div className="moon">
                <div className="spot"></div>
                <div className="spot"></div>
                <div className="spot"></div>
              </div>
            </div>
          </div>
        </div>
      </label>
      </div>
    </div>
  );
}

export default LoginForm;
