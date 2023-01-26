/* External dependencies */
import { Trans } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

/* Local dependencies */
import LessonIcon from '../../public/assets/svg/LessonIcon';
import LevelEasyIcon from '../../public/assets/svg/LevelEasyIcon';

export default function CourseDetail() {
  const coursesArray = [
    {
      alt: 'Python',
      icon: '/assets/pythonIcon.svg',
      title: 'Python',
      description:
        'Иштеп чыгуучунун өндүрүмдүүлүгүнө жана коддун окумдуу болушуна багытталган жогорку даражалуу, жалпы милдеттерди аткарууга арналган программалоо тили',
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
  ];

  const lessonsArray = [
    {
      alt: 'JavaScript',
      icon: '/assets/checkIconGray.svg',
      iconPassed: '/assets/checkIconGreen.svg',
      iconInProgress: '/assets/playIcon.svg',
      title: 'JavaScript',
      lessonAmount: (
        <>
          <LessonIcon width={18} height={18} />{' '}
          <span>
            40 <Trans>lesson</Trans>
          </span>
        </>
      ),
    },
    {
      alt: 'Typescript',
      icon: '/assets/checkIconGray.svg',
      iconPassed: '/assets/checkIconGreen.svg',
      iconInProgress: '/assets/playIcon.svg',
      title: 'Typescript',
      lessonAmount: (
        <>
          <LessonIcon width={18} height={18} />{' '}
          <span>
            40 <Trans>lesson</Trans>
          </span>
        </>
      ),
    },
  ];

  return (
    <section className="py-[80px] bg-grayColorCF min-h-[80vh]">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-y-[30px]">
          {coursesArray.map((item: any, index: number) => (
            <div
              key={index}
              className="flex basis-full md:justify-between bg-grayColorF3 rounded-[30px] p-10 flex-col-reverse md:flex-row"
            >
              <div className="flex flex-col basis-1/2">
                <div className="mb-5">
                  <div className="grow mb-5">
                    <p className="text-blackColorDark mb-5 text-lg font-bold">
                      <Trans>{item.title}</Trans>
                    </p>
                    <p className="mb-5">
                      <Trans>{item.description}</Trans>
                    </p>
                  </div>
                  {item.label && (
                    <div className="bg-dangerColor rounded-full text-whiteColor uppercase px-[10px] max-w-[100px]">
                      <p>{item.label}</p>
                    </div>
                  )}
                  {item.level && item.lessonAmount && (
                    <div className="flex basis-1/2 items-center">
                      <div className="flex basis-auto items-center mr-10">
                        {item.lessonAmount}
                      </div>
                      <div className="flex basis-auto items-center">
                        {item.level}
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight w-fit mt-4 px-12 py-1.5 md:py-2.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
                >
                  <Trans>selectCourse</Trans>
                  {/* <Trans>continueCourse</Trans> */}
                </Link>
              </div>
              <div className="flex justify-start pb-6 md:justify-end md:pb-0 md:basis-1/4">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={160}
                  height={160}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between md:flex-row gap-x-[20px] mt-5">
          <div className="flex grow flex-wrap flex-col gap-y-[30px]">
            {lessonsArray.map((item: any, index: number) => (
              <div
                key={index}
                className="flex md:justify-between bg-grayColorF3 rounded-[30px] p-5 items-center"
              >
                <div className="flex flex-col grow">
                  <p className="text-blackColorDark text-md font-bold mb-3.5">
                    <Trans>{item.title}</Trans>
                  </p>
                  {item.label && (
                    <div className="bg-dangerColor rounded-full text-whiteColor uppercase px-[10px] max-w-[100px]">
                      <p>{item.label}</p>
                    </div>
                  )}
                  {item.lessonAmount && (
                    <div className="flex items-center">
                      <div className="flex basis-auto items-center mr-10">
                        {item.lessonAmount}
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex basis-1/3 bg-grayColorF3 rounded-[30px] p-5">
            <div>
              <p className="text-grayColor75 text-base font-normal uppercase mb-2.5">
                <Trans>aboutCourse</Trans>
              </p>
              <p>
                Инженерлер-программисттер, аналитиктер, маалымат таануучулар
                жана машина үйрөнүү инженерлери колдонгон дүйнөдөгү эң тез
                өнүгүп жаткан жана эң популярдуу программалоо тилинин негиздерин
                үйрөнүңүз. Бул курс программалоонун фундаменталдык негиздерин
                жана Python программалоо тилин үйрөнүү үчүн эң жакшы. Курсту
                аяктаган соң, Python тилинде программалоону өздөштүрүп, өз
                долбоорлоруңузду курганга даяр болуп калсыз.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
