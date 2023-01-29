/* External dependencies */
import { Trans } from 'next-i18next';
import React from 'react';

/* Local dependencies */
import InstructionIcon from '../../../public/assets/svg/InstructionIcon';

interface InstructionProps {
  children?: any;
}

export default function Instruction({ children }: InstructionProps) {
  return (
    <div>
      <div className="py-3.5 px-3 bg-grayColorF3 flex items-center">
        <InstructionIcon />{' '}
        <span className="pl-2">
          <Trans>instructions</Trans>
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
