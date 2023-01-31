/* External dependencies */
import { Trans } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { signIn, getProviders } from 'next-auth/react';

/* Local dependencies */
import GoogleIcon from '../../public/assets/svg/GoogleIcon';
import AppleIcon from '../../public/assets/svg/AppleIcon';
import FacebookIcon from '../../public/assets/svg/FacebookIcon';
import LoadingSpinner from '../ui/Spinner';

import styles from '../../styles/scss/popup.module.scss';
import { BackendError, Register } from '../../types/userTypes';
import { useRouter } from 'next/router';
import { postRequest } from '../../pages/api/axois-api';
import CloseIcon from '../../public/assets/svg/CloseIcon';

const INPUT_ERRORS_CONTAINER_CLASSES =
  'relative block text-xs text-dangerColor pl-1';

export default function SignUpUser() {
  // TODO(murat): signout if already signed in
  const router = useRouter();
  const [providers, setProviders] = useState([]);
  const [error, setError] = useState<BackendError>({});
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    getProviders().then((pr: any) => {
      setProviders(pr);
    });
  }, []);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password1: '',
      password2: '',
    },
  });

  function closePopup() {
    router.push('/');
  }

  function getCallbackUrl() {
    const url = new URL(location.href);
    let callbackUrl = url.searchParams.get('callbackUrl') ?? '';
    if (callbackUrl.includes('account-confirm-email')) {
      callbackUrl = '/classroom';
    }
    return callbackUrl;
  }

  async function submitHandler({ email, password1, password2 }: Register) {
    setLoading(true);
    postRequest('', 'registration/', {
      email,
      password1,
      password2,
    })
      .then(() => {
        setLoading(false);
        router.push(`/?email=${email}`);
      })
      .catch((e: BackendError) => {
        setLoading(false);
        setError(e);
      });
  }

  async function googleHandler(providerId: string) {
    setLoading(true);
    await signIn(providerId, { redirect: true, callbackUrl: getCallbackUrl() });
  }

  return (
    <div
      className={`flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 w-full z-50 bg-blackColor/50 overflow-hidden block'
      }`}
    >
      <div
        className={`w-full max-w-[400px] bg-whiteColor p-[30px] rounded-[20px] ${styles.popup}`}
      >
        <div>
          <div className="flex justify-end">
            <button className="mr-[-15px] mt-[-12px]" onClick={closePopup}>
              <CloseIcon strokeFill="#98989A" />
            </button>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-700 text-lg mb-[30px]">
            <Trans>signUpMenu</Trans>
          </h2>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} autoComplete="off">
          <div className="mb-1">
            <div className="mb-[30px]">
              <label htmlFor="email-address" className="mb-[5px] block text-sm">
                Email
              </label>
              <input
                id="email-address-register"
                type="email"
                required
                className="relative block w-full rounded-md border bg-whiteColor border-grayColorDb px-3 py-2 text-blackColorDark placeholder:text-grayColor98 focus:z-10 focus:border-primaryColorLight focus:outline-none text-base"
                placeholder="name@example.com"
                aria-invalid={error?.email ? 'true' : 'false'}
                {...register('email')}
              />
              <div className={INPUT_ERRORS_CONTAINER_CLASSES}>
                {error &&
                  error?.email?.map((msg, idx) => (
                    <p key={idx} role="alert">
                      <Trans>{msg}</Trans>
                    </p>
                  ))}
              </div>
            </div>
            <div className="mb-[30px]">
              <label htmlFor="password" className="mb-[5px] block text-sm">
                <Trans>password</Trans>
              </label>
              <input
                id="password-register"
                type="password"
                required
                className="relative block w-full rounded-md border bg-whiteColor border-grayColorDb px-3 py-2 text-blackColorDark placeholder:text-grayColor98 focus:z-10 focus:border-primaryColorLight focus:outline-none text-base mb-1"
                placeholder="Password"
                aria-invalid={error?.password1 ? 'true' : 'false'}
                {...register('password1')}
              />
              <div className={INPUT_ERRORS_CONTAINER_CLASSES}>
                {error &&
                  error?.password1?.map((msg, idx) => (
                    <p key={idx} role="alert">
                      <Trans>{msg}</Trans>
                    </p>
                  ))}
              </div>
            </div>
            <div className="mb-[30px]">
              <label htmlFor="password" className="mb-[5px] block text-sm">
                <Trans>repeatPassword</Trans>
              </label>
              <input
                id="password2"
                type="password"
                required
                className="relative block w-full rounded-md border bg-whiteColor border-grayColorDb px-3 py-2 text-blackColorDark placeholder:text-grayColor98 focus:z-10 focus:border-primaryColorLight focus:outline-none text-base mb-1"
                placeholder="Password"
                aria-invalid={error?.password2 ? 'true' : 'false'}
                {...register('password2')}
              />
            </div>
          </div>
          <div className="relative block text-xs text-dangerColor pl-1 pb-5">
            {error &&
              error?.non_field_errors?.map((msg, idx) => (
                <p key={idx} role="alert">
                  <Trans>{msg}</Trans>
                </p>
              ))}
          </div>
          <div className="mb-[20px]">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primaryColorLight py-2 px-4 text-sm font-medium text-whiteColor hover:bg-primaryColorMiddle focus:outline-none focus:bg-primaryColorDark"
            >
              {loading ? <LoadingSpinner height={23} /> : <Trans>signUp</Trans>}
            </button>
          </div>
          <div className="mb-[40px]">
            <p>
              <Trans
                i18nKey="agreePrivacy"
                components={{
                  textLink: <a href="#" className="text-primaryColorLight"></a>,
                }}
              />
            </p>
          </div>
          <p className="text-center mb-5 hidden">
            <Trans>withSocialMedias</Trans>
          </p>
          <div className="flex gap-x-4 justify-center mb-[30px] hidden">
            {Object.values(providers).map((provider: any) => (
              <React.Fragment key={provider.id}>
                {provider.name !== 'Email and Password' && (
                  <div>
                    <button
                      onClick={() => googleHandler(provider.id)}
                      className="border rounded-md border-grayColorDb flex justify-center items-center w-[50px] h-[50px]"
                    >
                      {/* TODO(murat): come up with a nicer way of picking up a correct icon */}
                      {provider.name === 'Google' ? (
                        <GoogleIcon />
                      ) : (
                        <span>
                          <Trans
                            i18nKey="signInWith"
                            values={{ name: provider.name }}
                          />
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </React.Fragment>
            ))}
            <button className="border hidden rounded-md border-grayColorDb flex justify-center items-center w-[50px] h-[50px]">
              <AppleIcon />
            </button>
            <button className="border hidden rounded-md border-grayColorDb flex justify-center items-center w-[50px] h-[50px]">
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
              i18nKey="accountExistsLogIn"
              components={{
                textPrimary: (
                  <Link href="/login" className="text-primaryColorLight" />
                ),
              }}
            />
          </p>
        </form>
      </div>
    </div>
  );
}
