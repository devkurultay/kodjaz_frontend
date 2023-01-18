/* External dependencies */
import { Trans } from 'next-i18next';
import dynamic from 'next/dynamic';
import React from 'react';

/* Local dependencies */
import RunCodeIcon from '../../public/assets/svg/RunCodeIcon';
import Description from './description/Description';

const Editor = dynamic(() => import('./editor/Editor'), { ssr: false });

export default function IDE() {
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="flex md:min-h-[calc(100vh - 160px)]">
        <div className="basis-1/3 h-full">
          <Description />
        </div>
        <div className="grow h-full relative">
          <Editor />
          <div className="editor-footer absolute bottom-0 t-auto l-0 pr-5 pl-[60px] py-3 bg-[#3A3B42] w-full h-[60px] flex items-center">
            <button className="flex items-center bg-primaryColorLight text-whiteColor font-medium text-sm px-3.5 py-2 rounded-md hover:bg-primaryColorMiddle">
              <RunCodeIcon />
              <span className="ml-3">
                <Trans>runCode</Trans>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
