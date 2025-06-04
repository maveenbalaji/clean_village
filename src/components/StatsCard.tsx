
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  suffix?: string;
  colorClass?: string;
}

const StatsCard = ({ title, value, icon, suffix = '', colorClass = 'bg-nature-50 text-nature-600' }: StatsCardProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // ms
    const steps = 20;
    const stepValue = value / steps;
    const stepTime = duration / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">
            {count.toLocaleString()}{suffix}
          </h3>
        </div>
        <div className={cn("p-3 rounded-lg", colorClass)}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
