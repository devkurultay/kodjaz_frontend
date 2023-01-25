/* External dependencies */
import { Trans } from 'next-i18next';
import dynamic from 'next/dynamic';
import React from 'react';

/* Local dependencies */
import RunCodeIcon from '../../public/assets/svg/RunCodeIcon';
import TabBurgerIcon from '../../public/assets/svg/TabBurgerIcon';
import TabChatIcon from '../../public/assets/svg/TabChatIcon';
import styles from '../../styles/scss/ide.module.scss';
import TabsIDE from './tabs-ide/TabsIDE';
import Description from './description/Description';
import MenuIDE from './menu-ide/MenuIDE';

const Editor = dynamic(() => import('./editor/Editor'), { ssr: false });
import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { useEffect } from 'react';
import { getSubscriptionById } from '../../store/slices/subscriptionByIdSlice';

const arr = [
  {
    content: (
      <Description>
        When printing things in Python, we are supplying a text block that we
        want to be printed. Text in Python is considered a specific type of data
        called a string. A string, so named because they’re a series of letters,
        numbers, or symbols connected in order — as if threaded together by
        string. Strings can be defined in different ways:
      </Description>
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

export default function IDE() {
  const [isOpenMenu, setIsOpenMenu] = useState<Boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSubscriptionById());
  });

  return (
    <div className="max-w-[1440px] m-auto">
      <div className="flex md:min-h-[calc(100vh - 160px)]">
        <div className="basis-1/3 h-[inherit] relative">
          <TabsIDE
            burgerClassName={isOpenMenu ? styles.ide_burger_active : ''}
            items={arr}
            onClickedBurger={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
          />
          <MenuIDE activeClass={isOpenMenu ? 'block' : 'hidden'} />
        </div>
        <div className="grow h-full relative">
          <Editor />
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
