/* External dependencies */
import { Trans } from 'next-i18next';
import Image from 'next/image';
import React from 'react';
import LessonIcon from '../../../public/assets/svg/LessonIcon';
import LevelEasyIcon from '../../../public/assets/svg/LevelEasyIcon';

export default function Courses() {
  const coursesArray = [
    {
      alt: 'Phyton',
      icon: '/assets/phytonIcon.svg',
      title: 'Phyton',
      description: 'Phyton description',
      lessonAmount: (
        <>
          <LessonIcon />{' '}
          <span>
            <Trans>lesson</Trans>
          </span>
        </>
      ),
      level: (
        <>
          <LevelEasyIcon />{' '}
          <span>
            <Trans>easy</Trans>
          </span>
        </>
      ),
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
    {
      alt: 'HTML',
      icon: '/assets/htmlIcon.svg',
      title: 'HTML',
      description: 'HTML description',
      label: <Trans>soon</Trans>,
    },
    {
      alt: 'React JS',
      icon: '/assets/reactjsIcon.svg',
      title: 'React JS',
      description: 'React JS description',
      label: <Trans>soon</Trans>,
    },
    {
      alt: 'Java',
      icon: '/assets/javaIcon.svg',
      title: 'Java',
      description: 'Java description',
      label: <Trans>soon</Trans>,
    },
  ];

  return (
    <section className="py-[80px] bg-grayColorF3 mt-14 mb-24">
      <div className="container mx-auto">
        <h2 className="text-center text-blackColorDark text-xl mb-12 font-bold">
          <Trans>courses</Trans>
        </h2>
        <div className="flex">
          <div className="flex flex-wrap gap-y-[30px] relative mx-[-15px]">
            {coursesArray.map((item: any, index: number) => (
              <div key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 px-[15px]">
                <div className="p-8 bg-whiteColor rounded-[30px] h-full">
                  <div className="mb-5">
                    <div className="mb-5">
                      <Image src={item.icon} alt={item.alt} width={80} height={80} />
                    </div>
                    <div className="mb-5">
                      <p className="font-medium text-blackColorDark text-sm2 mb-5">
                        <Trans>{item.title}</Trans>
                      </p>
                      <p className="mb-5">
                        <Trans>{item.description}</Trans>
                      </p>
                    </div>
                  </div>
                  {item.label && (
                    <div>
                      <p>{item.label}</p>
                    </div>
                  )}
                  {item.level && item.lessonAmount && (
                    <div className="flex basis-1/2">
                      <div>{item.lessonAmount}</div>
                      <div>{item.level}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
