
import { useEffect, useState } from 'react';
import { BookOpen, RecycleIcon, Info, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import FeatureCard from '@/components/FeatureCard';

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'Understanding Types of Waste',
      excerpt: 'Learn about different waste categories and how they should be handled.',
      category: 'basics',
      readTime: '5 min',
      imageUrl: 'https://images.unsplash.com/photo-1611284446314-9baa9449d79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      title: 'Health Impacts of Improper Waste Disposal',
      excerpt: 'Discover how improper waste management affects community health.',
      category: 'impacts',
      readTime: '7 min',
      imageUrl: 'https://images.unsplash.com/photo-1605600659873-d808a13e4eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      title: 'Recycling at Home: A Beginner\'s Guide',
      excerpt: 'Simple steps to start recycling at home and reduce your waste footprint.',
      category: 'recycling',
      readTime: '6 min',
      imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 4,
      title: 'Composting: Turn Food Waste into Garden Gold',
      excerpt: 'How to start composting food waste and create nutrient-rich soil.',
      category: 'recycling',
      readTime: '8 min',
      imageUrl: 'https://images.unsplash.com/photo-1588701107566-af76b932e2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 5,
      title: 'Environmental Impact of Plastic Pollution',
      excerpt: 'Understanding how plastic waste affects ecosystems and wildlife.',
      category: 'impacts',
      readTime: '9 min',
      imageUrl: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 6,
      title: 'Teaching Children About Waste Management',
      excerpt: 'Fun activities to educate the next generation about proper waste disposal.',
      category: 'basics',
      readTime: '5 min',
      imageUrl: 'https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'basics', name: 'Waste Basics' },
    { id: 'impacts', name: 'Environmental Impacts' },
    { id: 'recycling', name: 'Recycling & Reuse' },
  ];

  const filteredArticles = articles.filter(article => 
    activeCategory === 'all' || article.category === activeCategory
  );

  const resources = [
    {
      title: 'Waste Management Best Practices',
      description: 'Download our comprehensive guide on waste management techniques.',
      icon: <BookOpen className="h-4 w-4" />,
      iconClassName: 'bg-amber-500',
    },
    {
      title: 'Recycling Symbol Guide',
      description: 'Learn to identify different recycling symbols and what they mean.',
      icon: <RecycleIcon className="h-4 w-4" />,
      iconClassName: 'bg-green-500',
    },
    {
      title: 'Waste Reduction Calculator',
      description: 'Estimate your waste footprint and find ways to reduce it.',
      icon: <Info className="h-4 w-4" />,
      iconClassName: 'bg-sky-500',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-block bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-sm font-medium mb-3 animate-fade-in">
            Educational Resources
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 animate-fade-up" style={{animationDelay: '100ms'}}>
            Learn about waste management and environmental impact
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '200ms'}}>
            Explore our educational resources to better understand waste management, recycling, and how to build a cleaner, healthier community.
          </p>
        </div>

        <div className="mb-12 animate-fade-up" style={{animationDelay: '300ms'}}>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Why Proper Waste Management Matters
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Improper waste disposal can lead to soil contamination, water pollution, and various health hazards. Understanding the impact of waste is the first step toward creating a cleaner environment.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-700">Reduces pollution and prevents disease spread</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-700">Protects wildlife and natural ecosystems</p>
                    </div>
                    <div className="flex items-start">
                      <div className="mt-1 mr-3 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-slate-700">Conserves resources through recycling and reuse</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-sm h-60 rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Waste management" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium">Join our mission to create cleaner communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 animate-fade-up" style={{animationDelay: '400ms'}}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 sm:mb-0">
              Educational Articles
            </h2>
            <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-lg">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-3 py-1 text-sm font-medium rounded-md transition-all",
                    activeCategory === category.id 
                      ? "bg-white text-slate-800 shadow-sm" 
                      : "text-slate-600 hover:text-slate-800"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <div 
                key={article.id}
                className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-300 hover-lift"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-nature-50 text-nature-700 rounded-full">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="text-xs text-slate-500">{article.readTime} read</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">{article.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{article.excerpt}</p>
                  <button className="text-sm font-medium text-nature-600 hover:text-nature-700 transition-colors flex items-center">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 animate-fade-up" style={{animationDelay: '500ms'}}>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Helpful Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <FeatureCard
                key={index}
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                iconClassName={resource.iconClassName}
                animationDelay={`${index * 100}ms`}
              />
            ))}
          </div>
        </div>

        <div className="animate-fade-up" style={{animationDelay: '600ms'}}>
          <div className="bg-gradient-to-br from-sky-50 to-nature-50 rounded-2xl border border-slate-200 p-6 md:p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Want to get involved in waste education?
              </h2>
              <p className="text-slate-600 mb-6">
                Join our team of educators and volunteers to help spread awareness about proper waste management in schools and communities.
              </p>
              <button className="px-6 py-3 bg-nature-500 text-white font-medium rounded-lg shadow-sm hover:bg-nature-600 transition-all hover-lift">
                Become an Educator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
