import React from 'react';
import { ScrollText, AlertTriangle, Shield, UserX } from 'lucide-react';

const RulesPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#2d0353] to-[#1a0231] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold pixel-font text-center mb-12 text-purple-400">
          Server Rules
        </h1>

        <div className="space-y-8">
          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <ScrollText className="text-purple-400" />
              General Rules
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• No spamming or flooding chat</li>
              <li>• Respect all players and staff members</li>
              <li>• No advertising other GTPS servers</li>
              <li>• English only in main chat</li>
              <li>• No begging for items or admin rights</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <AlertTriangle className="text-purple-400" />
              Prohibited Actions
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• No hacking or using third-party tools</li>
              <li>• No scamming other players</li>
              <li>• No sharing exploits or bugs</li>
              <li>• No inappropriate world names or designs</li>
              <li>• No sharing personal information</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Shield className="text-purple-400" />
              Trading Rules
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• All trades must be completed in one transaction</li>
              <li>• No cross-trading with other games/servers</li>
              <li>• Report scammers to moderators immediately</li>
              <li>• Use trade worlds for buying/selling</li>
              <li>• No real-money transactions</li>
            </ul>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <UserX className="text-purple-400" />
              Punishment System
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>• First violation: Warning</li>
              <li>• Second violation: 24-hour ban</li>
              <li>• Third violation: 7-day ban</li>
              <li>• Severe violations: Permanent ban</li>
              <li>• Ban evasion: IP ban</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;