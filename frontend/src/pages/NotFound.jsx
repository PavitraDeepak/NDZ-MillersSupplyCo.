import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#dfe9e5] flex flex-col justify-center items-center p-5 font-sans overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-[#333] mb-4">Page Not Found</h1>
        <p className="text-[#7c8594] mb-6">The page you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#1d7c67] text-white py-2 px-4 rounded-md hover:bg-[#1a6b5a] transition-colors duration-200"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;