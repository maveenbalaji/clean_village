
import { Trash, Shovel, Users, Calendar } from 'lucide-react';
import StatsCard from './StatsCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatsCard 
            title="Reports Submitted" 
            value={856} 
            icon={<Trash className="h-6 w-6" />} 
            colorClass="bg-red-50 text-red-600"
          />
          <StatsCard 
            title="Sites Cleaned" 
            value={324} 
            icon={<Shovel className="h-6 w-6" />} 
            colorClass="bg-green-50 text-green-600"
          />
          <StatsCard 
            title="Community Members" 
            value={1250} 
            icon={<Users className="h-6 w-6" />} 
            colorClass="bg-blue-50 text-blue-600"
          />
          <StatsCard 
            title="Cleanup Events" 
            value={48} 
            icon={<Calendar className="h-6 w-6" />} 
            colorClass="bg-purple-50 text-purple-600"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Reports</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mr-4">
                    <Trash className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900">Household Waste Dumping</h3>
                    <p className="text-sm text-slate-500">Near Guntur Railway Station • 2 days ago</p>
                  </div>
                  <div className="bg-red-100 text-red-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Reported</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/map">
                <Button variant="outline" className="w-full">View All Reports</Button>
              </Link>
            </div>
          </div>
          
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-md overflow-hidden">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Upcoming Cleanup Events</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-900">Community Cleanup Day</h3>
                    <p className="text-sm text-slate-500">Guntur Municipal Park • June 18, 2023</p>
                  </div>
                  <Button size="sm">Join</Button>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/community">
                <Button variant="outline" className="w-full">View All Events</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
