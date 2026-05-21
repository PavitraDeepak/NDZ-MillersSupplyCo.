import "./App.css";
import loginImage from "./assets/login-image.png";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="container">
      <div className="login-wrapper">

        <div className="image-section">
          <img src={loginImage}/>
        </div>

        <div className="form-section">

          <div className="logo-container">
            <img src={logo} alt="Supplyco Logo" className="logo" /> 
            <h2>Welcome back</h2>
            <p>Sign in to continue to Supplyco Millers ERP</p>
          </div>

          <form className="login-form">
            <div className="input-group">
              <label>Email address</label>
              <input type="email" placeholder="Enter your email"  />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="options">
              <div className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>

              <a href="/">Forgot password?</a>
            </div>

            <button type="submit">Log In</button>
          </form>
        </div>
      </div>

      <p className="footer">
        © 2026 Supplyco Wheat & Flour Mill ERP. All rights reserved.
      </p>
    </div>
  );
}

export default App;