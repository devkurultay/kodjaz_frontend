/* External dependencies */
import React from 'react';

interface DescriptionProps {
  children?: any;
}

export default function Description({ children }: DescriptionProps) {
  return (
    <div className="h-full px-5 py-2.5 relative">
      <h2 className="text-sm2 font-semibold mb-2.5">Strings</h2>
      <p className="mb-2.5">{children}</p>
    </div>
  );
}
