
import CodeBlock from '@/components/CodeBlock';
import Collapsible from '@/components/Collapsible';
import { Separator } from '@/components/ui/separator';

export const InstallVitest = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" id="section-2">2. Vitest Installation</h2>
      <p>Vitest is the framework we will use for all React unit tests in this course.</p>
      
      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-2.1">2.1 Install Node.js</h3>
        <p className="mb-4">
          Download and install Node.js LTS from the <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">official website</a>.
        </p>
        
        <Collapsible title="Platform-specific installation instructions">
          <div className="space-y-2">
            <p><strong>For Windows:</strong> Download the .msi installer and run it.</p>
            <p><strong>For macOS:</strong> Download the .pkg installer and follow the instructions.</p>
            <p><strong>For Linux:</strong> Follow your distribution's specific instructions from the Node.js website.</p>
          </div>
        </Collapsible>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-2.2">2.2 Verify Installation</h3>
        <p className="mb-4">Verify Node.js installation:</p>
        
        <CodeBlock 
          code="node --version"
          language="css"
          className="mb-4"
        />
        
        <p className="mb-2">Verify npm installation:</p>
        <CodeBlock 
          code="npm --version"
          language="css"
        />
      </div>
    </div>
  );
};
