import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  className = '' 
}) => {
  return (
    <div className={`p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-300">{description}</p>
    </div>
  );
};

export default FeatureCard;