import React from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { ArrowLeft, Building2, Globe, Mail, Phone, User } from "lucide-react";

const UserInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let userId = Number(id);
  const user = useSelector((state) => state.user);
  
  let userArray = user.user.find((ele) => ele.id === userId);
  const {name, address, company, username, phone, email, website} = userArray;
  const {city, zipcode, suite} = address;
  const {bs, catchPhrase} = company;

  const backFun = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">User Details</h1>
          <button
            onClick={backFun}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>

        {/* User Card */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* User Header */}
          <div className="px-6 py-8 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-600">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                <p className="text-blue-100">@{username}</p>
              </div>
            </div>
          </div>

          {/* User Details */}
          <div className="px-6 py-6 space-y-6">
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-5 h-5" />
                  <span>{website}</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-600">{suite}</p>
                <p className="text-gray-600">{city}, {zipcode}</p>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Company</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-900 font-medium">{company.name}</span>
                </div>
                <p className="text-gray-600 italic">"{catchPhrase}"</p>
                <p className="text-gray-600 mt-2">{bs}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;