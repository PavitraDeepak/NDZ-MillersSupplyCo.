import useNavigate from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
                <p className="text-gray-700 mb-2"><span className="font-medium">Name:</span> John Smith</p>
                <p className="text-gray-700 mb-2"><span className="font-medium">Email:</span> johnsmith@example.com</p>
            </div>
        </div>
    );
}

export default Profile;