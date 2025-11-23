import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Award, BookOpen, Briefcase, Code, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Your Name</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('profile')} className="text-gray-700 hover:text-blue-600 transition">Profile</button>
              <button onClick={() => scrollToSection('resume')} className="text-gray-700 hover:text-blue-600 transition">Resume</button>
              <button onClick={() => scrollToSection('work')} className="text-gray-700 hover:text-blue-600 transition">Work Samples</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-600 transition">Education</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <button onClick={() => scrollToSection('profile')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Profile</button>
              <button onClick={() => scrollToSection('resume')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Resume</button>
              <button onClick={() => scrollToSection('work')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Work Samples</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Education</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero/Profile Section */}
      <section id="profile" className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold flex-shrink-0">
                YN
              </div>
              
              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Your Full Name</h1>
                <p className="text-xl text-blue-600 mb-4">Technology Program Graduate | Software Developer</p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Passionate technology professional with expertise in software development, web technologies, and modern programming frameworks. 
                  Dedicated to creating innovative solutions and continuously expanding technical knowledge. Strong foundation in full-stack 
                  development with experience in React, Node.js, Python, and database management. Committed to delivering high-quality code 
                  and exceptional user experiences.
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail size={18} />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={18} />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>Mississauga, ON</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6 justify-center md:justify-start">
                  <a href="#" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition">
                    <Github size={20} className="text-blue-600" />
                  </a>
                  <a href="#" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition">
                    <Linkedin size={20} className="text-blue-600" />
                  </a>
                  <a href="#" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition">
                    <Mail size={20} className="text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Briefcase className="text-blue-600" size={36} />
              Resume & Skills
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              <Download size={18} />
              <span className="hidden sm:inline">Download PDF</span>
            </button>
          </div>

          {/* Technical Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 md:p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Code size={24} className="text-blue-600" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">Python</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">Java</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">C#</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Web Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">React</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">Node.js</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">HTML/CSS</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">Tailwind</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">Git/GitHub</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">SQL</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm">AWS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900">Software Developer Intern</h3>
              <p className="text-blue-600 mb-2">Tech Company Inc. | Jan 2024 - Aug 2024</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Developed responsive web applications using React and Tailwind CSS</li>
                <li>Collaborated with cross-functional teams to implement new features</li>
                <li>Participated in code reviews and followed agile development practices</li>
                <li>Improved application performance by 30% through code optimization</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-xl font-bold text-gray-900">Junior Developer</h3>
              <p className="text-purple-600 mb-2">Startup Solutions | Sep 2023 - Dec 2023</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Built RESTful APIs using Node.js and Express</li>
                <li>Integrated third-party services and APIs</li>
                <li>Maintained and updated documentation for development processes</li>
                <li>Assisted in database design and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Samples Section */}
      <section id="work" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Code className="text-blue-600" size={36} />
            Work Samples & Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">Full-stack web application with shopping cart, payment integration, and admin dashboard.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">Node.js</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">MongoDB</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                    <Github size={16} />
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <Code size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">Collaborative task manager with real-time updates, team features, and analytics.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-600 rounded text-xs">Firebase</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs">Tailwind</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                    <Github size={16} />
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <Code size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Weather Dashboard</h3>
                <p className="text-gray-600 mb-4">Interactive weather application with API integration and data visualization.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">JavaScript</span>
                  <span className="px-2 py-1 bg-green-100 text-green-600 rounded text-xs">REST API</span>
                  <span className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs">Chart.js</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                    <Github size={16} />
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Link */}
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              <Github size={20} />
              View More Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Education & Acknowledgements Section */}
      <section id="education" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={36} />
            Education & Acknowledgements
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen size={24} className="text-blue-600" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900">Advanced Diploma in Technology</h4>
                  <p className="text-blue-600 font-semibold">Your College Name</p>
                  <p className="text-gray-600">2022 - 2025</p>
                  <p className="text-gray-700 mt-2">GPA: 3.8/4.0</p>
                  <p className="text-sm text-gray-600 mt-2">Relevant Coursework: Web Development, Database Management, Software Engineering, Data Structures, Mobile App Development</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900">High School Diploma</h4>
                  <p className="text-blue-600 font-semibold">Your High School</p>
                  <p className="text-gray-600">2018 - 2022</p>
                  <p className="text-gray-700 mt-2">Honor Roll Student</p>
                </div>
              </div>

              <div className="mt-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full justify-center">
                  <Download size={18} />
                  Download Official Transcript
                </button>
              </div>
            </div>

            {/* Certificates & Awards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award size={24} className="text-yellow-600" />
                  Certificates & Awards
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-yellow-500">
                    <h4 className="font-bold text-gray-900">AWS Certified Cloud Practitioner</h4>
                    <p className="text-sm text-gray-600">Amazon Web Services | 2024</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-900">React Developer Certificate</h4>
                    <p className="text-sm text-gray-600">Meta Professional Certificate | 2024</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                    <h4 className="font-bold text-gray-900">Dean's List</h4>
                    <p className="text-sm text-gray-600">Fall 2023, Winter 2024</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                    <h4 className="font-bold text-gray-900">Academic Excellence Award</h4>
                    <p className="text-sm text-gray-600">Technology Program | 2024</p>
                  </div>
                </div>
              </div>

              {/* Letters of Recommendation */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Letters of Recommendation</h3>
                <div className="space-y-3">
                  <button className="flex items-center justify-between w-full p-3 bg-white rounded-lg hover:shadow-md transition">
                    <span className="text-gray-700">Professor John Smith - Computer Science</span>
                    <Download size={18} className="text-blue-600" />
                  </button>
                  <button className="flex items-center justify-between w-full p-3 bg-white rounded-lg hover:shadow-md transition">
                    <span className="text-gray-700">Jane Doe - Internship Supervisor</span>
                    <Download size={18} className="text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-400 mb-6">Feel free to reach out for opportunities or collaborations</p>
          
          <div className="flex gap-4 justify-center mb-8">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <Mail size={24} />
            </a>
          </div>

          <p className="text-gray-500 text-sm">© 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}