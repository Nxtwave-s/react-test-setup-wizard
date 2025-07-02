
import CodeBlock from '@/components/CodeBlock';

export const SetupReactProject = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold" id="section-2.3">2.3 Setting Up a React Project using Vite</h2>
      <p>We will be using Vite to create a new React project</p>
      
      <div className="mb-6">
        <CodeBlock 
          code={`npm create vite@latest my-react-testing-app -- --template react
cd my-react-testing-app
npm install`}
          language="bash"
          className="mb-4"
        />
        
        <p className="mb-2 font-medium">Folder Structure</p>
        <div className="bg-gray-50 border rounded-lg p-4 font-mono text-sm">
          <div className="space-y-1">
            <div><span className="text-blue-600 font-semibold">MY-REACT-TESTING-APP</span></div>
            <div className="ml-2">▷ coverage</div>
            <div className="ml-2">▷ node_modules</div>
            <div className="ml-2">▷ public</div>
            <div className="ml-2">▷ src</div>
            <div className="ml-2">◆ .gitignore</div>
            <div className="ml-2">JS eslint.config.js</div>
            <div className="ml-2">◇ index.html</div>
            <div className="ml-2">{} package-lock.json</div>
            <div className="ml-2">{} package.json</div>
            <div className="ml-2">📄 README.md</div>
            <div className="ml-2">JS vite.config.js</div>
          </div>
        </div>
      </div>
    </div>
  );
};
