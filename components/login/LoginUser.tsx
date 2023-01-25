/* External dependencies */
import { Trans } from 'next-i18next';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signIn, getSession } from 'next-auth/react';

/* Local dependencies */
import CloseIcon from '../../public/assets/svg/CloseIcon';
import GoogleIcon from '../../public/assets/svg/GoogleIcon';
import AppleIcon from '../../public/assets/svg/AppleIcon';
import FacebookIcon from '../../public/assets/svg/FacebookIcon';
import LoadingSpinner from '../ui/Spinner';
import { useAppSelector } from '../../store/hooks';
import {
  closeConfirmationPopupLogin,
  userState,
} from '../../store/slices/userSlice';
import styles from '../../styles/scss/popup.module.scss';
import { Login } from '../../types/userTypes';

export default function LoginUser() {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { error, isLoggedIn, loading } = useAppSelector(userState);

  function closePopup() {
    dispatch(closeConfirmationPopupLogin());
    reset({ email: '', password: '' });
  }

  function checkIfClickedOutside(e: MouseEvent) {
    const targetElement: HTMLElement = e.target as HTMLElement;
    if (ref.current && !ref?.current?.contains(targetElement)) {
      closePopup();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', (e: MouseEvent) =>
      checkIfClickedOutside(e),
    );

    return () => {
      document.removeEventListener('mousedown', (e) =>
        checkIfClickedOutside(e),
      );
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      closePopup();
    }
  }, [isLoggedIn]);

  async function submitHandler({ email, password }: Login) {
    const url = new URL(location.href);
    let callbackUrl = url.searchParams.get('callbackUrl') ?? '';
    if (callbackUrl.includes('account-confirm-email')) {
      callbackUrl = '/website/courses';
    }
    await signIn('credentials', {
      callbackUrl: callbackUrl ?? '/',
      redirect: true,
      email: email,
      password: password,
    });
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 w-full z-50 bg-blackColor/50 overflow-hidden block">
      <div
        className={`w-full max-w-[400px] bg-whiteColor p-[30px] rounded-[20px] ${styles.popup}`}
        ref={ref}
      >
        <div className="flex justify-end">
          <button className="mr-[-15px] mt-[-12px]" onClick={closePopup}>
            <CloseIcon strokeFill="#98989A" />
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-700 text-lg mb-[30px]">
            <Trans>enter</Trans>
          </h2>
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-1">
            <div className="mb-[30px]">
              <label htmlFor="email-address" className="mb-[5px] block text-sm">
                Email
              </label>
              <input
                id="email-address"
                type="email"
                required
                className="relative block w-full rounded-md border bg-whiteColor border-grayColorDb px-3 py-2 text-blackColorDark placeholder:text-grayColor98 focus:z-10 focus:border-primaryColorLight focus:outline-none text-base"
                placeholder="name@example.com"
                {...register('email')}
              />
            </div>
            <div className="mb-[30px]">
              <label htmlFor="password" className="mb-[5px] block text-sm">
                <Trans>password</Trans>
              </label>
              <input
                id="password"
                type="password"
                required
                className="relative block w-full rounded-md border bg-whiteColor border-grayColorDb px-3 py-2 text-blackColorDark placeholder:text-grayColor98 focus:z-10 focus:border-primaryColorLight focus:outline-none text-base mb-1"
                placeholder="Password"
                {...register('password')}
              />
              <button className="text-sm text-primaryColorLight">
                <Trans>forgotPassword</Trans>
              </button>
              {error && (
                <p role="alert" className="mt-3 text-sm text-dangerColor">
                  <Trans>{error?.detail}</Trans>
                </p>
              )}
            </div>
          </div>
          <div className="mb-[30px]">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primaryColorLight py-2 px-4 text-sm font-medium text-whiteColor hover:bg-primaryColorMiddle focus:outline-none focus:bg-primaryColorDark"
            >
              {loading ? <LoadingSpinner height={23} /> : <Trans>logIn</Trans>}
            </button>
          </div>
          <p className="text-center mb-5">
            <Trans>withSocialMedias</Trans>
          </p>
          <div className="flex gap-x-4 justify-center mb-[30px]">
            <button className="border rounded-md border-grayColorDb flex justify-center items-center w-[50px] h-[50px]">
              <GoogleIcon />
            </button>
            <button className="border rounded-md border-grayColorDb flex justify-center items-center w-[50px] h-[50px]">
              <AppleIcon />
            </button>
            <button className="border rounded-md border-grayColorDb flex justify-center items-center w-[50px] h-[50px]">
              <FacebookIcon
                fill="#3872DC"
                width={17}
                height={37}
                className="mt-2 ml-1"
              />
            </button>
          </div>
          <p className="text-center">
            <Trans
              i18nKey="noAccountSignUp"
              components={{
                textPrimary: (
                  <a href="#" className="text-primaryColorLight"></a>
                ),
              }}
            />
          </p>
        </form>
      </div>
    </div>
  );
}
