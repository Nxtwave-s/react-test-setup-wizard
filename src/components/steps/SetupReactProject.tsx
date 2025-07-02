
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
            <div><span className="text-blue-600 font-semibold">my-react-testing-app/</span></div>
            <div className="ml-2">├── <span className="text-purple-600 font-semibold">public/</span></div>
            <div className="ml-4">└── vite.svg</div>
            <div className="ml-2">├── <span className="text-purple-600 font-semibold">src/</span></div>
            <div className="ml-4">├── App.css</div>
            <div className="ml-4">├── App.jsx</div>
            <div className="ml-4">├── index.css</div>
            <div className="ml-4">└── main.jsx</div>
            <div className="ml-2">├── .gitignore</div>
            <div className="ml-2">├── index.html</div>
            <div className="ml-2">├── package.json</div>
            <div className="ml-2">├── README.md</div>
            <div className="ml-2">└── vite.config.js</div>
          </div>
        </div>
      </div>
    </div>
  );
};
