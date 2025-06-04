
import { useEffect, useState } from 'react';
import { Users, Calendar, MapPin, Trophy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import FeatureCard from '@/components/FeatureCard';

const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('events');

  // Mock data for events
  const events = [
    {
      id: 1,
      title: 'Community Cleanup Day',
      date: 'October 15, 2023',
      time: '9:00 AM - 12:00 PM',
      location: 'Jonnalagadda Central Park',
      participants: 15,
      description: 'Join us for a community-wide cleanup effort to remove waste from the central park area. Equipment and refreshments will be provided.',
      imageUrl: 'https://images.unsplash.com/photo-1617350131921-c6fe8869fb68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      title: 'School Volunteer Program',
      date: 'October 22, 2023',
      time: '10:00 AM - 1:00 PM',
      location: 'Thatireddypalem School',
      participants: 25,
      description: 'Help educate students on waste management and assist in a school campus cleanup. Perfect for those interested in working with youth.',
      imageUrl: 'https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      title: 'Waste Segregation Workshop',
      date: 'November 5, 2023',
      time: '3:00 PM - 5:00 PM',
      location: 'Community Center',
      participants: 8,
      description: 'Learn practical skills for proper waste segregation at home. This workshop will cover different types of waste and how to handle them.',
      imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
  ];

  // Mock data for success stories
  const successStories = [
    {
      id: 1,
      title: 'River Bank Transformation',
      location: 'Jonnalagadda River',
      date: 'August 2023',
      description: 'Over 50 volunteers gathered to clean a heavily polluted riverbank, removing over 200kg of waste and planting native vegetation to prevent erosion.',
      impact: 'Restored natural habitat, improved water quality, created a recreational area for locals',
      imageUrl: 'https://images.unsplash.com/photo-1611805472154-708891a2ed35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      beforeAfter: true,
    },
    {
      id: 2,
      title: 'School Zone Clean-up',
      location: 'Thatireddypalem School Area',
      date: 'July 2023',
      description: 'Students and parents came together to clean illegal dumping sites around the school, installing waste bins and educational signage.',
      impact: 'Created a safer environment for students, reduced waste by 70% in the area, increased awareness',
      imageUrl: 'https://images.unsplash.com/photo-1593505681742-5f86507189b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      beforeAfter: false,
    },
  ];

  // Mock data for volunteer opportunities
  const volunteerRoles = [
    {
      title: 'Cleanup Volunteer',
      description: 'Join organized cleanup events to remove waste from public spaces and illegal dump sites.',
      commitment: 'Flexible, event-based',
      icon: <Users className="h-4 w-4" />,
      iconClassName: 'bg-sky-500',
    },
    {
      title: 'Education Ambassador',
      description: 'Help conduct workshops in schools and communities about proper waste management.',
      commitment: '4-6 hours per month',
      icon: <Users className="h-4 w-4" />,
      iconClassName: 'bg-amber-500',
    },
    {
      title: 'Waste Monitor',
      description: 'Survey and report waste dumping sites, track cleanup progress, and coordinate with authorities.',
      commitment: '2-3 hours per week',
      icon: <Users className="h-4 w-4" />,
      iconClassName: 'bg-nature-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-block bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-sm font-medium mb-3 animate-fade-in">
            Community Initiatives
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 animate-fade-up" style={{animationDelay: '100ms'}}>
            Join the movement for cleaner communities
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '200ms'}}>
            Discover cleanup events, success stories, and volunteering opportunities to help make Jonnalagadda and Thatireddypalem cleaner and healthier.
          </p>
        </div>

        <div className="mb-8 animate-fade-up" style={{animationDelay: '300ms'}}>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-2 bg-white rounded-full border border-slate-200 p-1.5 shadow-sm max-w-md mx-auto">
            <button 
              onClick={() => setActiveTab('events')}
              className={cn(
                "w-full sm:w-auto px-5 py-2 text-sm font-medium rounded-full transition-all",
                activeTab === 'events' 
                  ? "bg-nature-500 text-white shadow-sm" 
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              Upcoming Events
            </button>
            <button 
              onClick={() => setActiveTab('success')}
              className={cn(
                "w-full sm:w-auto px-5 py-2 text-sm font-medium rounded-full transition-all",
                activeTab === 'success' 
                  ? "bg-nature-500 text-white shadow-sm" 
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              Success Stories
            </button>
            <button 
              onClick={() => setActiveTab('volunteer')}
              className={cn(
                "w-full sm:w-auto px-5 py-2 text-sm font-medium rounded-full transition-all",
                activeTab === 'volunteer' 
                  ? "bg-nature-500 text-white shadow-sm" 
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              Volunteer
            </button>
          </div>
        </div>

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover-lift"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 shadow-sm">
                      {event.participants} participants
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-3 text-xs text-slate-500">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 text-slate-900">{event.title}</h3>
                    <div className="flex items-center mb-3 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{event.description}</p>
                    <div className="flex justify-between items-center">
                      <button className="text-sm font-medium text-nature-600 hover:text-nature-700 transition-colors flex items-center">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="text-sm px-3 py-1 bg-nature-50 text-nature-600 rounded-lg font-medium hover:bg-nature-100 transition-colors">
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm">
                View All Events
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === 'success' && (
          <div className="animate-fade-in">
            {successStories.map((story) => (
              <div 
                key={story.id}
                className="mb-8 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img 
                      src={story.imageUrl} 
                      alt={story.title} 
                      className="w-full h-full object-cover md:min-h-[300px]"
                    />
                    {story.beforeAfter && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-green-700 shadow-sm">
                        Before & After
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="flex items-center mb-2 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>{story.location}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{story.date}</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-3 text-slate-900">{story.title}</h3>
                    <p className="text-slate-600 mb-4">{story.description}</p>
                    
                    <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
                      <h4 className="text-sm font-semibold text-green-800 mb-2 flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-green-600" />
                        Impact
                      </h4>
                      <p className="text-sm text-green-700">{story.impact}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="flex -space-x-2 mr-3">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-7 h-7 rounded-full bg-sky-100 border-2 border-white flex items-center justify-center text-xs font-medium text-sky-700">
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                        <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-700">
                          +{Math.floor(Math.random() * 10) + 5}
                        </div>
                      </span>
                      <span className="text-xs text-slate-500">Volunteers contributed</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-6">
              <button className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm">
                View All Success Stories
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Volunteer Tab */}
        {activeTab === 'volunteer' && (
          <div className="animate-fade-in">
            <div className="mb-8 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      Make a Difference in Your Community
                    </h2>
                    <p className="text-slate-600 mb-4">
                      Volunteering is a rewarding way to help create cleaner, healthier spaces for everyone. Whether you have a few hours or can commit regularly, your contribution matters.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-sky-600" />
                        </div>
                        <p className="text-sm text-slate-700">Flexible time commitments to fit your schedule</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-sky-600" />
                        </div>
                        <p className="text-sm text-slate-700">Various roles based on your interests and skills</p>
                      </div>
                      <div className="flex items-start">
                        <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-sky-100 flex items-center justify-center">
                          <Check className="h-3 w-3 text-sky-600" />
                        </div>
                        <p className="text-sm text-slate-700">Training and guidance provided for all volunteers</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-sm h-60 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                        alt="Volunteers working" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium">Join 50+ active volunteers in our community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Volunteer Opportunities
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {volunteerRoles.map((role, index) => (
                <FeatureCard
                  key={index}
                  title={role.title}
                  description={role.description}
                  icon={role.icon}
                  iconClassName={role.iconClassName}
                  animationDelay={`${index * 100}ms`}
                  className="flex flex-col h-full"
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <button className="px-6 py-3 bg-nature-500 text-white font-medium rounded-lg shadow-sm hover:bg-nature-600 transition-all hover-lift">
                Sign Up as Volunteer
              </button>
              <p className="text-xs text-slate-500 mt-3">
                Already a volunteer? <a href="#" className="text-nature-600 hover:text-nature-700">Sign in to your account</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
