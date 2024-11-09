import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#2d0353] to-[#1a0231] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="animate-float">
            <Gamepad2 className="w-20 h-20 mx-auto text-purple-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold pixel-font bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
            Welcome to CleoPS
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-6 pixel-font">
            <p className="text-xl text-purple-200 leading-relaxed">
              Step into a world where gaming meets community. CleoPS is more than just a server - it's your digital home for epic adventures, friendly competitions, and unforgettable moments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#3d0463] p-6 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-purple-300">Active Community</h3>
                <p className="text-gray-300">Join thousands of passionate gamers in daily events and discussions.</p>
              </div>
              
              <div className="bg-[#3d0463] p-6 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-purple-300">24/7 Support</h3>
                <p className="text-gray-300">Our dedicated team is always here to help you with any questions.</p>
              </div>
              
              <div className="bg-[#3d0463] p-6 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-purple-300">Custom Events</h3>
                <p className="text-gray-300">Weekly tournaments and special events with amazing prizes.</p>
              </div>
              
              <div className="bg-[#3d0463] p-6 rounded-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-3 text-purple-300">Unique Features</h3>
                <p className="text-gray-300">Experience exclusive bot commands and server features.</p>
              </div>
            </div>
            
            <Link to="/host" className="inline-block mt-12 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-lg transition-colors animate-bounce">
              Join Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;