
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  iconClassName?: string;
  animationDelay?: string;
  onClick?: () => void;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClassName,
  animationDelay = '0ms',
  onClick,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 animate-fade-up hover-lift",
        onClick ? "cursor-pointer" : "",
        className
      )}
      style={{ animationDelay }}
      onClick={onClick}
    >
      <div className="relative z-10 p-6">
        <div className={cn(
          "mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg text-white",
          iconClassName || "bg-nature-500"
        )}>
          {icon}
        </div>
        
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-full opacity-70"></div>
    </div>
  );
};

export default FeatureCard;
