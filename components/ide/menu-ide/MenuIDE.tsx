/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
import CheckIcon from '../../../public/assets/svg/CheckIcon';
import PlayIcon from '../../../public/assets/svg/PlayIcon';
import ArrowDown from '../../../public/assets/svg/ArrowDown';

type ListItemIDETypes = {
  name?: string;
  isActive?: boolean;
};

type ListMenuIDETypes = {
  isActive?: boolean;
  name: string;
  lesson_exercises?: Array<ListItemIDETypes>;
};

interface MenuIDEProps {
  activeClass?: string;
  listItem?: Array<ListMenuIDETypes>;
  title: string;
}

export default function MenuIDE({
  activeClass,
  listItem,
  title,
}: MenuIDEProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${activeClass} w-full min-h-auto lg:min-h-full z-10 lg:h-full bg-whiteColor absolute top-0 left-0 pb-8`}
    >
      <p className="pl-14 py-3">{title}</p>
      <ul className="pt-14">
        {listItem?.map((list, listIndex: number) => {
          return (
            <li key={listIndex}>
              <div
                className={`flex items-center justify-between py-[15px] px-[20px] ${
                  isOpen && 'bg-grayColorE7'
                }`}
                onClick={toggleOpen}
              >
                <div className="flex items-center">
                  {list.isActive ? (
                    <PlayIcon width={28} height={28} />
                  ) : (
                    <CheckIcon width={28} height={28} />
                  )}
                  <span className="pl-2">{list?.name}</span>
                </div>
                <div className={isOpen ? 'rotate-0' : 'rotate-[270deg]'}>
                  <ArrowDown />
                </div>
              </div>
              {isOpen && (
                <ul>
                  {list?.lesson_exercises?.map((item, index) => (
                    <li key={index} className="flex items-center pl-10">
                      <CheckIcon
                        width={14}
                        height={14}
                        fill={item.isActive ? '#28A745' : '#C4C4C4'}
                      />
                      <span className="pl-2">{item.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
