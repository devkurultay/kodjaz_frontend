/* External dependencies */
import React from 'react';

/* Local dependencies */

export default function ProfileMenu({ children }: any) {
  return (
    <div className="flex items-center justify-end absolute top-[40px] right-0 bg-whiteColor p-5 border-2 border-grayColorE7 rounded-md w-full text-end">
      {children}
    </div>
  );
}
