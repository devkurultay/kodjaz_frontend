/* External dependencies */
import { Trans } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  getTracks,
  signUpToTrack,
  trackState,
} from '../../store/slices/trackSlice';
import { ExtendedSession } from '../../types/userTypes';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { Track } from '../../types/tracksTypes';
import { useRouter } from 'next/navigation';

const icons: { [key: string]: string } = {
  Python: '/assets/pythonIcon.svg',
  JavaScript: '/assets/javaScriptIcon.svg',
  Typescript: '/assets/typescriptIcon.svg',
  Unknown: '/assets/frame91.svg',
};

export default function MyCourses() {
  const router = useRouter();
  const dispatch = useDispatch();
  // TODO(murat): show loading indicator and errors if any
  const { tracksByName } = useAppSelector(trackState);
  const { data: sessionData } = useSession();

  useEffect(() => {
    const tk = (sessionData as ExtendedSession)?.access ?? '';
    // TODO(murat): Don't call getTracks if we already have them
    if (tk) {
      dispatch(getTracks(tk));
    }
  }, [sessionData, getTracks, dispatch]);

  const signUpToCourse = (id: number) => {
    const tk = (sessionData as ExtendedSession)?.access ?? '';
    if (!tk) {
      router.push('/login');
    }
    dispatch(signUpToTrack({ token: tk, trackId: id }));
    dispatch(getTracks(tk));
  };

  const subscribedTracksNames: string[] = Object.keys(tracksByName);
  const subscribedTracks: Track[] = Object.values(tracksByName);

  const transformedTracks = !!subscribedTracks.length
    ? subscribedTracks.map((track: Track) => {
        return {
          alt: track.name,
          icon: icons?.[track.name] ?? icons.Unknown,
          title: track.name,
          description: track.description,
          id: track.id,
        };
      })
    : [
        {
          alt: 'Сиз курс тандай элексиз',
          icon: icons.Unknown,
          title: 'Сиз курс тандай элексиз',
          description: 'Төмөнкү тизмектеги курстарга жазылсаңыз болот',
          placeholder: true,
        },
      ];

  // TODO(murat): read from db
  const coursesArray = [
    {
      alt: 'Python',
      icon: '/assets/pythonIcon.svg',
      title: 'Python',
      description:
        'Үйрөнүүгө оңой, ошол эле учурда мүмкүнчүлүктөрү зор программалоо тили.',
      id: 1,
    },
    {
      alt: 'JavaScript',
      icon: '/assets/javaScriptIcon.svg',
      title: 'JavaScript',
      description: 'JavaScript description',
      label: <Trans>soon</Trans>,
    },
    {
      alt: 'Typescript',
      icon: '/assets/typescriptIcon.svg',
      title: 'Typescript',
      description: 'Typescript description',
      label: <Trans>soon</Trans>,
    },
  ];

  const recommendedCourses = coursesArray.filter((course) => {
    return !subscribedTracksNames.includes(course.title);
  });

  return (
    <section className="py-[80px] bg-grayColorF3 min-h-[80vh]">
      <div className="container mx-auto">
        <h2 className="text-blackColorDark text-xl mb-12 font-bold">
          <Trans>myCourses</Trans>
        </h2>
        <div className="flex flex-wrap gap-y-[30px] mx-[-15px]">
          {transformedTracks.map((item: any, index: number) => (
            <div
              key={index}
              className="flex basis-full md:justify-between bg-whiteColor rounded-[30px] p-10 flex-col-reverse md:flex-row"
            >
              <div className="flex flex-col basis-1/2">
                <div className="mb-5">
                  <div className="grow mb-5">
                    <p className="text-blackColorDark mb-5 text-lg font-bold">
                      <Trans>{item.title}</Trans>
                    </p>
                    <p className="mb-5">
                      <Trans>{item.description}</Trans>
                    </p>
                  </div>
                </div>
                {/* Put a button and scroll down to recommended courses */}
                {!item?.placeholder && (
                  <div className="font-medium">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight w-fit mt-4 px-12 py-1.5 md:py-2.5 text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
                    >
                      <Trans>continueCourse</Trans>
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center whitespace-nowrap w-fit mt-4 px-12 py-1.5 md:py-2.5 underline text-blue-600 hover:text-blue-800"
                    >
                      <Trans>courseInfo</Trans>
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex justify-start pb-6 md:justify-end md:pb-0 md:basis-1/4">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={160}
                  height={160}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-[80px]">
        <h2 className="text-blackColorDark text-xl mb-12 font-bold">
          <Trans>recommendation</Trans>
        </h2>
        <div className="flex flex-wrap gap-y-[30px] mx-[-15px]">
          {recommendedCourses.map((item: any, index: number) => (
            <div
              key={index}
              className="flex basis-full md:justify-between bg-whiteColor rounded-[30px] p-10 flex-col-reverse md:flex-row"
            >
              <div className="flex flex-col basis-1/3">
                <div className="mb-5">
                  <div className="grow mb-5">
                    <p className="text-blackColorDark mb-5 text-lg font-bold">
                      <Trans>{item.title}</Trans>
                    </p>
                    <p className="mb-5">
                      <Trans>{item.description}</Trans>
                    </p>
                  </div>
                </div>
                {item.label && (
                  <div className="bg-dangerColor rounded-full text-whiteColor uppercase px-[10px] max-w-[100px]">
                    <p>{item.label}</p>
                  </div>
                )}
                {item.level && item.lessonAmount && (
                  <div className="flex basis-1/2 items-center">
                    <div className="flex basis-auto items-center mr-10">
                      {item.lessonAmount}
                    </div>
                    <div className="flex basis-auto items-center">
                      {item.level}
                    </div>
                  </div>
                )}
                {!item.label && (
                  <button
                    className="inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight w-fit mt-4 px-12 py-1.5 md:py-2.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
                    onClick={() => signUpToCourse(item.id)}
                  >
                    <Trans>startLearning</Trans>
                  </button>
                )}
              </div>
              <div className="flex justify-start pb-6 md:justify-end md:pb-0 md:basis-1/4">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={160}
                  height={160}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
