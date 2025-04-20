import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Trophy, 
  Users, 
  TrendingUp, 
  Tv, 
  DollarSign, 
  Smartphone, 
  ChevronRight 
} from "lucide-react";
import {
  FaChevronRight,
  FaDownload,
  FaUsers,
  FaCalendarAlt,
  FaApple,
  FaGooglePlay,
  FaPaperPlane
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data: tournaments = [] } = useQuery({
    queryKey: ['/api/tournaments/featured'],
  });

  const { data: stats = [] } = useQuery({
    queryKey: ['/api/stats'],
  });

  const features = [
    {
      icon: <Trophy className="text-2xl text-primary" />,
      title: "Tournament Creation",
      description: "Create custom tournaments with flexible brackets, team sizes, and prize pools tailored to your community's needs."
    },
    {
      icon: <TrendingUp className="text-2xl text-primary" />,
      title: "Real-time Statistics",
      description: "Track player and team performance with detailed analytics, match history, and progress tracking."
    },
    {
      icon: <Users className="text-2xl text-primary" />,
      title: "Team Management",
      description: "Build and manage your team with integrated communication tools, role assignments, and practice scheduling."
    },
    {
      icon: <Tv className="text-2xl text-primary" />,
      title: "Live Streaming",
      description: "Broadcast your tournaments with integrated streaming capabilities and spectator features for wider audience reach."
    },
    {
      icon: <DollarSign className="text-2xl text-primary" />,
      title: "Prize Distribution",
      description: "Automated prize pool management and secure payment distribution to winners with transparent transaction history."
    },
    {
      icon: <Smartphone className="text-2xl text-primary" />,
      title: "Mobile Access",
      description: "Stay connected to your tournaments and teams on-the-go with our fully-featured mobile application."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-10 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-rajdhani leading-tight">
                <span className="text-white block">Next Level</span>
                <span className="text-secondary">Gaming</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
                Join and compete in gaming tournaments on our platform. Take your gaming experience to new heights.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button 
                  onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-white font-orbitron py-3 px-8 rounded-md transition-all hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] transform hover:-translate-y-0.5 text-lg font-bold inline-flex items-center justify-center h-auto"
                >
                  <FaDownload className="mr-2" /> Download Now
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1577741314755-048d8525792e?auto=format&fit=crop&q=80" 
                  alt="Tournament Banner" 
                  className="w-full h-auto rounded-2xl mix-blend-luminosity opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                
              </div>
            </div>
          </div>
        </div>
        

      </section>

      {/* Featured Game Gallery */}
      <section id="tournaments" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-4">Featured <span className="text-secondary">Games</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Explore our most popular battle royale games with high-stakes tournaments and competitive gameplay.</p>
          </div>
          
          {/* Game Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Fire Game Card */}
            <div className="game-card rounded-xl overflow-hidden border border-gray-800 hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] transition-all hover:-translate-y-1 group relative">
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=1200" 
                  alt="Free Fire" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold font-rajdhani text-white mb-2">Free Fire</h3>
                  <p className="text-gray-300">The ultimate battle royale experience on mobile</p>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-primary/90 text-white text-sm font-bold py-2 px-4 rounded-full">
                    Mobile
                  </div>
                </div>
              </div>
            </div>
            
            {/* PUBG Game Card */}
            <div className="game-card rounded-xl overflow-hidden border border-gray-800 hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] transition-all hover:-translate-y-1 group relative">
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1590422749897-47049da3a00d?auto=format&fit=crop&q=80&w=1200" 
                  alt="PUBG" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold font-rajdhani text-white mb-2">PUBG</h3>
                  <p className="text-gray-300">The original battle royale sensation</p>
                </div>
                <div className="absolute top-6 right-6">
                  <div className="bg-primary/90 text-white text-sm font-bold py-2 px-4 rounded-full">
                    PC & Mobile
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call of Duty Game Card */}
            <div className="game-card rounded-xl overflow-hidden border border-gray-800 hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] transition-all hover:-translate-y-1 group relative md:col-span-2">
              <div className="relative h-[300px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1800" 
                  alt="Call of Duty" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter grayscale" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-4xl font-bold font-rajdhani text-white mb-4">Call of Duty</h3>
                  <p className="text-gray-300 text-xl mb-6">Coming Soon</p>
                  <div className="bg-primary/30 border border-primary/50 rounded-full px-8 py-3">
                    <span className="text-white font-orbitron font-bold">July 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-dark/60">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-4">Platform <span className="text-primary">Features</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our comprehensive esports platform provides everything you need to organize, manage, and compete in tournaments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card p-6 bg-dark/80 rounded-xl border border-gray-800 transition-all hover:border-primary/50 hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] hover:-translate-y-1">
                <div className="bg-primary/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-rajdhani text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <a href="#" className="text-secondary hover:text-secondary/80 font-semibold inline-flex items-center">
                  Learn More <ChevronRight className="ml-2 text-xs" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section id="download" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold font-rajdhani mb-6 leading-tight">
                Take Your Gaming <span className="text-primary">Experience</span> Everywhere
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Download our app and get instant access to tournaments, team management, and real-time notifications, all in the palm of your hand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.khelmela.app')} className="bg-dark hover:bg-dark/80 text-white flex items-center justify-center gap-4 py-3 px-6 rounded-lg transition-all hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] border border-gray-700 group">
                  <FaGooglePlay className="text-3xl text-white" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400 group-hover:text-secondary">Get it on</div>
                    <div className="text-lg font-bold font-rajdhani">Google Play</div>
                  </div>
                </button>
                <div className="relative">
                  <button disabled className="bg-dark/50 text-white/50 flex items-center justify-center gap-4 py-3 px-6 rounded-lg border border-gray-700 cursor-not-allowed">
                    <FaApple className="text-3xl" />
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Download on</div>
                      <div className="text-lg font-bold font-rajdhani">App Store</div>
                    </div>
                  </button>
                  <span className="absolute -top-3 right-0 bg-secondary/90 text-white text-xs font-bold py-1 px-2 rounded-full">Coming Soon</span>
                </div>
              </div>
              

            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative max-w-sm mx-auto md:mx-0">
                {/* Phone Mockup */}
                <div className="bg-dark rounded-[3rem] p-3 border-4 border-gray-800 shadow-2xl rotate-3 relative z-20">
                  <div className="rounded-[2.5rem] overflow-hidden border border-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80" 
                      alt="KhelMela App" 
                      className="w-full" 
                    />
                  </div>
                  
                </div>
                
                {/* Second Phone in Background */}
                <div className="absolute top-20 -left-8 md:-left-20 bg-dark rounded-[3rem] p-3 border-4 border-gray-800 shadow-2xl -rotate-6 hidden md:block w-4/5 z-10">
                  <div className="rounded-[2.5rem] overflow-hidden border border-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1590422749897-47049da3a00d?auto=format&fit=crop&q=80" 
                      alt="PUBG Tournament" 
                      className="w-full" 
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl z-0"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-dark/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-6">About <span className="text-primary">KhelMela</span></h2>
              <p className="text-gray-300 mb-6">
                KhelMela was founded by a team of passionate battle royale gamers and esports enthusiasts who saw the need for a comprehensive tournament platform that could serve players of all levels, from casual competitors to professional teams.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission is to make competitive gaming accessible to everyone while providing professional-grade tools that help tournament organizers create exceptional experiences for participants and spectators alike.
              </p>
              <p className="text-gray-300 mb-8">
                Since our launch in 2021, we've hosted over 10,000 tournaments across 20+ game titles, with players from more than 50 countries. We're committed to growing the esports ecosystem and supporting communities of all sizes.
              </p>
              

              
              <a href="#" className="inline-flex items-center text-secondary hover:text-secondary/80 font-orbitron font-bold">
                Learn more about our story <FaChevronRight className="ml-2" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden h-48 md:h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80" 
                    alt="Esports Tournament" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-32 md:h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1542751371-ed3d4a44ae7f?auto=format&fit=crop&q=80" 
                    alt="Gaming Setup" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden h-32 md:h-48">
                  <img 
                    src="https://images.unsplash.com/photo-1576240134190-1d8cf23f044d?auto=format&fit=crop&q=80" 
                    alt="Trophy Ceremony" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48 md:h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?auto=format&fit=crop&q=80" 
                    alt="Gaming Controller" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-rajdhani mb-4">Get In <span className="text-secondary">Touch</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Have questions about our platform or need assistance with tournaments? Our team is here to help you.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-dark/60 p-6 rounded-xl border border-gray-800 text-center hover:border-secondary/50 hover:shadow-[0_0_10px_rgba(0,209,255,0.5),_0_0_20px_rgba(0,209,255,0.3)] transition-all">
                <div className="bg-secondary/20 w-14 h-14 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-xl text-secondary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-rajdhani text-white mb-2">Email Us</h3>
                <p className="text-gray-400 mb-2">For general inquiries and support</p>
                <a href="mailto:support@khelmela.com" className="text-secondary hover:text-secondary/80 font-semibold">support@khelmela.com</a>
              </div>
              
              <div className="bg-dark/60 p-6 rounded-xl border border-gray-800 text-center hover:border-secondary/50 hover:shadow-[0_0_10px_rgba(0,209,255,0.5),_0_0_20px_rgba(0,209,255,0.3)] transition-all">
                <div className="bg-secondary/20 w-14 h-14 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-xl text-secondary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-rajdhani text-white mb-2">Live Support</h3>
                <p className="text-gray-400 mb-2">Chat with our support team</p>
                <a href="#" className="text-secondary hover:text-secondary/80 font-semibold">Open Live Chat</a>
              </div>
              
              <div className="bg-dark/60 p-6 rounded-xl border border-gray-800 text-center hover:border-secondary/50 hover:shadow-[0_0_10px_rgba(0,209,255,0.5),_0_0_20px_rgba(0,209,255,0.3)] transition-all">
                <div className="bg-secondary/20 w-14 h-14 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-xl text-secondary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-rajdhani text-white mb-2">Our Location</h3>
                <p className="text-gray-400 mb-2">Visit our headquarters</p>
                <a href="#" className="text-secondary hover:text-secondary/80 font-semibold">San Francisco, CA</a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-dark/60 rounded-xl border border-gray-800 p-8">
              <h3 className="text-2xl font-bold font-rajdhani text-white mb-6">Send us a message</h3>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 mb-2 font-medium">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-dark/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2 font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-dark/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-400 mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-dark/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors" 
                    placeholder="How can we help you?" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-400 mb-2 font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full bg-dark/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors" 
                    placeholder="Tell us how we can assist you..."
                  ></textarea>
                </div>
                
                <Button className="bg-primary hover:bg-primary/90 text-white font-orbitron py-3 px-8 rounded-md transition-all hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] transform hover:-translate-y-0.5 font-bold inline-flex items-center justify-center h-auto">
                  Send Message <FaPaperPlane className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-rajdhani mb-6">Ready to <span className="text-secondary">Dominate</span> The Battlefield?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">Join thousands of battle royale gamers on KhelMela, the fastest growing platform for Free Fire and PUBG tournaments.</p>
          
          <div className="flex justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-orbitron py-3 px-8 rounded-md transition-all hover:shadow-[0_0_10px_rgba(110,43,241,0.5),_0_0_20px_rgba(110,43,241,0.3)] transform hover:-translate-y-0.5 text-lg font-bold inline-flex items-center justify-center h-auto">
              <Link href="#download">
                <a className="inline-flex items-center">
                  <FaDownload className="mr-2" /> Download App
                </a>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
