
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  title: string;
}

interface StepNavigationProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepNavigation = ({ steps, currentStep, setCurrentStep }: StepNavigationProps) => {
  return (
    <nav className="p-4 border-b">
      <ol className="flex items-center space-x-2">
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-300">/</span>}
            <button
              onClick={() => setCurrentStep(index)}
              className={cn(
                "text-sm font-medium px-3 py-1 rounded-full",
                currentStep === index
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {step.title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepNavigation;
