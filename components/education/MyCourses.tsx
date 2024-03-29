/* External dependencies */
import { Trans } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  getSubmissions,
  getTracks,
  signUpToTrack,
  trackState,
} from '../../store/slices/trackSlice';
import { ExtendedSession } from '../../types/userTypes';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { Exercise, Track } from '../../types/tracksTypes';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '../ui/Spinner';

// TOOD(murat): move to modules
export const COURSE_ICONS: { [key: string]: string } = {
  Python: '/assets/pythonIcon.svg',
  JavaScript: '/assets/javaScriptIcon.svg',
  Typescript: '/assets/typescriptIcon.svg',
  Unknown: '/assets/unknownCourse.svg',
};

export default function MyCourses() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // TODO(murat): show loading indicator and errors if any
  const { tracksByName, exercisesById } = useAppSelector(trackState);
  const { data: sessionData } = useSession();

  useEffect(() => {
    const tk = (sessionData as ExtendedSession)?.access ?? '';
    // TODO(murat): Don't call getTracks if we already have them
    if (tk) {
      dispatch(getSubmissions(tk));
      dispatch(getTracks(tk));
    }
  }, [sessionData, getTracks, dispatch]);

  const signUpToCourse = (id: number) => {
    setLoading(true);
    const tk = (sessionData as ExtendedSession)?.access ?? '';
    if (!tk) {
      router.push('/login');
    }
    dispatch(signUpToTrack({ token: tk, trackId: id }));
    dispatch(getTracks(tk));
  };

  const goToLatestExercise = () => {
    setLoading(true);
    const exercises = Object.values(exercisesById);

    function findExercise(isComplete: Boolean, isInProgress: Boolean) {
      return exercises.find((exercise: Exercise) => {
        return (
          exercise.progress_data?.is_complete === isComplete &&
          exercise.progress_data?.is_in_progress === isInProgress
        );
      });
    }

    // In progress exercise
    let itemToJumpTo = findExercise(false, true);
    if (!itemToJumpTo) {
      // Not started exercise
      itemToJumpTo = findExercise(false, false);
    }

    if (itemToJumpTo) {
      router.push(`/classroom/exercise/${itemToJumpTo.id}`);
    } else {
      // show a popup `finished`.
    }
  };

  const subscribedTracksNames: string[] = Object.keys(tracksByName);
  const subscribedTracks: Track[] = Object.values(tracksByName);

  const transformedTracks = !!subscribedTracks.length
    ? subscribedTracks.map((track: Track) => {
        return {
          alt: track.name,
          icon: COURSE_ICONS?.[track.name] ?? COURSE_ICONS.Unknown,
          title: track.name,
          description: track.description,
          id: track.id,
        };
      })
    : [
        {
          alt: 'Сиз курс тандай элексиз',
          icon: COURSE_ICONS.Unknown,
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
                  <div className="font-medium flex flex-col items-center md:items-start">
                    <button
                      onClick={goToLatestExercise}
                      className="inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight w-fit mt-4 px-12 py-1.5 md:py-2.5 text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
                    >
                      {loading ? (
                        <LoadingSpinner height={23} />
                      ) : (
                        <Trans>continueCourse</Trans>
                      )}
                    </button>
                    <Link
                      href={`/classroom/course-details/${item.id}`}
                      className="inline-flex items-center justify-center whitespace-nowrap w-fit mt-4 px-4 py-1.5 md:py-2.5 underline text-primaryColorLight"
                    >
                      <Trans>courseInfo</Trans>
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex justify-center pb-6 md:justify-end md:pb-0 md:basis-1/4 items-center">
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
