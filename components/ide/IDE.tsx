/* External dependencies */
import { Trans } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

/* Local dependencies */
import RunCodeIcon from '../../public/assets/svg/RunCodeIcon';
import TabBurgerIcon from '../../public/assets/svg/TabBurgerIcon';
import TabChatIcon from '../../public/assets/svg/TabChatIcon';
import styles from '../../styles/scss/ide.module.scss';
import { useAppSelector } from '../../store/hooks';
import {
  getLastSubmissionByExerciseId,
  getTracks,
  submitCode,
  trackState,
} from '../../store/slices/trackSlice';
import { Exercise, Track } from '../../types/tracksTypes';
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
  const { loading, submissionLoading, exercisesById, tracksById, submission } =
    useAppSelector(trackState);
  const [isOpenMenu, setIsOpenMenu] = useState<Boolean>(false);
  const [exercise, setExercise] = useState<Exercise>();
  const [track, setTrack] = useState<Track>();
  const [tabsContent, setTabsContent] = useState<TabContents>([]);
  const [userCode, setUserCode] = useState<string>('');
  const [isConsoleShow, setIsConsoleShow] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data: sessionData, status } = useSession();

  useEffect(() => {
    if (submission) {
      setUserCode(submission?.submitted_code ?? exercise?.default_code ?? '');
    }
  }, [submission]);

  useEffect(() => {
    if (id) {
      const exId = Number(id);
      if (exId in exercisesById) {
        const ex = exercisesById[exId];
        setExercise(ex);
        setUserCode(ex.default_code ?? '');
      } else if (status !== 'loading') {
        // TODO(murat): Don't call getTracks if we already have them
        const tk = (sessionData as ExtendedSession)?.access ?? '';
        dispatch(getTracks(tk));
      }
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const exId = Number(id);
      const tk = (sessionData as ExtendedSession)?.access ?? '';
      if (status !== 'loading' && !submission) {
        dispatch(
          getLastSubmissionByExerciseId({ token: tk, exerciseId: exId }),
        );
      }
    }
  }, [status, submission]);

  useEffect(() => {
    if (exercise) {
      const contents = [
        {
          content: (
            <div className="h-full pt-2.5 relative flex flex-col">
              <Description>{exercise?.lecture ?? ''}</Description>
              <div>
                <Instruction>{exercise?.instruction ?? ''}</Instruction>
                <AccordionComponent
                  items={[
                    {
                      children: exercise?.hint ?? '',
                      heading: 'hints',
                    },
                  ]}
                />
              </div>
            </div>
          ),
          icon: <TabBurgerIcon />,
          text: 'Description',
          width: 20,
          height: 17,
          viewbox: '0 0 14 18',
        },
        {
          content: (
            <div className="h-full pt-2.5 relative flex flex-col">
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                rem minima consequatur.
              </Description>
            </div>
          ),
          icon: <TabChatIcon />,
          text: 'Discussion',
          width: 18,
          height: 17,
          viewbox: '0 0 18 17',
        },
      ];
      setTabsContent(contents);
      const tr = tracksById?.[exercise.track_id];
      tr && setTrack(tr);
    }
  }, [exercise]);

  const items = [
    {
      name: 'Text 1',
      isActive: false,
      lessons: [
        {
          name: 'Text 1.1',
          isActive: false,
        },
        {
          name: 'Text 1.2',
          isActive: false,
        },
      ],
    },
    {
      name: 'Text 2',
      isActive: true,
      lesson_exercises: [
        {
          name: 'Text 2.1',
          isActive: true,
        },
        {
          name: 'Text 2.2',
          isActive: false,
        },
      ],
    },
  ];

  function submitUserCode() {
    const tk = (sessionData as ExtendedSession)?.access ?? '';
    const exId = Number(id);
    const payload = { token: tk, userCode, exercise: exId };
    dispatch(submitCode(payload));
  }

  return (
    <div className="lg:h-100vh lg:fixed w-full overflow-hidden">
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
            <div className="editor-footer absolute bottom-0 t-auto l-0 pr-5 pl-[60px] py-3 bg-[#3A3B42] w-full h-[60px] flex items-center">
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
                  className={`px-7 text-whiteColor overflow-y-scroll max-h-[40vh] lg:max-h-[50vh] w-inherit`}
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos illum obcaecati explicabo dolore vel assumenda
                    perferendis, impedit omnis saepe deleniti facere, sapiente
                    hic illo quasi fugit laudantium nobis reiciendis repellat,
                    dolorem sunt adipisci. Nam vero id cumque sed eos. Quae,
                    porro explicabo maxime quas beatae nihil accusantium,
                    molestiae pariatur placeat, quis nesciunt non est odit
                    libero temporibus quo veniam a? Repellat accusantium eaque
                    officia velit placeat porro incidunt eum adipisci,
                    repudiandae ut neque, blanditiis explicabo earum deleniti
                    numquam similique fugiat. Recusandae illum iusto, atque
                    inventore autem pariatur voluptates veniam ipsam. Rerum
                    eaque architecto quae earum eum delectus reiciendis maxime
                    dolore possimus qui, fugiat et laborum totam tempora libero,
                    dicta quasi, ipsum suscipit. Fugit pariatur qui neque ad eum
                    alias vero doloremque quisquam voluptas magnam ex impedit
                    delectus ratione consectetur quas quam laboriosam amet,
                    sequi aut repudiandae in eligendi, sit atque exercitationem?
                    Molestiae doloribus vero assumenda ducimus quas.
                    Reprehenderit, eum odit cumque aut earum libero soluta harum
                    nulla quod, reiciendis ab necessitatibus atque quia rem
                    mollitia blanditiis dolorem unde optio consectetur impedit
                    veritatis assumenda provident nisi. Nemo iusto corporis
                    cumque adipisci rem laudantium soluta in eligendi harum
                    sunt. Illo magnam nihil maxime veritatis beatae molestias
                    est doloribus eveniet quae quod similique fuga, dignissimos
                    possimus at modi totam rerum molestiae quia ad aperiam! Cum
                    explicabo quos consectetur illo unde quia expedita animi?
                    Architecto excepturi pariatur consectetur temporibus! Atque
                    et perspiciatis odio alias magnam laborum, magni, dolore
                    libero doloremque harum fugit. A voluptatibus ut in
                    excepturi, perspiciatis nobis alias exercitationem cum
                    deleniti non. Eligendi dignissimos quos commodi. Ut eaque
                    quos autem voluptatibus perferendis, reiciendis dolores
                    cumque officiis deserunt excepturi illo, ratione placeat
                    incidunt, ea magni dignissimos provident sint doloremque
                    consequuntur. Maxime obcaecati alias fugit molestias commodi
                    sunt placeat eveniet quam praesentium veritatis enim vero
                    aspernatur dolorum doloribus repellendus totam sed
                    temporibus, rerum dolor consectetur facere voluptatum. Dicta
                    modi itaque excepturi rem, rerum quasi. Obcaecati dolore
                    consequatur cupiditate ipsam, mollitia asperiores facere
                    repellat, magnam voluptates similique dolorum corporis!
                    Asperiores quasi fugiat dolore sit ab deleniti temporibus
                    distinctio itaque magni, dolorem saepe, consequatur atque
                    laborum? Dolores ex laudantium nam magni distinctio tenetur
                    nihil. Blanditiis delectus voluptatem atque minus asperiores
                    distinctio dolor esse, totam repellat quod nobis iusto,
                    voluptatum iste vitae eaque quam odit ratione sed! Omnis
                    obcaecati sunt esse. Earum facere rem saepe sunt iure
                    aliquam temporibus harum? Repellendus voluptates sit non nam
                    eveniet rem quaerat nobis exercitationem debitis beatae
                    quasi esse odio maiores nisi id, animi, ad architecto
                    adipisci! Eius culpa iste perspiciatis hic omnis voluptatum
                    velit quibusdam reprehenderit, aliquam dolore maiores magni
                    esse accusamus optio recusandae inventore vero a totam
                    eaque, odit molestiae cum id voluptate corporis. Blanditiis,
                    magni ratione doloremque culpa, qui enim earum impedit autem
                    id quidem molestias natus recusandae suscipit, dolor cumque
                    libero soluta quibusdam possimus harum cupiditate accusamus
                    nihil? At dolores qui officiis corporis aperiam nam,
                    provident, laborum tenetur iusto necessitatibus soluta rerum
                    totam reprehenderit eveniet quis! Consequuntur, minima? Id
                    amet asperiores natus totam at quia reprehenderit quas
                    fugiat voluptatum beatae vitae itaque est sequi labore ad
                    eum, odit vel consequatur error culpa perspiciatis tempora?
                    Repellat praesentium maxime earum minus, odit odio
                    doloremque molestiae a vero repellendus ex sapiente
                    distinctio harum porro sequi velit autem enim quam dolorem
                    assumenda id, error ratione nesciunt? Asperiores, totam
                    harum.
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterClassroom exercise={exercise} isSuccess={true} />
    </div>
  );
}
