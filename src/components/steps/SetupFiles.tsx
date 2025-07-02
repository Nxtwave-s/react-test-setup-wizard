
import CodeBlock from '@/components/CodeBlock';

export const SetupFiles = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-2.3.3">2.3.3 vite.config.js <a id="section-2.3.3"></a></h3>
        <CodeBlock 
          code={`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});`}
          language="js"
          className="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-2.3.4">2.3.4 package.json Scripts <a id="section-2.3.4"></a></h3>
        <CodeBlock 
          code={`{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}`}
          language="json"
          className="mb-6"
        />
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-2.3.5">2.3.5 Install Vitest UI (optional but recommended):</h3>
        <CodeBlock 
          code={`npm install --save-dev @vitest/ui`}
          language="css"
        />
      </div>
    </div>
  );
};
