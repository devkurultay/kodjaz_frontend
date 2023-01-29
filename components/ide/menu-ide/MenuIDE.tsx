/* External dependencies */
import React, { useState } from 'react';

/* Local dependencies */
import CheckIcon from '../../../public/assets/svg/CheckIcon';
import PlayIcon from '../../../public/assets/svg/PlayIcon';
import ArrowDown from '../../../public/assets/svg/ArrowDown';
import { Exercise, Lesson, Track, Unit } from '../../../types/tracksTypes';

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
  track?: Track;
  exercise: Exercise;
}

export default function MenuIDE({
  activeClass,
  track,
  exercise,
}: MenuIDEProps) {
  const [openUnit, setOpenUnit] = useState<number>(exercise.unit_id);
  const [openLesson, setOpenLesson] = useState<number>(exercise.lesson);

  const toggleUnit = (id: number) => {
    if (openUnit === id) {
      setOpenUnit(0);
    } else {
      setOpenUnit(id);
    }
  };

  const toggleLesson = (id: number) => {
    if (openLesson === id) {
      setOpenLesson(0);
    } else {
      setOpenLesson(id);
    }
  };

  return (
    <div
      className={`${activeClass} w-full min-h-auto lg:min-h-full z-10 lg:h-full bg-whiteColor absolute top-0 left-0 pb-8`}
    >
      <p className="pl-14 py-3">{track?.name}</p>
      <ul className="pt-14">
        {track?.track_units?.map((unit: Unit) => {
          return (
            <li key={unit.id}>
              <div
                className={`flex items-center justify-between py-[15px] px-[20px] ${
                  openUnit === unit.id && 'bg-grayColorE7'
                }`}
                onClick={() => toggleUnit(unit.id)}
              >
                <div className="flex items-center">
                  {unit.progress_data?.is_complete ? (
                    <CheckIcon width={28} height={28} />
                  ) : (
                    <PlayIcon width={28} height={28} />
                  )}
                  <span className="pl-2">{unit.name}</span>
                </div>
                <div
                  className={
                    openUnit === unit.id ? 'rotate-0' : 'rotate-[270deg]'
                  }
                >
                  <ArrowDown />
                </div>
              </div>
              {openUnit === unit.id && (
                <ul>
                  {unit?.unit_lessons?.map((lesson: Lesson) => (
                    <li key={lesson.id}>
                      <div
                        className={`flex items-center justify-between py-[15px] pl-[30px] pr-[20px] ${
                          openLesson === lesson.id && 'bg-grayColorE7'
                        }`}
                        onClick={() => toggleLesson(lesson.id)}
                      >
                        <div className="flex items-center">
                          {lesson.progress_data?.is_complete ? (
                            <CheckIcon width={28} height={28} />
                          ) : (
                            <PlayIcon width={28} height={28} />
                          )}
                          <span className="pl-2">{lesson.name}</span>
                        </div>
                        <div
                          className={
                            openLesson === lesson.id
                              ? 'rotate-0'
                              : 'rotate-[270deg]'
                          }
                        >
                          <ArrowDown />
                        </div>
                      </div>
                      {openLesson === lesson.id && (
                        <ul>
                          {lesson?.lesson_exercises?.map(
                            (exercise: Exercise) => (
                              <li
                                key={exercise.id}
                                className="flex items-center pl-10"
                              >
                                <CheckIcon
                                  width={14}
                                  height={14}
                                  fill={
                                    exercise.progress_data?.is_complete
                                      ? '#C4C4C4'
                                      : '#28A745'
                                  }
                                />
                                <span className="pl-2">{exercise.name}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      )}
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
