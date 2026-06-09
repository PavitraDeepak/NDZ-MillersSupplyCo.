import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from "../assets/login-image.png";
import logo from "../assets/logo.png";

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, rememberMe }),
        credentials: 'include'
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('accessToken', data.token);
        navigate('/dashboard', { replace: true }); 
      } else {
        setError(data.error || 'Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('Server connection failed. Is the backend running?');
    }
  };

  return (
    <div className="min-h-screen bg-[#dfe9e5] flex flex-col justify-center items-center p-5 font-sans overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex w-[880px] h-[530px] items-stretch justify-center bg-transparent gap-5 max-lg:w-full max-lg:h-auto max-lg:flex-col"> 
          
          <div className="w-[560px] h-[510px] bg-[#d6e1dd] rounded-xl overflow-hidden flex items-center justify-center max-lg:hidden">
            <img src={loginImage} alt="Login Illustration" className="w-full h-full object-cover" />
          </div>

          <div className="w-[450px] h-[510px] bg-white rounded-xl p-[32px_36px_24px_36px] flex flex-col items-center shadow-sm max-lg:w-full max-lg:rounded-lg">
            <div className="flex flex-col items-center text-center">
              <img src={logo} alt="Supplyco Logo" className="w-[100px] h-auto mb-0" />
              <h2 className="text-[16px] font-semibold text-[#677283] mt-0">Welcome back</h2>
              <p className="text-[12px] text-[#7f8896] mt-1">Sign in to continue to Supplyco Millers ERP</p>
            </div>

            {error && <p className="text-red-500 text-[11px] mt-2">{error}</p>}

            <form onSubmit={handleLogin} className="mt-6 w-full flex flex-col flex-1">
              <div className="w-full mb-3">
                <label className="block text-[12px] text-[#7c8594] mb-[5px] text-left">Email address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="w-full h-[42px] px-[14px] border border-[#dde3e8] rounded-[4px] text-[12px] text-[#5f6673] outline-none placeholder-[#a0a9b5] focus:border-[#1d7c67]" required/>
              </div>

              <div className="w-full mb-3">
                <label className="block text-[12px] text-[#7c8594] mb-[5px] text-left">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password" 
                  className="w-full h-[42px] px-[14px] border border-[#dde3e8] rounded-[4px] text-[12px] text-[#5f6673] outline-none placeholder-[#a0a9b5] focus:border-[#1d7c67]"  required/>
              </div>

              <div className="w-full flex justify-between items-center mt-[2px] mb-8 text-[11px]">
                <div className="flex items-center gap-[8px] text-[#7c8594]">
                  <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="appearance-none w-[14px] h-[14px] border border-[#cfd8dc] rounded-[3px] bg-white cursor-pointer checked:bg-[#1d7c67] checked:border-[#1d7c67]"
                  />
                  <span>Remember me</span>
                </div>
                <a href="/" className="text-[#7c8594] hover:underline">Forgot password?</a>
              </div>

              <button 
                type="submit" 
                className="w-full h-[42px] rounded-[4px] bg-[#1d7c67] hover:bg-[#166653] text-white text-[12px] font-semibold transition-all duration-300">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;