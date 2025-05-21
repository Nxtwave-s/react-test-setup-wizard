
import { InstallVitest } from '@/components/steps/InstallVitest';
import { SetupReactProject } from '@/components/steps/SetupReactProject';
import { ConfigVitest } from '@/components/steps/ConfigVitest';
import { SetupFiles } from '@/components/steps/SetupFiles';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SetupWizardProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
}

const SetupWizard = ({ currentStep, setCurrentStep, totalSteps }: SetupWizardProps) => {
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  return (
    <div className="space-y-6">
      {currentStep === 0 && <InstallVitest />}
      {currentStep === 1 && <SetupReactProject />}
      {currentStep === 2 && <ConfigVitest />}
      {currentStep === 3 && <SetupFiles />}
      
      <div className="flex justify-between pt-4 border-t mt-6">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
        
        <Button
          onClick={handleNext}
          disabled={currentStep === totalSteps - 1}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SetupWizard;
