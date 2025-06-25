
import React from 'react';

interface TrainerInfoProps {
  name: string;
  title: string;
  description: string;
}

const TrainerInfo = ({ name, title, description }: TrainerInfoProps) => {
  return (
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold text-foreground mb-2">
        {name}
      </h3>
      <p className="text-yellow-500 font-semibold mb-2">
        {title}
      </p>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default TrainerInfo;
