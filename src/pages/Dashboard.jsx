import { useState } from 'react';
import { Filter, List, Map, AlertTriangle, Clock, Users, MapPin } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import IncidentMap from '../components/IncidentMap';
import mockIncidents from '../data/mockIncidents.json';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedIncident, setExpandedIncident] = useState(null);

  // Simulate loading
  setTimeout(() => setIsLoading(false), 2000);

  const getFilteredCount = (filterType) => {
    switch (filterType) {
      case 'high':
        return mockIncidents.filter(incident => incident.severity === 'high').length;
      case 'medium':
        return mockIncidents.filter(incident => incident.severity === 'medium').length;
      case 'low':
        return mockIncidents.filter(incident => incident.severity === 'low').length;
      case 'verified':
        return mockIncidents.filter(incident => incident.verification === 'verified').length;
      case 'pending':
        return mockIncidents.filter(incident => incident.verification === 'pending').length;
      default:
        return mockIncidents.length;
    }
  };

  const filters = [
    { id: 'all', label: 'All Incidents', count: getFilteredCount('all') },
    { id: 'high', label: 'High Severity', count: getFilteredCount('high') },
    { id: 'medium', label: 'Medium Severity', count: getFilteredCount('medium') },
    { id: 'low', label: 'Low Severity', count: getFilteredCount('low') },
    { id: 'verified', label: 'Verified', count: getFilteredCount('verified') },
    { id: 'pending', label: 'Pending', count: getFilteredCount('pending') }
  ];

  const getRecentIncidents = () => {
    return mockIncidents
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 5);
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const incidentTime = new Date(timestamp);
    const diffInHours = Math.floor((now - incidentTime) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Less than 1 hour ago';
    if (diffInHours === 1) return '1 hour ago';
    return `${diffInHours} hours ago`;
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-900/20';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20';
      case 'low': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-950 min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" text="Loading global intelligence dashboard..." />
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen font-['Inter']">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-1">Live Dashboard</h1>
              <p className="text-gray-400 mt-1">Real-time global protest monitoring</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Live Button */}
              <button
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-red-900/30 text-red-400 font-semibold shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 animate-pulse"
                style={{ minWidth: '90px' }}
                type="button"
                tabIndex={0}
              >
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                <span>Live</span>
              </button>
              {/* Last Updated Button */}
              <button
                className="flex items-center px-4 py-2 rounded-full bg-slate-800/60 text-gray-300 font-medium shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ minWidth: '160px' }}
                type="button"
                tabIndex={0}
              >
                Last updated: {new Date().toLocaleTimeString()}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Incidents - moved above Filters */}
            <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-6 shadow-xl glassmorphism">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <List className="h-5 w-5 mr-2" />
                Recent Incidents
              </h3>
              <div className="space-y-4">
                {getRecentIncidents().map((incident) => {
                  const isExpanded = expandedIncident === incident.id;
                  return (
                    <motion.div
                      key={incident.id}
                      className={`bg-slate-700/60 rounded-lg p-4 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40 border border-transparent ${isExpanded ? 'border-blue-500/60 shadow-blue-500/40 scale-105' : ''}`}
                      onClick={() => setExpandedIncident(isExpanded ? null : incident.id)}
                      initial={false}
                      animate={{ scale: isExpanded ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white font-medium text-sm leading-tight">
                          {incident.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs space-x-4">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {incident.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatTimeAgo(incident.timestamp)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center text-gray-400 text-xs">
                          <Users className="h-3 w-3 mr-1" />
                          {incident.participants.toLocaleString()} participants
                        </div>
                        {incident.verification === 'verified' && (
                          <div className="text-green-400 text-xs font-medium">
                            ✓ Verified
                          </div>
                        )}
                      </div>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            className="mt-4 bg-slate-800/80 rounded-lg p-4 border border-blue-500/40 shadow-xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="mb-2 text-sm text-blue-300 font-semibold flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {incident.location}
                            </div>
                            <div className="mb-2 text-sm text-gray-300">
                              {incident.description}
                            </div>
                            <div className="mb-2 text-xs text-gray-400">
                              <span className="font-semibold">Sources:</span> {incident.sources.join(', ')}
                            </div>
                            <div className="mb-2 text-xs text-gray-400">
                              <span className="font-semibold">Tags:</span> {incident.tags && incident.tags.length > 0 ? incident.tags.map(tag => `#${tag}`).join(' ') : 'None'}
                            </div>
                            <div className="flex items-center mt-2">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                              <span className="text-xs text-blue-400">Location highlighted on map</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Map Area */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-6 shadow-xl glassmorphism">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent flex items-center">
                  <Map className="h-5 w-5 mr-2" />
                  Global Incident Map
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    className="flex items-center space-x-2 text-sm px-3 py-1 rounded-lg bg-red-900/30 text-red-400 font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>High ({getFilteredCount('high')})</span>
                  </button>
                  <button
                    className="flex items-center space-x-2 text-sm px-3 py-1 rounded-lg bg-yellow-900/30 text-yellow-400 font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Medium ({getFilteredCount('medium')})</span>
                  </button>
                  <button
                    className="flex items-center space-x-2 text-sm px-3 py-1 rounded-lg bg-green-900/30 text-green-400 font-semibold transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-500/20 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Low ({getFilteredCount('low')})</span>
                  </button>
                </div>
              </div>
              {/* Leaflet Map - fixed overflow, responsive, rounded, border */}
              <div className="w-full h-[400px] sm:h-[350px] xs:h-[250px] overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                <div className="w-full h-full">
                  <IncidentMap selectedFilter={selectedFilter} />
                </div>
              </div>
              {/* Filters - now horizontal below the map, with heading and 3x3 grid */}
              <div className="mt-6">
                <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6 max-w-2xl">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`flex items-center justify-between space-x-2 text-sm px-4 py-2 rounded-lg font-semibold transition-transform duration-300 bg-gradient-to-r from-blue-700/30 via-purple-700/30 to-pink-700/30 hover:scale-105 hover:shadow-lg hover:bg-blue-700/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40 border border-slate-700/60 backdrop-blur-sm ${
                        selectedFilter === filter.id
                          ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-blue-500/40 scale-105 border-blue-400'
                          : 'text-gray-300'
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span className="bg-slate-600 text-white px-2 py-1 rounded-full text-xs">
                        {filter.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

