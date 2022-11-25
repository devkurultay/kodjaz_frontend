/* External dependencies */
import { Trans } from 'next-i18next';
import React from 'react';

/* Local dependencies */
import Portrait from '../portrait/Portrait';

export default function Command() {
  const commands = [
    {
      alt: 'Murat Jumashev',
      src: '/assets/murat-sm.png',
      color: `bg-[#1200DD]`,
      name: 'Мурат (Murat)',
      text: <Trans>commandCareerMurat</Trans>,
    },
    {
      alt: 'Elza Mambetakunova',
      src: '/assets/elza.png',
      color: `bg-[#69B8FF]`,
      name: 'Эльза (Elza)',
      text: 'Frontend Developer',
    },
    {
      alt: 'Zhanara Tolonbaeva',
      src: '/assets/zhanara.png',
      color: `bg-[#D73A49]`,
      name: 'Жанара (Zhanara)',
      text: 'Frontend Developer',
    },
    {
      alt: 'Aidai',
      src: '/assets/aidai.png',
      color: `bg-[#28A745]`,
      name: 'Айдай (Aidai)',
      text: 'UX/UI Designer',
    },
    {
      alt: 'Uuljan',
      src: '/assets/uuljan.png',
      color: `bg-[#FF9E2D]`,
      name: 'Уулжан (Uulzhan)',
      text: 'Backend Developer',
    },
    {
      alt: 'Kalicha',
      src: '/assets/kalicha.png',
      color: `bg-[#7C28EA]`,
      name: 'Калича (Kalicha)',
      text: 'Project Manager',
    },
    {
      alt: 'Nurdiana',
      src: '/assets/nurdiana.png',
      color: `bg-[#FFD33D]`,
      name: 'Нурдиана (Nurdiana)',
      text: 'Flutter Developer',
    },
    {
      alt: 'Kubanych',
      src: '/assets/kuba.png',
      color: `bg-[#019999]`,
      name: 'Кубаныч (Kubanych)',
      text: 'Flutter Developer',
    },
  ];

  return (
    <div className="container py-16">
      <h2 className="text-center text-blackColorDark text-xl mb-12 font-bold">
        <Trans>aboutCommand</Trans>
      </h2>
      <div className="flex flex-wrap sm:justify-center">
        {commands.map((item: any, index: number) => (
          <div key={index} className="sm:basis-1/2 lg:basis-1/4 flex flex-row sm:flex-col items-center mb-[50px]">
            <Portrait alt={item.alt} src={item.src} bgColor={item.color} />
            <div className="w-[calc(100%-120px)] sm:w-auto sm:text-center ml-5 sm:ml-0">
              <h4 className="text-sm2 font-semibold mb-2">{item.name}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
