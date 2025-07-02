
import CodeBlock from '@/components/CodeBlock';
import { Separator } from '@/components/ui/separator';

export const InstallVitest = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" id="section-2">2. Vitest Installation</h2>
      <p>Vitest is the framework we will use for all React unit tests in this course.</p>
      
      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-2.1">2.1 Install Node.js</h3>
        <p className="mb-4">Before installing Vitest, make sure Node.js is installed on your system. Node.js is essential for running Vitest and other JavaScript tools.</p>
        
        <p className="mb-4">
          Go to the official <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Node.js website</a>.
        </p>
        
        <p className="mb-4">Click on the LTS (Long-Term Support) version to download the installer for your platform.</p>
        
        <div className="mb-4 space-y-2">
          <p><strong>For Windows:</strong> Download the .msi installer and run it, following the installation wizard.</p>
          <p><strong>For macOS:</strong> Download the .pkg installer and follow the instructions to complete the installation.</p>
          <p><strong>For Linux:</strong> Follow the specific instructions based on your distribution from the Node.js website.</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-2.2">2.2 Verify Installation</h3>
        <p className="mb-4">After installing Node.js, verify it's working by opening your terminal or command prompt and typing the following command:</p>
        
        <CodeBlock 
          code="node --version"
          language="css"
          className="mb-4"
        />
        
        <p className="mb-4">This should return the version of Node.js installed, confirming that it's successfully installed.</p>
        
        <h4 className="text-lg font-medium mb-2">Verify npm Installation</h4>
        <p className="mb-2">To check if npm is installed correctly, open your terminal or command prompt and run the following command:</p>
        <CodeBlock 
          code="npm --version"
          language="css"
        />
      </div>
    </div>
  );
};
