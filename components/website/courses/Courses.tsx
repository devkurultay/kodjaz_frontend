/* External dependencies */
import { Trans } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

/* Local dependencies */
import LessonIcon from '../../../public/assets/svg/LessonIcon';
import LevelEasyIcon from '../../../public/assets/svg/LevelEasyIcon';

export default function Courses() {
  const coursesArray = [
    {
      alt: 'Python',
      icon: '/assets/pythonIcon.svg',
      title: 'Python',
      description: 'Python description',
      lessonAmount: (
        <>
          <LessonIcon width={18} height={18} />{' '}
          <span className="pl-3.5">
            40 <Trans>lesson</Trans>
          </span>
        </>
      ),
      level: (
        <>
          <LevelEasyIcon width={18} height={18} />{' '}
          <span className="pl-3.5">
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
  ];

  return (
    <section className="py-[80px] bg-grayColorF3 mt-14 min-h-[80vh]">
      <div className="container mx-auto">
        <h2 className="text-center text-blackColorDark text-xl mb-12 font-bold">
          <Trans>courses</Trans>
        </h2>
        <div className="flex flex-wrap gap-y-[30px] mx-[-15px]">
          {coursesArray.map((item: any, index: number) => (
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
                    <div className="flex basis-auto items-center mr-10">{item.lessonAmount}</div>
                    <div className="flex basis-auto items-center">{item.level}</div>
                  </div>
                )}
              </div>
              <div className="flex justify-start pb-6 md:justify-end md:pb-0 md:basis-1/4">
                <Image src={item.icon} alt={item.alt} width={160} height={160} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
