import { Shield, Globe, Brain, Users, Target, Zap, AlertCircle, CheckCircle } from 'lucide-react';

const About = () => {
  const problems = [
    {
      icon: <AlertCircle className="h-8 w-8 text-red-400" />,
      title: "Information Overload",
      description: "Thousands of protest-related posts flood social media daily, making it impossible to manually track and verify incidents."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-orange-400" />,
      title: "Delayed Response",
      description: "Traditional monitoring methods often result in delayed awareness of critical situations, hindering effective response."
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-yellow-400" />,
      title: "Lack of Verification",
      description: "Misinformation and unverified reports create confusion and lead to poor decision-making during crisis situations."
    }
  ];

  const solutions = [
    {
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      title: "AI-Powered Processing",
      description: "Advanced machine learning algorithms process thousands of data points per minute, extracting relevant information automatically."
    },
    {
      icon: <Zap className="h-8 w-8 text-green-400" />,
      title: "Real-Time Analysis",
      description: "Instant processing and classification of incidents with immediate alerts for high-priority situations."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-400" />,
      title: "Multi-Source Verification",
      description: "Cross-reference multiple sources to verify incident authenticity and provide confidence scores."
    }
  ];

  const capabilities = [
    "Natural Language Processing for sentiment analysis",
    "Geospatial clustering of related incidents",
    "Multi-language support for global coverage",
    "Real-time data ingestion from 50+ sources",
    "Automated threat level assessment",
    "Historical trend analysis and prediction"
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Shield className="h-12 w-12 text-blue-400" />
              <Globe className="h-12 w-12 text-purple-400" />
              <Brain className="h-12 w-12 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Our Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transforming chaos into clarity through advanced OSINT and AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                In an era of global connectivity and rapid information flow, understanding 
                civil unrest and protest movements has become more critical than ever. 
                Our platform bridges the gap between raw data and actionable intelligence.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We believe that informed decision-making requires access to verified, 
                real-time information. By leveraging cutting-edge AI and OSINT techniques, 
                we transform the noise of social media and news into clear, actionable insights.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-semibold text-white">
                  Empowering informed decisions through intelligence
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Key Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-gray-300">Data Sources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">195</div>
                  <div className="text-gray-300">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">&lt;60s</div>
                  <div className="text-gray-300">Alert Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Challenge We Solve
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Traditional monitoring methods fall short in today's fast-paced, 
              information-rich environment. We've built a solution that addresses 
              these critical gaps.
            </p>
          </div>

          {/* Problems */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Current Problems</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-red-900/50 rounded-xl p-6 hover:border-red-800/50 transition-all duration-300"
                >
                  <div className="mb-4">{problem.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {problem.title}
                  </h4>
                  <p className="text-gray-400">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-green-900/50 rounded-xl p-6 hover:border-green-800/50 transition-all duration-300"
                >
                  <div className="mb-4">{solution.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h4>
                  <p className="text-gray-400">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Advanced Capabilities
              </h3>
              <ul className="space-y-4">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How AI & OSINT Work Together
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our platform combines Open Source Intelligence (OSINT) methodologies 
                with state-of-the-art artificial intelligence to create a comprehensive 
                monitoring solution.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Machine learning models trained on historical protest data can identify 
                patterns, predict escalation, and classify incidents with remarkable accuracy. 
                This allows for proactive rather than reactive responses.
              </p>
              <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">
                  Why This Matters
                </h4>
                <p className="text-gray-300">
                  In crisis situations, every minute counts. Our platform provides 
                  the situational awareness needed for governments, NGOs, journalists, 
                  and researchers to make informed decisions and respond appropriately 
                  to developing situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform serves diverse stakeholders who need reliable, 
              real-time intelligence about civil unrest and protest activities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-400" />,
                title: "Government Agencies",
                description: "Public safety and security planning"
              },
              {
                icon: <Users className="h-8 w-8 text-green-400" />,
                title: "NGOs & Activists",
                description: "Human rights monitoring and advocacy"
              },
              {
                icon: <Globe className="h-8 w-8 text-purple-400" />,
                title: "Media Organizations",
                description: "Breaking news and investigative reporting"
              },
              {
                icon: <Brain className="h-8 w-8 text-yellow-400" />,
                title: "Researchers",
                description: "Academic study of social movements"
              }
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

