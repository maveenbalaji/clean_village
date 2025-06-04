import { useEffect } from 'react';
import ReportForm from '@/components/ReportForm';
import { MapPin, Upload, AlertTriangle } from 'lucide-react';

const Report = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-block bg-nature-50 text-nature-600 px-3 py-1 rounded-full text-sm font-medium mb-3 animate-fade-in">
            Report Waste Dumping
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 animate-fade-up" style={{animationDelay: '100ms'}}>
            Help keep our community clean and healthy
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '200ms'}}>
            Your reports help us identify illegal waste dumping sites and take action to clean them up. Together we can create a cleaner environment in Guntur, Andhra Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 animate-fade-up" style={{animationDelay: '300ms'}}>
            <ReportForm />
          </div>
          
          <div className="space-y-6 animate-fade-up" style={{animationDelay: '400ms'}}>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <Upload className="h-5 w-5 mr-2 text-nature-500" />
                Report Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex">
                  <div className="mr-3 text-nature-500">1.</div>
                  <p>Provide accurate location details for quick identification.</p>
                </li>
                <li className="flex">
                  <div className="mr-3 text-nature-500">2.</div>
                  <p>Include clear photos that show the extent of the waste dumping.</p>
                </li>
                <li className="flex">
                  <div className="mr-3 text-nature-500">3.</div>
                  <p>Mention any potential hazards like sharp objects or chemical smells.</p>
                </li>
                <li className="flex">
                  <div className="mr-3 text-nature-500">4.</div>
                  <p>Avoid confronting anyone at the dumping site. Safety comes first.</p>
                </li>
              </ul>
            </div>
            
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-nature-500" />
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-sm text-slate-600">
                <li className="flex">
                  <div className="mr-3 text-nature-500">1.</div>
                  <p>Our team reviews your report within 24-48 hours.</p>
                </li>
                <li className="flex">
                  <div className="mr-3 text-nature-500">2.</div>
                  <p>The site is marked on the public map as 'Reported'.</p>
                </li>
                <li className="flex">
                  <div className="mr-3 text-nature-500">3.</div>
                  <p>Local authorities are notified for appropriate action.</p>
                </li>
                <li className="flex">
                  <div className="mr-3 text-nature-500">4.</div>
                  <p>You receive updates as the status changes from 'Reported' to 'Cleaned'.</p>
                </li>
              </ol>
            </div>
            
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
              <div className="flex">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-amber-800">Report Responsibly</h4>
                  <p className="text-xs text-amber-700 mt-1">
                    False reports divert resources from genuine issues. Please ensure your report is accurate and helpful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
