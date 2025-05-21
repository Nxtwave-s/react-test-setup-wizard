
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

const CodeBlock = ({ code, language = "", className = "" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative rounded-md bg-gray-900 group", className)}>
      <div className="absolute right-2 top-2">
        <button
          onClick={handleCopy}
          className="p-1 rounded bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-gray-300 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
