import { useState } from 'react';
import { Users, ChevronDown, ChevronUp, Github, Linkedin, Mail, Award, Code, Database, Shield, Globe } from 'lucide-react';

const Team = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Former NSA analyst with 15+ years in OSINT and machine learning. PhD in Computer Science from MIT.",
      icon: <Code className="h-8 w-8 text-blue-400" />,
      expertise: ["AI/ML", "OSINT", "Cybersecurity"],
      social: {
        github: "#",
        linkedin: "#",
        email: "sarah@protestmonitor.com"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Data Science",
      bio: "Data scientist specializing in NLP and geospatial analysis. Former lead at Google's Crisis Response team.",
      icon: <Database className="h-8 w-8 text-green-400" />,
      expertise: ["NLP", "Geospatial Analysis", "Big Data"],
      social: {
        github: "#",
        linkedin: "#",
        email: "marcus@protestmonitor.com"
      }
    },
    {
      name: "Dr. Amira Hassan",
      role: "Director of Intelligence",
      bio: "Former UN peacekeeping intelligence officer with expertise in conflict analysis and crisis prediction.",
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      expertise: ["Conflict Analysis", "Crisis Management", "International Relations"],
      social: {
        github: "#",
        linkedin: "#",
        email: "amira@protestmonitor.com"
      }
    },
    {
      name: "James Thompson",
      role: "Lead Frontend Engineer",
      bio: "Full-stack developer with focus on real-time data visualization and user experience design.",
      icon: <Globe className="h-8 w-8 text-yellow-400" />,
      expertise: ["React", "Data Visualization", "UX Design"],
      social: {
        github: "#",
        linkedin: "#",
        email: "james@protestmonitor.com"
      }
    }
  ];

  const timeline = [
    {
      phase: "Data Ingestion",
      description: "Collect information from social media, news outlets, government sources, and citizen reports",
      details: "Our system monitors 50+ data sources in real-time, processing thousands of posts per minute"
    },
    {
      phase: "NLP Processing",
      description: "Extract key information using natural language processing and sentiment analysis",
      details: "Advanced algorithms identify location, participants, severity, and emotional tone of incidents"
    },
    {
      phase: "Verification & Clustering",
      description: "Cross-reference sources and group related incidents for accuracy",
      details: "Multi-source verification ensures reliability while clustering reduces duplicate reports"
    },
    {
      phase: "Intelligence Generation",
      description: "Generate actionable intelligence with threat assessment and predictions",
      details: "AI models predict escalation probability and provide confidence scores for each incident"
    },
    {
      phase: "Alert & Visualization",
      description: "Display on interactive map with real-time alerts for critical situations",
      details: "Color-coded severity levels and instant notifications keep users informed of developing situations"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the incident verification?",
      answer: "Our multi-source verification system achieves 95%+ accuracy by cross-referencing at least 3 independent sources for each incident. We use confidence scores to indicate reliability levels."
    },
    {
      question: "What data sources do you monitor?",
      answer: "We monitor 50+ sources including social media platforms (Twitter, Facebook, Telegram), news outlets, government feeds, NGO reports, and citizen journalism platforms across 195 countries."
    },
    {
      question: "How quickly are incidents detected and reported?",
      answer: "Our system processes data in real-time with average detection times under 60 seconds. Critical incidents trigger immediate alerts to relevant stakeholders."
    },
    {
      question: "Is the platform available for academic research?",
      answer: "Yes, we offer special academic licenses for researchers studying social movements, conflict analysis, and crisis management. Contact us for research partnership opportunities."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We follow strict data protection protocols, anonymize personal information, and comply with international privacy regulations. All data is encrypted and stored securely."
    },
    {
      question: "Can the system predict future protests or unrest?",
      answer: "Our AI models can identify patterns and risk factors that may indicate potential unrest, but we focus on monitoring existing incidents rather than prediction to avoid bias."
    },
    {
      question: "What makes your platform different from news monitoring?",
      answer: "Unlike traditional news monitoring, we provide real-time analysis, verification, geospatial clustering, sentiment analysis, and threat assessment specifically for civil unrest incidents."
    },
    {
      question: "How can organizations integrate with your platform?",
      answer: "We offer REST APIs, webhook notifications, and custom dashboard integrations. Our team works with clients to implement solutions that fit their specific workflows."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 text-blue-400 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              World-class experts in intelligence, technology, and crisis analysis 
              working together to decode global disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our diverse team brings together decades of experience in intelligence, 
              technology, and crisis management from leading organizations worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Our System Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our sophisticated pipeline transforms raw data into actionable intelligence 
              through a carefully orchestrated five-stage process.
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((step, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-grow bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.phase}
                  </h3>
                  <p className="text-lg text-gray-300 mb-3">
                    {step.description}
                  </p>
                  <p className="text-gray-400">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Get answers to common questions about our platform and capabilities.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-16 w-16 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recognition & Partnerships
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our work has been recognized by leading organizations in the intelligence, 
              technology, and humanitarian sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                UN Partnership
              </h3>
              <p className="text-gray-300">
                Collaborating with UN agencies on crisis monitoring and humanitarian response.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Academic Network
              </h3>
              <p className="text-gray-300">
                Research partnerships with leading universities studying social movements.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Tech Innovation Award
              </h3>
              <p className="text-gray-300">
                Recognized for excellence in AI-powered crisis intelligence systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

