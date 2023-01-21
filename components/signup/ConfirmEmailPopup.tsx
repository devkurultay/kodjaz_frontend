import { Trans } from 'next-i18next';
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  closeEmailConfirmationPopup,
  userState,
} from '../../store/slices/userSlice';
import CloseIcon from '../../public/assets/svg/CloseIcon';
import { useAppSelector } from '../../store/hooks';
import styles from '../../styles/scss/popup.module.scss';

export default function ConfirmEmailPopup() {
  const dispatch = useDispatch();
  const { isEmailConfirmationPopupOpen, user } = useAppSelector(userState);
  const email = user?.email || '';
  function closePopup() {
    dispatch(closeEmailConfirmationPopup());
  }
  return (
    <div
      className={`flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 w-full z-50 bg-blackColor/50 overflow-hidden ${
        isEmailConfirmationPopupOpen ? 'block' : 'hidden'
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
            <Trans>Confirm email</Trans>
          </h3>
        </div>
        <div>
          <Trans email={email}>
            Please check your {{ email }} mailbox. You will recieve an email
            with a verification link. Click that link to let us know that it
            belongs to you.
          </Trans>
        </div>
      </div>
    </div>
  );
}
