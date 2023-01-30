/* External dependencies */
import { Trans, useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';

/* Local dependencies */
import RunCodeIcon from '../../public/assets/svg/RunCodeIcon';
import TabBurgerIcon from '../../public/assets/svg/TabBurgerIcon';
import TabChatIcon from '../../public/assets/svg/TabChatIcon';
import styles from '../../styles/scss/ide.module.scss';
import { useAppSelector } from '../../store/hooks';
import {
  getSubmissions,
  getTracks,
  submitCode,
  trackState,
} from '../../store/slices/trackSlice';
import { Exercise, Submission, Track } from '../../types/tracksTypes';
import { ExtendedSession } from '../../types/userTypes';
import LoadingSpinner from '../ui/Spinner';
import HeaderClassroom from '../header-classroom/HeaderClassroom';
import FooterClassroom from '../footer-classroom/FooterClassroom';
import AccordionComponent from './accordion/AccordionComponent';
import Description from './description/Description';
import Instruction from './instruction/Instruction';
import MenuIDE from './menu-ide/MenuIDE';
import TabsIDE from './tabs-ide/TabsIDE';

const Editor = dynamic(() => import('./editor/Editor'), { ssr: false });

type TabContents = {
  content: JSX.Element;
  icon: JSX.Element;
  text: string;
  width: number;
  height: number;
  viewbox: string;
}[];

export default function IDE() {
  const dispatch = useDispatch();
  const {
    loading,
    submissionLoading,
    exercisesById,
    tracksById,
    submissionsByExerciseId,
  } = useAppSelector(trackState);
  const [isOpenMenu, setIsOpenMenu] = useState<Boolean>(false);
  const [exercise, setExercise] = useState<Exercise>();
  const [submission, setSubmission] = useState<Submission>();
  const [track, setTrack] = useState<Track>();
  const [tabsContent, setTabsContent] = useState<TabContents>([]);
  const [userCode, setUserCode] = useState<string>('');
  const [isConsoleShow, setIsConsoleShow] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState('');
  const [consoleError, setConsoleError] = useState('');
  const [canGoForward, setCanGoForward] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data: sessionData, status } = useSession();
  const { t } = useTranslation('common');

  const resetConsoleAndForward = () => {
    setConsoleOutput('');
    setConsoleError('');
    setCanGoForward(false);
    setIsConsoleShow(false);
  };

  const isEmpty = (obj: {}) => Object.values(obj).length === 0;

  useEffect(() => {
    // First load
    if (status !== 'loading') {
      const tk = (sessionData as ExtendedSession)?.access ?? '';
      if (!loading && isEmpty(tracksById)) {
        console.log('get tracks');
        dispatch(getTracks(tk));
      }
      if (!loading && isEmpty(submissionsByExerciseId)) {
        console.log('get subm');
        dispatch(getSubmissions(tk));
      }
    }
  }, [status, getSubmissions, getTracks, sessionData]);

  useEffect(() => {
    // When navigating
    if (id) {
      const exId = Number(id);
      if (!loading && exId in exercisesById) {
        const ex = exercisesById[exId];
        console.log('ex setting');
        setExercise(ex);
        const tr = tracksById?.[ex.track_id];
        tr && setTrack(tr);
        console.log('tr setting');
      }
      console.log('submissionsByExerciseId', submissionsByExerciseId);
      if (!loading && !submissionLoading && exId in submissionsByExerciseId) {
        const sub = submissionsByExerciseId[exId];
        console.log('subm setting', sub);
        setSubmission(sub);
      }
    }
  }, [
    id,
    loading,
    submissionLoading,
    setExercise,
    setSubmission,
    exercisesById,
    submissionsByExerciseId,
  ]);

  //   useEffect(() => {
  //     if (id) {
  //       const exId = Number(id);
  //       if (exId in exercisesById && !exercise) {
  //         const ex = exercisesById[exId];
  //         setExercise(ex);
  //       } else if (status !== 'loading') {
  //         // TODO(murat): Don't call getTracks if we already have them
  //         const tk = (sessionData as ExtendedSession)?.access ?? '';
  //         console.log('getting submissions and tracks');
  //         dispatch(getSubmissions(tk));
  //         dispatch(getTracks(tk));
  //       }

  //       if (exId in submissionsByExerciseId && !submission) {
  //         const submission = submissionsByExerciseId[exId];
  //         if (submission) {
  //           console.log('setting submission', submission.exercise);
  //           submission?.submitted_code && setUserCode(submission?.submitted_code);
  //           setConsoleOutput(submission.console_output ?? '');
  //           setConsoleError(submission.error_message ?? '');
  //           setIsConsoleShow(
  //             !!submission.console_output || !!submission.error_message,
  //           );
  //           const success = submission.passed && !submission.error_message;
  //           setCanGoForward(success);
  //         } else {
  //           console.log('resetConsoleAndForward since no submission');
  //           resetConsoleAndForward();
  //         }
  //       }
  //     }

  // if (submissionsByExerciseId) {
  //   const exId = Number(id);
  //   const ex = exercisesById[exId];
  //   const submission = submissionsByExerciseId[exId];
  //   if (submission) {
  //     console.log(
  //       'under submissionsByExerciseId && exercise',
  //       submission.exercise,
  //     );
  //     setUserCode(submission?.submitted_code ?? ex.default_code ?? '');
  //     setConsoleOutput(submission.console_output ?? '');
  //     setConsoleError(submission.error_message ?? '');
  //     setIsConsoleShow(
  //       !!submission.console_output || !!submission.error_message,
  //     );
  //     const success = submission.passed && !submission.error_message;
  //     setCanGoForward(success);
  //   } else if (exId in exercisesById) {
  //     const ex = exercisesById[exId];
  //     console.log(
  //       'setting exercise default_code since no submission \n--under submissionsByExerciseId && exercise',
  //       ex.id,
  //     );
  //     setUserCode(ex.default_code ?? '');
  //     resetConsoleAndForward();
  //   }
  // }
  //   }, [id, exercisesById, submissionsByExerciseId]);

  useEffect(() => {
    if (exercise) {
      const contents = [
        {
          content: (
            <div className="h-full pt-2.5 relative flex flex-col">
              <div className="px-5 font-bold">{exercise?.name}</div>
              <Description>
                <ReactMarkdown>{exercise?.lecture ?? ''}</ReactMarkdown>
              </Description>
              <div>
                <Instruction>
                  <ReactMarkdown>{exercise?.instruction ?? ''}</ReactMarkdown>
                </Instruction>
                <AccordionComponent
                  items={[
                    {
                      children: (
                        <ReactMarkdown>{exercise?.hint ?? ''}</ReactMarkdown>
                      ),
                      heading: 'hints',
                    },
                  ]}
                />
              </div>
            </div>
          ),
          icon: <TabBurgerIcon />,
          text: t('Description'),
          width: 20,
          height: 17,
          viewbox: '0 0 14 18',
        },
        {
          content: (
            <div className="h-full pt-2.5 relative flex flex-col">
              <Description>
                Жакында бул жерде сонун талкуулар болот, буйруса.
              </Description>
            </div>
          ),
          icon: <TabChatIcon />,
          text: t('Discussion'),
          width: 18,
          height: 17,
          viewbox: '0 0 18 17',
        },
      ];
      setTabsContent(contents);
    }
  }, [exercise]);

  //   useEffect(() => {
  //     if (submissionsByExerciseId) {
  //       const exId = Number(id);
  //       const submission = submissionsByExerciseId[exId];
  //       if (submission) {
  //         submission?.submitted_code && setUserCode(submission?.submitted_code);
  //         setConsoleOutput(submission.console_output ?? '');
  //         setConsoleError(submission.error_message ?? '');
  //         setIsConsoleShow(
  //           !!submission.console_output || !!submission.error_message,
  //         );
  //         const success = submission.passed && !submission.error_message;
  //         setCanGoForward(success);
  //       } else {
  //         console.log(
  //           'resetting console \n--under submissionsByExerciseId && exercise useEffect',
  //         );
  //         // setUserCode(exercise.default_code ?? '');
  //         resetConsoleAndForward();
  //       }
  //     }
  //   }, [id, submissionsByExerciseId]);

  function submitUserCode() {
    const tk = (sessionData as ExtendedSession)?.access ?? '';
    const exId = Number(id);
    const payload = { token: tk, userCode, exercise: exId };
    dispatch(submitCode(payload));
  }

  return (
    <div className="lg:h-100vh lg:fixed w-full">
      <HeaderClassroom />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:h-[inherit] relative lg:w-[480px] flex-none">
          {loading && !exercise ? (
            <LoadingSpinner height={23} />
          ) : (
            <TabsIDE
              burgerClassName={isOpenMenu ? styles.ide_burger_active : ''}
              items={tabsContent}
              onClickedBurger={() => {
                setIsOpenMenu(!isOpenMenu);
              }}
            />
          )}
          {exercise && (
            <MenuIDE
              activeClass={isOpenMenu ? 'block' : 'hidden'}
              track={track}
              exercise={exercise}
              setIsOpenMenu={setIsOpenMenu}
            />
          )}
        </div>
        <div className="h-[60vh] lg:grow lg:h-auto relative flex-col flex">
          <div className="h-[48px] flex-none bg-blackColorLight"></div>
          <Editor userCode={userCode} setUserCode={setUserCode} />
          <div>
            <div className="editor-footer pr-5 pl-[60px] py-3 bg-[#3A3B42] w-full h-[60px] flex items-center">
              <button
                onClick={submitUserCode}
                className="flex items-center bg-primaryColorLight text-whiteColor font-medium text-sm px-3.5 py-2 rounded-md hover:bg-primaryColorMiddle"
              >
                <RunCodeIcon />
                <span className="ml-3">
                  {submissionLoading ? (
                    <LoadingSpinner height={23} />
                  ) : (
                    <Trans>runCode</Trans>
                  )}
                </span>
              </button>
            </div>
            <div className="bg-blackColorDark">
              <button
                className={styles.console_btn}
                aria-expanded={isConsoleShow ? true : false}
                onClick={() => setIsConsoleShow(!isConsoleShow)}
              ></button>
              {isConsoleShow ? (
                <div
                  className={`px-7 text-whiteColor overflow-y-scroll max-h-[40vh] lg:max-h-[50vh] w-inherit ${
                    consoleError ? 'text-dangerColorConsole' : ''
                  }`}
                >
                  <div>
                    {consoleError && (
                      <pre
                        className="whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: consoleError }}
                      />
                    )}
                    {consoleOutput && (
                      <>
                        <pre
                          className="whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: consoleOutput }}
                        />

                        {!consoleError && (
                          <div className="pt-5">
                            <Trans>youFinishedThisExercise</Trans>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterClassroom exercise={exercise} isSuccess={canGoForward} />
    </div>
  );
}
