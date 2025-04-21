import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#') && href !== '#') {
      e.preventDefault();
      const id = href.slice(1);
      const element = document.getElementById(id);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      className={`transition-all duration-200 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};