/* External dependencies */
import { Trans } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

/* Local dependencies */
import LessonIcon from '../../public/assets/svg/LessonIcon';
import LevelEasyIcon from '../../public/assets/svg/LevelEasyIcon';
import { COURSE_ICONS } from './MyCourses';
import { Unit } from '../../types/tracksTypes';

const PROGRESS_ICONS = {
  icon: '/assets/checkIconGray.svg',
  iconPassed: '/assets/checkIconGreen.svg',
  iconInProgress: '/assets/playIcon.svg',
};

export default function CourseDetail({ track }: any) {
  const icon = COURSE_ICONS?.[track.name] ?? COURSE_ICONS.Unknown;

  return (
    <section className="py-[80px] bg-grayColorCF min-h-[80vh]">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-y-[30px]">
          <div className="flex basis-full md:justify-between bg-grayColorF3 rounded-[30px] p-10 flex-col-reverse md:flex-row">
            <div className="flex flex-col basis-1/2 items-center md:items-start">
              <div className="mb-5">
                <div className="grow mb-5">
                  <p className="text-blackColorDark mb-5 text-lg font-bold">
                    <Trans>{track.name}</Trans>
                  </p>
                  <p className="mb-5">{track.description}</p>
                </div>
                <div className="flex basis-1/2 items-center">
                  <div className="flex basis-auto items-center mr-10">
                    <LessonIcon width={18} height={18} />{' '}
                    <span className="pl-3.5">
                      <Trans
                        i18nKey="unitsCount"
                        values={{ numUnits: track.track_units.length }}
                      />
                    </span>
                  </div>
                  <div className="flex basis-auto items-center">
                    <LevelEasyIcon width={18} height={18} />{' '}
                    <span className="pl-3.5">
                      <Trans>beginner</Trans>
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight w-fit mt-4 px-12 py-1.5 md:py-2.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
              >
                <Trans>continueCourse</Trans>
              </Link>
            </div>
            <div className="flex justify-start pb-6 justify-center md:justify-end md:pb-0 md:basis-1/4">
              <Image src={icon} alt={track.name} width={160} height={160} />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-x-[20px] mt-5">
          <div className="flex grow flex-wrap flex-col gap-y-[30px]">
            {track.track_units.map((unit: Unit) => (
              <div
                key={unit.id}
                className="flex md:justify-between bg-grayColorF3 rounded-[30px] p-5 items-center"
              >
                <div className="flex flex-col grow">
                  <p className="text-blackColorDark text-md font-bold mb-3.5">
                    {unit.name}
                  </p>
                  <div className="flex items-center">
                    <div className="flex basis-auto items-center mr-10">
                      <LessonIcon width={18} height={18} />{' '}
                      <span className="pl-3.5">
                        <Trans
                          i18nKey="lessonsCount"
                          values={{ numLessons: unit.unit_lessons.length }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-12">
                  <Image
                    src="/assets/checkIconGray.svg" // put icon dynamically from PROGRESS_ICONS
                    alt="progress icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex basis-1/3 bg-grayColorF3 rounded-[30px] p-5 mt-5 md:mt-0">
            <div>
              <p className="text-grayColor75 text-base font-normal uppercase mb-2.5">
                <Trans>aboutCourse</Trans>
              </p>
              {/* TODO(murat): create a promo_text field and pass this item there */}
              <p>
                Инженерлер-программисттер, аналитиктер, маалымат таануучулар
                жана машина үйрөнүү инженерлери колдонгон дүйнөдөгү эң тез
                өнүгүп жаткан жана эң популярдуу программалоо тилинин негиздерин
                үйрөнүңүз. Бул курс программалоонун фундаменталдык негиздерин
                жана Python программалоо тилин үйрөнүү үчүн эң жакшы. Курсту
                аяктаган соң, Python тилинде программалоону өздөштүрүп, өз
                долбоорлоруңузду курганга даяр болуп каласыз.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
