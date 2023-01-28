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
          content: <Description>{exercise?.lecture ?? ''}</Description>,
          instruction: <Description>{exercise?.instruction ?? ''}</Description>,
          hint: <Description>{exercise?.hint ?? ''}</Description>,
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

  return (
    <div className="m-auto">
      <div className="flex md:min-h-[calc(100vh - 160px)]">
        <div className="basis-1/3 h-[inherit] relative">
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
        <div className="grow h-full relative">
          <Editor code={exercise?.default_code ?? ''} />
          <div className="editor-footer absolute bottom-0 t-auto l-0 pr-5 pl-[60px] py-3 bg-[#3A3B42] w-full h-[60px] flex items-center">
            <button className="flex items-center bg-primaryColorLight text-whiteColor font-medium text-sm px-3.5 py-2 rounded-md hover:bg-primaryColorMiddle">
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
