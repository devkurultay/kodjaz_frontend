/* External dependencies */
import React from 'react';

/* Local dependencies */
import ChechIcon from '../../../public/assets/svg/ChechIcon';

type ListItemIDETypes = {
  itemText?: string;
};

type ListMenuIDETypes = {
  text: string;
  items?: Array<ListItemIDETypes>;
};

interface MenuIDEProps {
  activeClass?: string;
  listItem?: (ListMenuIDETypes | undefined)[] | undefined;
}

export default function MenuIDE({ activeClass, listItem }: MenuIDEProps) {
  return (
    <div
      className={`${activeClass} w-full h-full bg-whiteColor absolute top-0 left-0`}
    >
      <ul>
        {listItem?.map((list, listIndex: number) => {
          return (
            <li key={listIndex} className="flex">
              <ChechIcon />
              <span>{list?.text}</span>
              <ul>
                {list?.items?.map((item, index) => (
                  <li key={index}>
                    <ChechIcon width={14} height={14} />
                    <span>{item.itemText}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
