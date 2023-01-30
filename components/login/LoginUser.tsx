/* External dependencies */
import { Trans } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn, getProviders } from 'next-auth/react';
import Link from 'next/link';

/* Local dependencies */
import CloseIcon from '../../public/assets/svg/CloseIcon';
import GoogleIcon from '../../public/assets/svg/GoogleIcon';
import AppleIcon from '../../public/assets/svg/AppleIcon';
import FacebookIcon from '../../public/assets/svg/FacebookIcon';
import LoadingSpinner from '../ui/Spinner';
import styles from '../../styles/scss/popup.module.scss';
import { Login } from '../../types/userTypes';
import { useRouter } from 'next/navigation';

export default function LoginUser() {
  const router = useRouter();
  const [providers, setProviders] = useState([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    getProviders().then((pr: any) => {
      setProviders(pr);
    });
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function closePage() {
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

  async function submitHandler({ email, password }: Login) {
    setLoading(true);

    const res = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });
    if (res?.ok) {
      router.push(getCallbackUrl());
    } else if (res?.error) {
      setLoading(false);
      setError(res?.error ?? '');
    }
  }

  async function googleHandler(providerId: string) {
    setLoading(true);
    await signIn(providerId, { redirect: true, callbackUrl: getCallbackUrl() });
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 w-full z-50 bg-blackColor/50 overflow-hidden block">
      <div
        className={`w-full max-w-[400px] bg-whiteColor p-[30px] rounded-[20px] ${styles.popup}`}
      >
        <div className="flex justify-end">
          <button className="mr-[-15px] mt-[-12px]" onClick={closePage}>
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
              <button className="hidden text-sm text-primaryColorLight">
                <Trans>forgotPassword</Trans>
              </button>
              {error && (
                <p role="alert" className="mt-3 text-sm text-dangerColor">
                  <Trans>{error}</Trans>
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
        </form>
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
          {/*
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
          </button> */}
        </div>
        <p className="text-center">
          <Trans
            i18nKey="noAccountSignUp"
            components={{
              textPrimary: (
                <Link href="/signup" className="text-primaryColorLight" />
              ),
            }}
          />
        </p>
      </div>
    </div>
  );
}
