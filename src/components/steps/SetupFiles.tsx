
import CodeBlock from '@/components/CodeBlock';

export const SetupFiles = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4" id="section-4.2">3.3 vite.config.js <a id="section-4.2"></a></h3>
        <p className="mb-2">Show this full code snippet:</p>
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
        <h3 className="text-xl font-semibold mb-4" id="section-4.3">3.4 package.json Scripts <a id="section-4.3"></a></h3>
        <p className="mb-2">Show this JSON snippet:</p>
        <CodeBlock 
          code={`{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui"
  }
}`}
          language="json"
          className="mb-6"
        />
      </div>
      
      <div>
        <p className="mb-2">Show command to install Vitest UI (optional but recommended):</p>
        <CodeBlock 
          code={`npm install --save-dev @vitest/ui`}
          language="css"
        />
      </div>
    </div>
  );
};
