import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import mockIncidents from '../data/mockIncidents.json';
import { Clock, Users, MapPin, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icons based on severity
const createCustomIcon = (severity) => {
  const colors = {
    high: '#ef4444',
    medium: '#f59e0b',
    low: '#10b981'
  };
  
  const color = colors[severity] || '#6b7280';
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [26, 26],
    iconAnchor: [13, 13],
    popupAnchor: [0, -13]
  });
};

const IncidentMap = ({ selectedFilter = 'all' }) => {
  const [filteredIncidents, setFilteredIncidents] = useState(mockIncidents);

  useEffect(() => {
    let filtered = mockIncidents;
    
    switch (selectedFilter) {
      case 'high':
        filtered = mockIncidents.filter(incident => incident.severity === 'high');
        break;
      case 'medium':
        filtered = mockIncidents.filter(incident => incident.severity === 'medium');
        break;
      case 'low':
        filtered = mockIncidents.filter(incident => incident.severity === 'low');
        break;
      case 'verified':
        filtered = mockIncidents.filter(incident => incident.verification === 'verified');
        break;
      case 'pending':
        filtered = mockIncidents.filter(incident => incident.verification === 'pending');
        break;
      default:
        filtered = mockIncidents;
    }
    
    setFilteredIncidents(filtered);
  }, [selectedFilter]);

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

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'hostile': return <AlertTriangle className="h-4 w-4 text-red-400" />;
      case 'tense': return <Shield className="h-4 w-4 text-yellow-400" />;
      case 'peaceful': return <CheckCircle className="h-4 w-4 text-green-400" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <MapContainer
      center={[40.7128, -74.0060]}
      zoom={2}
      style={{ height: '100%', width: '100%' }}
      className="rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {filteredIncidents.map((incident) => (
        <Marker
          key={incident.id}
          position={[incident.lat, incident.lng]}
          icon={createCustomIcon(incident.severity)}
        >
          <Popup className="custom-popup" maxWidth={350}>
            <div className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700 min-w-[300px]">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white leading-tight pr-2">
                  {incident.title}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getSeverityColor(incident.severity)}`}>
                  {incident.severity}
                </span>
              </div>

              {/* Location and Time */}
              <div className="flex items-center text-gray-300 text-sm mb-3 space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-blue-400" />
                  {incident.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-green-400" />
                  {formatTimeAgo(incident.timestamp)}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {incident.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-purple-400" />
                  <span className="text-gray-300">
                    {incident.participants.toLocaleString()} participants
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  {getSentimentIcon(incident.sentiment)}
                  <span className="text-gray-300 ml-2 capitalize">
                    {incident.sentiment}
                  </span>
                </div>
              </div>

              {/* Verification Status */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-sm">
                  {incident.verification === 'verified' ? (
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                  ) : (
                    <Clock className="h-4 w-4 mr-2 text-yellow-400" />
                  )}
                  <span className="text-gray-300 capitalize">
                    {incident.verification}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  ID: {incident.id}
                </div>
              </div>

              {/* Sources */}
              <div className="border-t border-gray-700 pt-3">
                <h4 className="text-sm font-semibold text-white mb-2">Sources:</h4>
                <div className="flex flex-wrap gap-1">
                  {incident.sources.map((source, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full"
                    >
                      {source}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {incident.tags && incident.tags.length > 0 && (
                <div className="border-t border-gray-700 pt-3 mt-3">
                  <h4 className="text-sm font-semibold text-white mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-1">
                    {incident.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default IncidentMap;

