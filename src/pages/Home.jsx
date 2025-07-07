import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Zap, Eye, Brain, AlertTriangle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Eye className="h-8 w-8 text-blue-400" />,
      title: "Real-Time Monitoring",
      description: "24/7 surveillance of global protest activities using advanced OSINT techniques"
    },
    {
      icon: <Brain className="h-8 w-8 text-green-400" />,
      title: "AI-Powered Analysis",
      description: "Machine learning algorithms analyze sentiment, severity, and verification status"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: "Global Coverage",
      description: "Comprehensive tracking across all continents and major urban centers"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Instant Alerts",
      description: "Immediate notifications for high-severity incidents and escalating situations"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description: "Aggregate information from social media, news sources, and citizen reports"
    },
    {
      number: "02",
      title: "NLP Processing",
      description: "Natural language processing extracts key details and sentiment analysis"
    },
    {
      number: "03",
      title: "Clustering & Verification",
      description: "Group related incidents and verify authenticity through multiple sources"
    },
    {
      number: "04",
      title: "Visualization & Alerts",
      description: "Display on interactive map with real-time alerts for critical situations"
    }
  ];

  return (
    <div className="bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-red-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Globe className="h-16 w-16 text-blue-400 animate-pulse" />
              <Shield className="h-16 w-16 text-red-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              From Noise to{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
                Noesis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Decoding Global Disruption through Real-Time OSINT Intelligence
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Advanced AI-powered monitoring system that transforms chaotic protest data 
              into actionable intelligence for governments, organizations, and researchers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Live Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Intelligence Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology meets human insight to deliver unprecedented 
              situational awareness of global civil unrest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our sophisticated pipeline transforms raw data into actionable intelligence 
              through a four-stage process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live Dashboard Preview
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience real-time monitoring with our interactive global map 
              showing current protest activities and their severity levels.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
              <div className="text-center">
                <Globe className="h-16 w-16 text-blue-400 mx-auto mb-4 animate-spin" />
                <p className="text-gray-300 text-lg mb-4">Interactive Map Loading...</p>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Full Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-12 border border-gray-700">
            <AlertTriangle className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Ahead of Global Events
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join organizations worldwide who rely on our intelligence platform 
              for critical decision-making and risk assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

