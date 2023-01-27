import { Trans } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import CloseIcon from '../../public/assets/svg/CloseIcon';
import styles from '../../styles/scss/popup.module.scss';

export default function ConfirmEmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    const email = searchParams.get('email');
    if (email) {
      setEmailAddress(email);
      setIsOpen(true);
    }
  }, [setEmailAddress, setIsOpen]);

  function closePopup() {
    setIsOpen(false);
  }

  return (
    <div
      className={`flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 w-full z-50 bg-blackColor/50 overflow-hidden ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div
        className={`w-full max-w-[400px] bg-whiteColor p-[30px] rounded-[20px] ${styles.popup}`}
      >
        <div className="flex justify-end">
          <button className="mr-[-15px] mt-[-12px]" onClick={closePopup}>
            <CloseIcon strokeFill="#98989A" />
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-700 text-md mb-[10px]">
            <Trans i18nKey="confirmEmail" />
          </h3>
        </div>
        <div>
          <Trans
            i18nKey="confirmEmailPopupText"
            values={{ email: emailAddress }}
          />
        </div>
      </div>
    </div>
  );
}
