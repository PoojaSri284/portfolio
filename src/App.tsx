import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Download, Code, Cpu, BrainCircuit as Circuit, Award, BookOpen, Users, Trophy, Heart, Send, ExternalLink, ChevronDown, Menu, X, Search, Filter } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const projects = [
    {
      title: "Intuitively Responsive Environments",
      subtitle: "for Humans and Animals",
      description: "Automatic forest service provider reducing human intervention and enhancing wildlife safety. Awarded Best Project by EDYLABS.",
      tech: ["IoT", "Sensors", "Automation"],
      award: "Best Project - EDYLABS",
      fullDescription: "An innovative IoT-based solution designed to create responsive environments that automatically provide services for both humans and animals in forest areas. The system reduces the need for human intervention while significantly enhancing wildlife safety through intelligent monitoring and automated response mechanisms.",
      features: [
        "Automated water and food dispensing systems",
        "Wildlife movement tracking and analysis",
        "Emergency alert systems for forest rangers",
        "Solar-powered sustainable operation",
        "Real-time environmental monitoring"
      ],
      challenges: [
        "Harsh outdoor environmental conditions",
        "Power management in remote locations",
        "Wildlife behavior prediction algorithms",
        "Reliable communication in forest areas"
      ],
      outcome: "Successfully deployed in pilot forest areas, resulting in 40% reduction in human intervention and improved wildlife safety metrics."
    },
    {
      title: "Smart AI Based",
      subtitle: "Pre-Fall Detection",
      description: "AI-enabled wearable belt detecting pre-fall conditions in elders through hip movement monitoring.",
      tech: ["AI/ML", "Sensors", "Wearables"],
      award: "First Prize - Paper Presentation",
      fullDescription: "A revolutionary wearable device that uses advanced AI algorithms to predict and prevent falls in elderly individuals by continuously monitoring hip movement patterns and detecting pre-fall conditions before they occur.",
      features: [
        "Real-time hip movement analysis",
        "Machine learning fall prediction algorithms",
        "Immediate alert system to caregivers",
        "Comfortable wearable design",
        "Long battery life with wireless charging"
      ],
      challenges: [
        "Accurate movement pattern recognition",
        "Minimizing false positive alerts",
        "Comfortable long-term wearability",
        "Real-time processing constraints"
      ],
      outcome: "Achieved 95% accuracy in fall prediction with 2-second advance warning, potentially preventing serious injuries in elderly users."
    },
    {
      title: "Guardian Eye",
      subtitle: "Surveillance Rover",
      description: "Wi-Fi enabled surveillance system with object recognition and live monitoring capabilities.",
      tech: ["Computer Vision", "Wi-Fi", "Robotics"],
      award: null,
      fullDescription: "An autonomous surveillance rover equipped with advanced computer vision capabilities, providing real-time monitoring and object recognition for security applications in various environments.",
      features: [
        "Autonomous navigation and patrolling",
        "Real-time object detection and recognition",
        "Live video streaming via Wi-Fi",
        "Night vision capabilities",
        "Mobile app integration for remote control"
      ],
      challenges: [
        "Stable video transmission over Wi-Fi",
        "Power-efficient computer vision processing",
        "Obstacle avoidance in complex environments",
        "Weather-resistant design"
      ],
      outcome: "Successfully demonstrated autonomous surveillance capabilities with 98% object recognition accuracy and 8-hour continuous operation."
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, contact, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0AContact: ${contact}%0A%0AMessage:%0A${message}`;
    window.open(`mailto:poojasri5428@gmail.com?subject=${subject}&body=${body}`);
    setFormData({ name: '', contact: '', message: '' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform rotate-45">
                <Cpu className="w-4 h-4 text-white transform -rotate-45" />
              </div>
              <span className="text-white font-bold text-xl">Pooja Sri S</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-gray-300 hover:text-white hover:scale-105'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 mx-4 mb-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Removed Profile Image */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-green-500/10 rounded-full animate-ping"></div>
          
          {/* Enhanced 3D Floating Elements */}
          <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg transform rotate-45 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/5 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Circuit Lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <path
                d="M0,500 Q250,400 500,500 T1000,500"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M500,0 Q600,250 500,500 T500,1000"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
                  <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          {/* Enhanced 3D Logo/Icon with Professional Image */}
          {/* <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 animate-spin-slow transform-gpu">
              <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Professional Portrait"
                  className="w-40 h-40 rounded-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in transform-gpu">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Pooja Sri S
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-delay-1">
            <span className="inline-flex items-center space-x-2">
              <Circuit className="w-6 h-6 text-blue-400" />
              <span>Electronics & Communication Engineer</span>
            </span>
          </div>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
            Passionate about software and core technologies. Enthusiastic to contribute and grow in a dynamic organization.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-delay-3">
            <a
              href="mailto:poojasri5428@gmail.com"
              className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm transform-gpu hover:translateZ-10"
            >
              <Mail className="w-4 h-4" />
              <span>poojasri5428@gmail.com</span>
            </a>
            
            <a
              href="https://linkedin.com/in/pooja-sri-ps2845"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm transform-gpu hover:translateZ-10"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/PoojaSri284"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm transform-gpu hover:translateZ-10"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform-gpu hover:translateZ-10"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Pooja_Sri_S_Resume.pdf';
                link.click();
              }}
              className="flex items-center justify-center space-x-2 px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 transform-gpu hover:translateZ-10"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          
        </div>
      </section>

      {/* About Section with Profile Picture */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 relative">
            {/* Profile Picture in Top Left */}
            <div className="absolute -top-12 left-8 md:left-12">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 transform hover:scale-110 transition-all duration-300 shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
 <img 
  src="/portfolio/Profile.jpg" 
  alt="Pooja Sri S"
  className="w-20 h-20 rounded-full object-cover"
/>
                </div>
              </div>
            </div>

            <div className="pt-8 md:pt-4">
              <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Electronics and Communication Engineering undergraduate passionate about software and core technologies. 
                I thrive on creating innovative solutions that bridge the gap between hardware and software, with a particular 
                interest in IoT and VLSI technologies. My journey involves continuous learning and applying cutting-edge 
                technologies to solve real-world problems, always enthusiastic to contribute and grow in a dynamic organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {[
              {
                degree: "BE - Electronics and Communication Engineering",
                institution: "Kongunadu College of Engineering and Technology",
                period: "2022 – 2026",
                grade: "CGPA: 8.74 (up to 5th semester)",
                icon: BookOpen
              },
              {
                degree: "Higher Secondary Certificate (HSC)",
                institution: "Sri Krishna Matric Hr Sec School",
                period: "2021 – 2022",
                grade: "Percentage: 85%",
                icon: Award
              },
              {
                degree: "Secondary School Leaving Certificate (SSLC)",
                institution: "St. Peter's Matric School",
                period: "2019 – 2020",
                grade: "Percentage: 90.8%",
                icon: Trophy
              }
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-102 group transform-gpu hover:translateZ-10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 transform-gpu">
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-400 mb-1">{edu.institution}</p>
                    <p className="text-gray-400 mb-2">{edu.period}</p>
                    <p className="text-green-400 font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Search */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Search Section - Only in Projects */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button
                onClick={() => setIsSearchVisible(!isSearchVisible)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform-gpu hover:translateZ-10"
              >
                <Search className="w-5 h-5" />
                <span>Search Projects</span>
                <Filter className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            {isSearchVisible && (
              <div className="mt-6 max-w-md mx-auto animate-fade-in">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by title, technology, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                
                {/* Search Results Counter */}
                <div className="mt-3 text-center">
                  <span className="text-gray-400 text-sm">
                    {searchQuery ? `${filteredProjects.length} project${filteredProjects.length !== 1 ? 's' : ''} found` : `${projects.length} total projects`}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchQuery ? filteredProjects : projects).length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl">No projects found matching "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try adjusting your search terms</p>
                </div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              (searchQuery ? filteredProjects : projects).map((project, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group cursor-pointer transform-gpu hover:translateZ-10"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-purple-400">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.award && (
                    <div className="flex items-center space-x-2 text-green-400 mb-3">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.award}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                      Click to view details →
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-800/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 transform-gpu">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-xl text-purple-400">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Award Badge */}
              {selectedProject.award && (
                <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-6">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">{selectedProject.award}</span>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Challenges</h3>
                <div className="space-y-3">
                  {selectedProject.challenges.map((challenge: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">Project Outcome</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.outcome}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-purple-500/20">
                <button className="flex items-center justify-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform-gpu hover:translateZ-10">
                  <ExternalLink className="w-5 h-5" />
                  <span>View Demo</span>
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-3 border-2 border-purple-500/50 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 transform-gpu hover:translateZ-10"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Software",
                skills: ["C Programming", "Basic Python", "Java", "HTML", "Excel"],
                icon: Code,
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Hardware",
                skills: ["Circuit Design", "PCB Design", "Embedded Systems", "IoT Devices", "VLSI"],
                icon: Cpu,
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "Areas of Interest",
                skills: ["Internet of Things (IoT)", "VLSI Design", "Embedded Systems", "AI/ML Applications"],
                icon: Circuit,
                color: "from-green-500 to-teal-500"
              }
            ].map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group transform-gpu hover:translateZ-10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`bg-gradient-to-r ${skillGroup.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 transform-gpu`}>
                    <skillGroup.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience & Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Internship */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform-gpu hover:translateZ-10 hover:scale-102 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Internship</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg transform-gpu hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Embedded Systems Intern</h4>
                    <p className="text-purple-400">TechVolt, Coimbatore</p>
                    <p className="text-gray-400">June – July 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paper Presentations */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform-gpu hover:translateZ-10 hover:scale-102 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Paper Presentations</h3>
              <div className="space-y-4">
                {[
                  { title: "Smart AI Pre-Fall Detection", venue: "Kongu College", award: "First Prize" },
                  { title: "IoT: A Connected Future", venue: "Bannari Amman Institute", award: null },
                  { title: "Smart Antenna for Mobile Communication", venue: "DSEC", award: null }
                ].map((paper, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-medium">{paper.title}</p>
                      <p className="text-gray-400 text-sm">{paper.venue}</p>
                      {paper.award && (
                        <p className="text-green-400 text-sm font-semibold">{paper.award}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform-gpu hover:translateZ-10 hover:scale-102 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
              <div className="space-y-4">
                {[
                  { name: "Python Programming", provider: "IBM Digilab" },
                  { name: "HTML", provider: "IBM Digilab" }
                ].map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-white font-medium">{cert.name}</p>
                      <p className="text-gray-400 text-sm">{cert.provider}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Workshops & Achievements */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform-gpu hover:translateZ-10 hover:scale-102 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Workshops & Sports</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Workshops Attended</h4>
                  <div className="space-y-2">
                    {["Wearable Antennas", "IIT Shaastra Hackathon"].map((workshop, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                        <p className="text-gray-300">{workshop}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Sports Achievement</h4>
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <p className="text-gray-300">District-level Badminton Player</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="mt-8 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform-gpu hover:translateZ-10 hover:scale-102 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
              <Heart className="w-6 h-6 text-pink-400" />
              <span>Hobbies</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Reading books", "Creative writing", "Listening to music"].map((hobby, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm border border-pink-500/30 hover:scale-105 transition-transform duration-300 transform-gpu"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section placeholder for better navigation */}
      <div id="achievements" className="h-1"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg">
              Let's connect and discuss opportunities or collaborations
            </p>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Contact</label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Email or Phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform-gpu hover:translateZ-10"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Pooja Sri S. Designed with love and care.
          </p>
        </div>
      </footer>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(5px) rotate(-3deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
        
        .hover\\:translateZ-10:hover {
          transform: translateZ(10px);
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3B82F6, #8B5CF6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563EB, #7C3AED);
        }
      `}</style>
    </div>
  );
}

export default App;
