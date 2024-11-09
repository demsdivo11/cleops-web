import React from 'react';
import { Crown, Shield, Star, User } from 'lucide-react';

const RolePage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#2d0353] to-[#1a0231] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold pixel-font text-center mb-12 text-purple-400">
          Server Roles
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl border-2 border-yellow-500">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Crown className="text-yellow-500" />
              Owner
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• Full server control and management</li>
              <li>• Create and modify server rules</li>
              <li>• Manage all staff members</li>
              <li>• Access to all commands</li>
              <li>• Server development decisions</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl border-2 border-red-500">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Shield className="text-red-500" />
              Administrator
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• Manage moderators</li>
              <li>• Handle player disputes</li>
              <li>• Access to admin commands</li>
              <li>• Monitor server performance</li>
              <li>• Organize events</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl border-2 border-green-500">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Star className="text-green-500" />
              Moderator
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• Enforce server rules</li>
              <li>• Handle basic player issues</li>
              <li>• Moderate chat</li>
              <li>• Report major issues to admins</li>
              <li>• Help new players</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl border-2 border-blue-500">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <User className="text-blue-500" />
              Player
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• Access to basic commands</li>
              <li>• Participate in events</li>
              <li>• Trade with other players</li>
              <li>• Create and join worlds</li>
              <li>• Use chat features</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-[#3d0463] p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold pixel-font mb-6 text-center">
            How to Apply for Staff
          </h2>
          <div className="text-center space-y-4">
            <p className="text-gray-200">
              Want to join our staff team? Applications are open for dedicated players!
            </p>
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-lg transition-colors pixel-font">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePage;