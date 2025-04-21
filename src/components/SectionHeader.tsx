import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-300">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;