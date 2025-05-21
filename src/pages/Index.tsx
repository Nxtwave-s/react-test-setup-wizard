
import { useState } from 'react';
import StepNavigation from '@/components/StepNavigation';
import SetupWizard from '@/components/SetupWizard';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { id: 'vitest', title: 'Installing Vitest' },
    { id: 'react-project', title: 'Setting Up a React Project' },
    { id: 'config-vitest', title: 'Configuring Vitest' },
    { id: 'setup', title: 'Setup Files' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Environmental Setup Guide</h1>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <StepNavigation 
            steps={steps} 
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          
          <div className="p-6">
            <SetupWizard 
              currentStep={currentStep} 
              setCurrentStep={setCurrentStep}
              totalSteps={steps.length} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
