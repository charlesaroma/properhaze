import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// Dashboard Page Component
export const DashboardPage = ({ navigateTo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const users = [
    { id: 1, name: 'Brooklyn Simmons', avatar: 'https://placehold.co/40x40/FF5733/ffffff?text=BS' },
    { id: 2, name: 'Esther Howard', avatar: 'https://placehold.co/40x40/33FF57/ffffff?text=EH' },
    { id: 3, name: 'Courtney Henry', avatar: 'https://placehold.co/40x40/3357FF/ffffff?text=CH' },
    { id: 4, name: 'Darlene Robertson', avatar: 'https://placehold.co/40x40/FF33DA/ffffff?text=DR' },
    { id: 5, name: 'Kristin Watson', avatar: 'https://placehold.co/40x40/DA33FF/ffffff?text=KW' },
    { id: 6, name: 'Jane Cooper', avatar: 'https://placehold.co/40x40/33FFF1/ffffff?text=JC' },
    { id: 7, name: 'Robin Inzama', avatar: 'https://placehold.co/40x40/FFB833/ffffff?text=RI' },
  ];
  const events = [
    {
      id: 1,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'flag-czech',
    },
    {
      id: 2,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'flag-austria',
    },
    {
      id: 3,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'flag-belgium',
    },
    {
      id: 4,
      title: 'Macado Festival',
      description: 'Celebrate your day-maker with confetti',
      flag: 'flag-estonia',
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendConfetti = () => {
    if (selectedUser) {
      // In a real app, this would trigger an actual confetti animation or API call
      alert(`Sending confetti to ${selectedUser.name}! 🎉`);
      console.log(`Sending confetti to ${selectedUser.name}! 🎉`);
      setSelectedUser(null); // Clear selected user after sending
      setSearchQuery(''); // Clear search query
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-900 font-sans">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-50 mb-6">
            Reciprocate <span className="text-yellow-400">Delight</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Press the buzzer to launch a burst of confetti, creating a delightful surprise for your chosen recipient.
          </p>
          <button
            onClick={() => navigateTo('profile')}
            className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
          >
            Go to Profile
          </button>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Icon
              icon="mdi:magnify"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            />
            <input
              type="text"
              placeholder="search profile"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl text-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg"
            />
          </div>
          {/* User Results */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-gray-800 border border-gray-700 rounded-xl max-h-80 overflow-y-auto shadow-lg"
            >
              {filteredUsers.map((user) => (
                <motion.div
                  key={user.id}
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  onClick={() => setSelectedUser(user)}
                  className={`flex items-center p-4 cursor-pointer transition-all rounded-lg m-2 ${
                    selectedUser?.id === user.id ? 'bg-indigo-700/30 border-l-4 border-indigo-500' : ''
                  }`}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-gray-600"
                  />
                  <span className="text-gray-50 font-medium">{user.name}</span>
                  {selectedUser?.id === user.id && (
                    <Icon icon="mdi:check-circle" className="w-5 h-5 text-indigo-500 ml-auto" />
                  )}
                </motion.div>
              ))}
              {filteredUsers.length === 0 && (
                <div className="p-4 text-center text-gray-400">
                  No users found matching "{searchQuery}"
                </div>
              )}
            </motion.div>
          )}
          {/* Selected User & Buzzer */}
          {selectedUser && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-400 mb-4">
                Send confetti to <strong className="text-yellow-400">{selectedUser.name}</strong>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendConfetti}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center mx-auto"
              >
                <Icon icon="mdi:confetti" className="w-6 h-6 mr-2" /> Send Confetti
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-gray-50 text-center mb-12">Events today</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-700"
              >
                <div className={`h-32 rounded-lg mb-4 relative overflow-hidden`}>
                  {/* Flag representations - using direct Tailwind colors */}
                  {event.id === 1 && ( // Czech Republic flag colors
                    <div className="h-full flex">
                      <div className="w-1/2 bg-blue-700"></div>
                      <div className="w-1/2 flex flex-col">
                        <div className="h-1/2 bg-white"></div>
                        <div className="h-1/2 bg-red-700"></div>
                      </div>
                    </div>
                  )}
                  {event.id === 2 && ( // Austrian flag colors
                    <div className="h-full flex flex-col">
                      <div className="h-1/3 bg-red-600"></div>
                      <div className="h-1/3 bg-white"></div>
                      <div className="h-1/3 bg-red-600"></div>
                    </div>
                  )}
                  {event.id === 3 && ( // Belgian flag colors
                    <div className="h-full flex flex-col">
                      <div className="h-1/3 bg-black"></div>
                      <div className="h-1/3 bg-yellow-400"></div>
                      <div className="h-1/3 bg-red-600"></div>
                    </div>
                  )}
                  {event.id === 4 && ( // Estonian flag colors
                    <div className="h-full flex flex-col">
                      <div className="h-1/3 bg-blue-600"></div>
                      <div className="h-1/3 bg-black"></div>
                      <div className="h-1/3 bg-white"></div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-50 mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;
