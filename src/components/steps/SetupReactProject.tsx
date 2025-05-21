
import CodeBlock from '@/components/CodeBlock';

export const SetupReactProject = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" id="section-3">3. Setting Up a React Project using Vite</h2>
      <p>We will be using Vite to create a new React project</p>
      
      <div className="mb-6">
        <p className="mb-2">Show these commands in code blocks:</p>
        <CodeBlock 
          code={`npm create vite@latest my-react-testing-app -- --template react
cd my-react-testing-app
npm install`}
          language="bash"
          className="mb-4"
        />
        
        <p className="mb-2">Show folder structure (trimmed) as code:</p>
        <CodeBlock 
          code={`my-react-testing-app/
├── src/
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js`}
          language="css"
        />
      </div>
    </div>
  );
};
