
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const Collapsible = ({ 
  title, 
  children, 
  defaultOpen = false,
  className = "" 
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className={cn("border rounded-md", className)}>
      <button
        className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      {isOpen && <div className="p-4 pt-0 border-t">{children}</div>}
    </div>
  );
};

export default Collapsible;
