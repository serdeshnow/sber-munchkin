import React from 'react';
import { Icon } from '@shared/ui';

export const Support: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start px-4 pt-4 pb-20">
      {/*<h1 className="text-xl md:text-3xl font-semibold mb-4">Справка по использованию ассистента</h1>*/}
      <div
        className="bg-dark-gray-500 text-sm md:text-2xl text-center rounded-xl px-6 py-4 leading-snug">
        <h1 className="text-lg md:text-2xl font-semibold mb-4">Команды ассистента</h1>
        <ul className="list-disc list-inside flex flex-col gap-6 items-start text-start">
          <li>
            <strong>Добавление игрока:</strong> «добавить Ангелина», «закинь ещё одного
            игрока с именем Алекс»
          </li>
          <li>
            <strong>Удаление игрока:</strong> «удалить Денис», «убери игрок с именем Катя»
          </li>
          <li>
            <strong>Увеличить уровень:</strong> «увеличить уровень Влад», «подними уровень
            Саша»
          </li>
          <li>
            <strong>Уменьшить уровень:</strong> «уменьшить уровень Олег», «сними уровень
            Лена»
          </li>
          <li>
            <strong>Увеличить силу:</strong> «увеличить мощь Пётр на 3», «увеличь силу
            Маша на 2»
          </li>
          <li>
            <strong>Уменьшить силу:</strong> «уменьшить силу Дима на 1», «убери мощь Катя
            на 2»
          </li>
          <li>
            <strong>Переименование игрока:</strong> «поменять Алекс на Александр»,
            «сменить имя игрока Ирина на Ира»
          </li>
          <li>
            <strong>Перезапуск игры:</strong> «перезапустить», «очистить игру»
          </li>
        </ul>

        <h1 className="text-lg md:text-2xl font-semibold mb-4 pt-8 sm:pt-12">Кнопки</h1>
        <ul className="list-disc list-inside flex flex-col gap-6 items-start text-start">
          <li className="flex gap-2 items-center justify-center">
            <strong className="flex gap-1 sm:gap-2 items-center">
              <Icon className={'!h-4 !w-4 sm:!h-6 sm:!w-6'} type={'plus'}/> «Добавить
              Манчкина»:</strong> добавляет нового манчкина в игру (макс. 6 игроков)
          </li>
          <li className="flex gap-2 items-center justify-center">
            <strong className="flex gap-1 sm:gap-2 items-center"><Icon
              className={'!h-4 !w-4 sm:!h-6 sm:!w-6'}
              type={'restart'}/> «Рестарт»:</strong> обнуляет счет всех добавленных игроков (ур. 1,
            мощь 1)
          </li>
          <li className="flex gap-2 items-center justify-center">
            <strong className="flex gap-1 sm:gap-2 items-center"><Icon
              className={'!h-4 !w-4 sm:!h-6 sm:!w-6'}
              type={'trash'}/> «Удалить
              Манчкина»:</strong> удаляет игрока
          </li>
        </ul>
      </div>
    </div>
  );
};
