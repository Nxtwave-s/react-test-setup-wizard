
import CodeBlock from '@/components/CodeBlock';
import Collapsible from '@/components/Collapsible';

export const ConfigVitest = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" id="section-3.1">3.1 Configuring Vitest</h2>
      
      <Collapsible title="Installing Vitest">
        <div className="space-y-4">
          <p>Run these commands:</p>
          <CodeBlock 
            code={`npm install --save-dev vitest
npm install --save-dev @testing-library/react@16.2.0
npm install --save-dev jsdom@26.0.0
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/user-event`}
            language="graphql"
          />
        </div>
      </Collapsible>
      
      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-3.2">3.2 Create src/setupTests.js:</h3>
        <CodeBlock 
          code={`import '@testing-library/jest-dom/vitest';`}
          language="js"
        />
      </div>
    </div>
  );
};
