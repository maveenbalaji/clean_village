import { useState } from 'react';
import { MapPin, Upload, AlertTriangle, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import LocationPicker from './LocationPicker';

const ReportForm = () => {
  const [step, setStep] = useState<number>(1);
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [wasteType, setWasteType] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleLocateMe = () => {
    setIsLocating(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(newLocation);
          setIsLocating(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLocating(false);
          setLocation({
            lat: 16.503195,
            lng: 80.648091,
          });
        },
        { enableHighAccuracy: true }
      );
    } else {
      setIsLocating(false);
      setLocation({
        lat: 16.503195,
        lng: 80.648091,
      });
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    setPhoto(file);
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setStep(1);
        setLocation(null);
        setWasteType('');
        setDescription('');
        setPhoto(null);
        setPhotoPreview(null);
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  };

  const wasteTypes = [
    { id: 'household', label: 'Household Waste', icon: '🏠' },
    { id: 'construction', label: 'Construction Debris', icon: '🏗️' },
    { id: 'electronics', label: 'Electronic Waste', icon: '💻' },
    { id: 'plastic', label: 'Plastic Waste', icon: '🥤' },
    { id: 'other', label: 'Other', icon: '📦' },
  ];

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden animate-scale-in">
      <div className="w-full h-1 bg-slate-100">
        <div
          className="h-full bg-nature-500 transition-all duration-500 ease-in-out"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>
      
      <div className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            {step === 1 && "Report Waste Dumping"}
            {step === 2 && "Waste Details"}
            {step === 3 && "Add Photo & Submit"}
            {isSuccess && "Report Submitted!"}
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            {step === 1 && "Let's start by pinpointing the location"}
            {step === 2 && "Tell us more about the waste"}
            {step === 3 && "Upload a photo to help identify the issue"}
            {isSuccess && "Thank you for helping keep our community clean"}
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-slate-700">Your report has been successfully submitted!</p>
            <p className="text-sm text-slate-500">Our team will review it soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-3">
                  <div 
                    className={cn(
                      "h-56 rounded-xl border-2 border-dashed overflow-hidden transition-all",
                      location ? "border-nature-300 bg-nature-50" : "border-slate-300 bg-slate-50"
                    )}
                  >
                    <LocationPicker
                      location={location}
                      onLocationSelect={(newLocation) => setLocation(newLocation)}
                      isLocating={isLocating}
                    />
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleLocateMe}
                    disabled={isLocating}
                    className={cn(
                      "w-full py-3 rounded-lg flex items-center justify-center font-medium transition-all",
                      isLocating 
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                        : "bg-sky-500 hover:bg-sky-600 text-white"
                    )}
                  >
                    {isLocating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Finding your location...
                      </>
                    ) : (
                      <>
                        <MapPin className="h-4 w-4 mr-2" />
                        Locate Me
                      </>
                    )}
                  </button>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!location}
                    className={cn(
                      "px-6 py-2 rounded-lg font-medium transition-all",
                      !location
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-nature-500 hover:bg-nature-600 text-white"
                    )}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Waste Type
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {wasteTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setWasteType(type.id)}
                          className={cn(
                            "px-3 py-2 rounded-lg text-sm border transition-all",
                            wasteType === type.id
                              ? "bg-nature-50 border-nature-300 text-nature-700"
                              : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                          )}
                        >
                          <span className="mr-1">{type.icon}</span> {type.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Briefly describe the waste and situation..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-nature-500/50 focus:border-nature-500 transition-all"
                      rows={4}
                    />
                  </div>
                  
                  <div className="p-3 rounded-lg bg-sky-50 border border-sky-100 flex">
                    <Info className="h-5 w-5 text-sky-500 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm text-sky-800 font-medium">Quick Tips</p>
                      <p className="text-xs text-sky-700 mt-1">
                        Include details like size of dump, how long it's been there, and any potential hazards.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-2 rounded-lg font-medium bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!wasteType}
                    className={cn(
                      "px-6 py-2 rounded-lg font-medium transition-all",
                      !wasteType
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-nature-500 hover:bg-nature-600 text-white"
                    )}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Photo (Optional but recommended)
                    </label>
                    
                    {photoPreview ? (
                      <div className="relative rounded-xl overflow-hidden border border-slate-200">
                        <img 
                          src={photoPreview} 
                          alt="Waste preview" 
                          className="w-full h-48 object-cover"
                        />
                        <button
                          type="button"
                          onClick={handleRemovePhoto}
                          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 hover:text-red-500 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div 
                        className="h-48 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors"
                        onClick={() => document.getElementById('photo-upload')?.click()}
                      >
                        <Upload className="h-8 w-8 text-slate-400 mb-2" />
                        <p className="text-sm font-medium text-slate-600">Upload from gallery</p>
                        <p className="text-xs text-slate-500 mt-1">JPG, PNG or GIF (max. 5MB)</p>
                        <input
                          id="photo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-100 flex">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm text-amber-800 font-medium">Important</p>
                      <p className="text-xs text-amber-700 mt-1">
                        Photos help our team better assess the situation. Make sure to capture the full area.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2 rounded-lg font-medium bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "px-6 py-2 rounded-lg font-medium transition-all",
                      isSubmitting 
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                        : "bg-nature-500 hover:bg-nature-600 text-white"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Report"
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ReportForm;
