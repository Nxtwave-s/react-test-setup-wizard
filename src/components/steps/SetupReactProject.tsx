
import CodeBlock from '@/components/CodeBlock';

export const SetupReactProject = () => {
  const folderStructure = `my-react-testing-app/
├── coverage/
├── node_modules/
├── public/
├── src/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js`;

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
        <CodeBlock 
          code={folderStructure}
          language="text"
        />
      </div>
    </div>
  );
};
