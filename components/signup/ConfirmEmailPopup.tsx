import { Trans } from 'next-i18next';
import React, { useEffect, useRef } from 'react';
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
  const { isEmailConfirmationPopupOpen } = useAppSelector(userState);
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
          <h2 className="text-3xl font-bold tracking-tight text-700 text-lg mb-[30px]">
            <Trans>Confirm email</Trans>
          </h2>
        </div>
      </div>
    </div>
  );
}
