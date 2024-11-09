import React from 'react';
import { Users, Trophy, Calendar, MessageSquare } from 'lucide-react';

const CommunityPage = () => {
  const events = [
    {
      title: "Weekly Drop Party",
      date: "Every Saturday",
      description: "Join us for massive item drops and chances to win rare items!"
    },
    {
      title: "Building Competition",
      date: "Every Sunday",
      description: "Show off your building skills and win amazing prizes!"
    },
    {
      title: "Trade World Festival",
      date: "First Friday Monthly",
      description: "Special trading event with bonus items and rare finds!"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#2d0353] to-[#1a0231] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold pixel-font text-center mb-12 text-purple-400">
          Community Hub
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Users className="text-purple-400" />
              Active Players
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Online Players:</span>
                <span className="text-green-400">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Registered Users:</span>
                <span className="text-purple-400">10,567</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Active Worlds:</span>
                <span className="text-blue-400">3,789</span>
              </div>
            </div>
          </div>

          <div className="bg-[#3d0463] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
              <Trophy className="text-purple-400" />
              Top Players
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>1. GrowKing</span>
                <span className="text-yellow-400">Level 99</span>
              </div>
              <div className="flex justify-between items-center">
                <span>2. BlockMaster</span>
                <span className="text-yellow-400">Level 98</span>
              </div>
              <div className="flex justify-between items-center">
                <span>3. PixelLord</span>
                <span className="text-yellow-400">Level 97</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#3d0463] p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
            <Calendar className="text-purple-400" />
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-[#2d0353] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-purple-300">{event.title}</h3>
                <p className="text-gray-400 mb-2">{event.date}</p>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-[#3d0463] p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold pixel-font mb-6 flex items-center gap-3">
            <MessageSquare className="text-purple-400" />
            Community Links
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-[#2d0353] rounded-lg hover:bg-purple-900 transition-colors">
              Discord
            </button>
            <button className="p-4 bg-[#2d0353] rounded-lg hover:bg-purple-900 transition-colors">
              Forums
            </button>
            <button className="p-4 bg-[#2d0353] rounded-lg hover:bg-purple-900 transition-colors">
              Wiki
            </button>
            <button className="p-4 bg-[#2d0353] rounded-lg hover:bg-purple-900 transition-colors">
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;