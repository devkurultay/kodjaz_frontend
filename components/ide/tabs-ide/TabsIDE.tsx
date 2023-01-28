/* External dependencies */
import React, { ReactElement, useState } from 'react';

/* Local dependencies */
import { IconProps } from '../../../public/assets/svg/types';
import styles from '../../../styles/scss/ide.module.scss';
import TabsSvgIcon from './tabsSvgIcon';

interface TabsIDEItem extends IconProps {
  content?: ReactElement;
  icon?: ReactElement;
  text?: string;
}

interface TabsIDEProps {
  burgerClassName?: string;
  items: Array<TabsIDEItem>;
  onClickedBurger: () => void;
}

export default function TabsIDE({
  burgerClassName,
  items,
  onClickedBurger,
}: TabsIDEProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="flex w-full bg-grayColorDb">
        <button
          className={`${styles.ide_burger} ${burgerClassName}`}
          onClick={onClickedBurger}
        >
          <span></span>
        </button>
        {items.map((item, index) => {
          const activeIndex = activeTab === index;
          return (
            <button
              key={index}
              className={`tab-button px-5 py-3 flex items-center grow ${
                activeIndex ? 'bg-whiteColor' : 'bg-[transparent]'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <TabsSvgIcon
                fill={activeIndex ? '#3A3B42' : '#757575'}
                width={item.width}
                height={item.height}
                viewbox={item.viewbox}
              >
                {item.icon}
              </TabsSvgIcon>
              <span
                className={`${
                  activeIndex ? 'text-blackColorLight' : 'text-grayColor75'
                } ml-3`}
              >
                {item.text}
              </span>
            </button>
          );
        })}
      </div>
      {items.length > 0 && (
        <div className={styles.tab_content}>{items[activeTab].content}</div>
      )}
    </>
  );
}
