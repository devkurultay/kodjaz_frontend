/* External dependencies */
import React from 'react';

interface DescriptionProps {
  children?: any;
  title?: string;
}

export default function Description({ children, title }: DescriptionProps) {
  return (
    <div className="grow px-5">
      <h2 className="text-sm2 font-semibold mb-2.5">{title}</h2>
      <p className="mb-2.5">{children}</p>
    </div>
  );
}
