import { useState } from 'react';
import { Filter, List, Map, AlertTriangle, Clock, Users, MapPin } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';
import IncidentMap from '../components/IncidentMap';
import mockIncidents from '../data/mockIncidents.json';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

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
    <div className="bg-gray-950 min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Live Dashboard</h1>
              <p className="text-gray-400 mt-1">Real-time global protest monitoring</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live</span>
              </div>
              <div className="text-gray-300 text-sm">
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Filters */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedFilter === filter.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs">
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Incidents */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <List className="h-5 w-5 mr-2" />
                Recent Incidents
              </h3>
              <div className="space-y-4">
                {getRecentIncidents().map((incident) => (
                  <div
                    key={incident.id}
                    className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer"
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Map Area */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-[800px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Map className="h-5 w-5 mr-2" />
                  Global Incident Map
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">High ({getFilteredCount('high')})</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">Medium ({getFilteredCount('medium')})</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Low ({getFilteredCount('low')})</span>
                  </div>
                </div>
              </div>
              
              {/* Leaflet Map */}
              <div className="w-full h-full">
                <IncidentMap selectedFilter={selectedFilter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

