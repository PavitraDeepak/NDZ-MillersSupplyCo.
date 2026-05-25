import { useNavigate } from 'react-router-dom';
import loginImage from "../assets/login-image.png";
import logo from "../assets/logo.png";
function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#dfe9e5] flex flex-col justify-center items-center p-5 font-sans overflow-hidden">
      
      {/* Centralized container for both the Login card and the Footer */}
      <div className="flex flex-col items-center">

        {/* Login Wrapper */}
        <div className="flex w-[880px] h-[530px] items-stretch justify-center bg-transparent gap-5 max-lg:w-full max-lg:h-auto max-lg:flex-col"> 
          
          {/* Image Section */}
          <div className="w-[560px] h-[510px] bg-[#d6e1dd] rounded-xl overflow-hidden flex items-center justify-center max-lg:hidden">
            <img src={loginImage} alt="Login Illustration" className="w-full h-full object-cover" />
          </div>

          {/* Form Section */}
          <div className="w-[450px] h-[510px] bg-white rounded-xl p-[32px_36px_24px_36px] flex flex-col items-center shadow-sm max-lg:w-full max-lg:rounded-lg">
            
            <div className="flex flex-col items-center text-center">
              <img src={logo} alt="Supplyco Logo" className="w-[100px] h-auto mb-0" />
              <h2 className="text-[16px] font-semibold text-[#677283] mt-0">Welcome back</h2>
              <p className="text-[12px] text-[#7f8896] mt-1">Sign in to continue to Supplyco Millers ERP</p>
            </div>

            <form className="mt-6 w-full flex flex-col flex-1">
              <div className="w-full mb-3">
                <label className="block text-[12px] text-[#7c8594] mb-[5px] text-left">Email address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full h-[42px] px-[14px] border border-[#dde3e8] rounded-[4px] text-[12px] text-[#5f6673] outline-none placeholder-[#a0a9b5] focus:border-[#1d7c67]"
                />
              </div>

              <div className="w-full mb-3">
                <label className="block text-[12px] text-[#7c8594] mb-[5px] text-left">Password</label>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-full h-[42px] px-[14px] border border-[#dde3e8] rounded-[4px] text-[12px] text-[#5f6673] outline-none placeholder-[#a0a9b5] focus:border-[#1d7c67]"
                />
              </div>

              <div className="w-full flex justify-between items-center mt-[2px] mb-8 text-[11px]">
                <div className="flex items-center gap-[8px] text-[#7c8594]">
                  <input 
                    type="checkbox" 
                    className="appearance-none w-[14px] h-[14px] border border-[#cfd8dc] rounded-[3px] bg-white cursor-pointer checked:bg-[#1d7c67] checked:border-[#1d7c67]"
                  />
                  <span>Remember me</span>
                </div>
                <a href="/" className="text-[#7c8594] hover:underline">Forgot password?</a>
              </div>

<button 
      type="button" 
      onClick={() => navigate('/dashboard')} // Trigger navigation here
      className="w-full h-[42px] rounded-[4px] bg-[#1d7c67] hover:bg-[#166653] text-white text-[12px] font-semibold transition-all duration-300"
    >
      Log In
    </button>
            </form>
          </div>
        </div>

        {/* Footer Section: Width matched to form (450px) and centered */}
        <div className="w-[450px] mt-[18px] flex justify-center">
          <p className="text-[11px] text-[#8f98a3] text-center">
            © 2026 Supplyco Wheat & Flour Mill ERP. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;