import React from 'react';
import { Server, Cpu, Globe, Shield } from 'lucide-react';

const HostPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#2d0353] to-[#1a0231] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold pixel-font text-center mb-12 text-purple-400">
          Host Your GTPS
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Server className="text-purple-400" />
              Server Requirements
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• Minimum 2GB RAM</li>
              <li>• 2 CPU Cores</li>
              <li>• 20GB SSD Storage</li>
              <li>• Ubuntu 20.04 or higher</li>
              <li>• Stable Internet Connection</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Globe className="text-purple-400" />
              Hosting Features
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• 24/7 Uptime</li>
              <li>• DDoS Protection</li>
              <li>• Auto-Backup System</li>
              <li>• Custom Commands</li>
              <li>• Player Database Management</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Shield className="text-purple-400" />
              Security Features
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• Anti-Cheat System</li>
              <li>• IP Blacklist</li>
              <li>• Account Protection</li>
              <li>• Secure Login System</li>
              <li>• Real-time Monitoring</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Cpu className="text-purple-400" />
              Control Panel
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• User-friendly Interface</li>
              <li>• Real-time Statistics</li>
              <li>• Player Management</li>
              <li>• Server Configuration</li>
              <li>• Maintenance Tools</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-lg transition-colors pixel-font">
            Start Hosting Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostPage;