
import React from 'react';

interface Trainer {
  id: string;
  name: string;
}

interface TrainerSelectorProps {
  trainers: Trainer[];
  selectedTrainer: string;
  onTrainerSelect: (trainerId: string) => void;
}

const TrainerSelector = ({ trainers, selectedTrainer, onTrainerSelect }: TrainerSelectorProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-background rounded-lg p-1 border border-border">
        {trainers.map((trainer) => (
          <button
            key={trainer.id}
            onClick={() => onTrainerSelect(trainer.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedTrainer === trainer.id
                ? 'bg-yellow-500 text-black'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {trainer.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrainerSelector;
