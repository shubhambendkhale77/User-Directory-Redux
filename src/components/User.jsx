import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/actions/userActions";
import { Link } from "react-router";
import { User as UserIcon, Phone, Globe, AtSign } from "lucide-react";

const User = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  if (user.loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-200 rounded-full mb-4"></div>
          <div className="text-xl text-gray-600">Loading user data...</div>
        </div>
      </div>
    );
  }

  if (user.error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-red-50">
        <div className="text-red-600 text-xl bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl">⚠️</span>
          </div>
          {user.error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            User Directory
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {user?.user?.map((userData) => (
            <div 
              key={userData.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <UserIcon size={32} className="text-blue-500" />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {userData.name}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <AtSign className="w-5 h-5 mr-3" />
                    <span>{userData.username}</span>
                  </div>

                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>{userData.phone}</span>
                  </div>

                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Globe className="w-5 h-5 mr-3" />
                    <span>{userData.website}</span>
                  </div>
                </div>

                <Link 
                  to={`/user/${userData.id}`}
                  className="mt-6 w-full inline-block px-6 py-3 text-center text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;