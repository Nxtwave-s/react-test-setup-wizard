
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
        <img 
          src="/lovable-uploads/581019dc-e0ab-4210-8d22-35c31e931936.png" 
          alt="React project folder structure" 
          className="max-w-full h-auto border rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
};
