
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/Dashboard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Dashboard />
      
      <div className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              CleanMapConnect makes it easy to report waste dumping and organize community cleanup efforts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-nature-100 text-nature-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Waste</h3>
              <p className="text-slate-600 mb-4">Easily report waste dumping sites with location and photos.</p>
              <Link to="/report">
                <Button variant="link" className="text-nature-600 p-0 h-auto flex items-center">
                  Report Now <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-nature-100 text-nature-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Cleanup</h3>
              <p className="text-slate-600 mb-4">Monitor the status of reported sites on our interactive map.</p>
              <Link to="/map">
                <Button variant="link" className="text-nature-600 p-0 h-auto flex items-center">
                  View Map <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-nature-100 text-nature-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Events</h3>
              <p className="text-slate-600 mb-4">Participate in community cleanup events and initiatives.</p>
              <Link to="/community">
                <Button variant="link" className="text-nature-600 p-0 h-auto flex items-center">
                  Get Involved <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-nature-500 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to make a difference?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join our community of environmentally conscious citizens and help keep Guntur clean and healthy for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report">
              <Button size="lg" variant="secondary">Report Waste Dumping</Button>
            </Link>
            <Link to="/community">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-nature-600">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
