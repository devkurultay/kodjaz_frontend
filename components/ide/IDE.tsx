/* External dependencies */
import { Trans } from 'next-i18next';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

/* Local dependencies */
import RunCodeIcon from '../../public/assets/svg/RunCodeIcon';
import TabBurgerIcon from '../../public/assets/svg/TabBurgerIcon';
import TabChatIcon from '../../public/assets/svg/TabChatIcon';
import styles from '../../styles/scss/ide.module.scss';
import Description from './description/Description';
import MenuIDE from './menu-ide/MenuIDE';
import TabsIDE from './tabs-ide/TabsIDE';
import { useRouter } from 'next/router';

import { getTracks, trackState } from '../../store/slices/trackSlice';
import { useAppSelector } from '../../store/hooks';
import { Exercise } from '../../types/tracksTypes';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';
import { ExtendedSession } from '../../types/userTypes';
import LoadingSpinner from '../ui/Spinner';

const Editor = dynamic(() => import('./editor/Editor'), { ssr: false });
import Instruction from './accordion/AccordionComponent';

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
  const [isOpenMenu, setIsOpenMenu] = useState<Boolean>(false);
  const [exercise, setExercise] = useState<Exercise>();
  const [tabsContent, setTabsContent] = useState<TabContents>([]);
  const [userCode, setUserCode] = useState<string>('');
  const router = useRouter();
  const { loading, exercisesById } = useAppSelector(trackState);
  const { id } = router.query;
  const { data: sessionData, status } = useSession();

  useEffect(() => {
    if (id) {
      const exId = Number(id);
      if (exId in exercisesById) {
        const ex = exercisesById[exId];
        setExercise(ex);
        setUserCode(ex.default_code ?? '');
      } else if (status !== 'loading') {
        const tk = (sessionData as ExtendedSession)?.access ?? '';
        // TODO(murat): Don't call getTracks if we already have them
        if (tk) {
          dispatch(getTracks(tk));
        }
      }
    }
  }, [loading, sessionData, status]);

  useEffect(() => {
    if (exercise) {
      const contents = [
        {
          content: (
            <div className="h-full pt-2.5 relative flex flex-col">
              <Description>{exercise?.lecture ?? ''}</Description>
              <Instruction
                items={[
                  {
                    children: exercise?.instruction ?? '',
                    heading: 'instruction',
                  },
                  {
                    children: exercise?.hint ?? '',
                    heading: 'hints',
                  },
                ]}
              ></Instruction>
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
            <Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo rem
              minima consequatur.
            </Description>
          ),
          icon: <TabChatIcon />,
          text: 'Discussion',
          width: 18,
          height: 17,
          viewbox: '0 0 18 17',
        },
      ];
      setTabsContent(contents);
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

  function submitCode() {
    console.log('===', userCode);
  }

  return (
    <div className="m-auto">
      <div className="flex flex-col lg:flex-row lg:min-h-[calc(100vh - 160px)]">
        <div className="basis-full lg:basis-1/3 lg:h-[inherit] relative">
          {loading ? (
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
          <MenuIDE
            activeClass={isOpenMenu ? 'block' : 'hidden'}
            listItem={items}
            title="Title"
          />
        </div>
        <div className="basis-full h-[60vh] lg:basis-auto lg:grow lg:h-full relative">
          <Editor userCode={userCode} setUserCode={setUserCode} />
          <div className="editor-footer absolute bottom-0 t-auto l-0 pr-5 pl-[60px] py-3 bg-[#3A3B42] w-full h-[60px] flex items-center">
            <button
              onClick={submitCode}
              className="flex items-center bg-primaryColorLight text-whiteColor font-medium text-sm px-3.5 py-2 rounded-md hover:bg-primaryColorMiddle"
            >
              <RunCodeIcon />
              <span className="ml-3">
                <Trans>runCode</Trans>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
