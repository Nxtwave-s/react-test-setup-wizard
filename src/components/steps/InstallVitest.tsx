
import CodeBlock from '@/components/CodeBlock';
import { Separator } from '@/components/ui/separator';

export const InstallVitest = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" id="section-2">2. Installing Vitest</h2>
      <p>Vitest is the framework we will use for all React unit tests in this course.</p>
      
      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-2.1">2.1 Prerequisites <a id="section-2.1"></a></h3>
        <p className="mb-4">Ensure Node.js ≥ 18 is installed.</p>
        
        <CodeBlock 
          code="node --v"
          language="css"
          className="mb-4"
        />
        
        <p className="mb-2">Also verify npm is installed</p>
        <CodeBlock 
          code="npm --v"
          language="css"
        />
      </div>
    </div>
  );
};
