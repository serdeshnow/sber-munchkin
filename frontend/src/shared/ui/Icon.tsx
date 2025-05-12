import React from 'react';
import cn from 'classnames';
/** Импорт иконок */
import PlusIcon from '@assets/img/plus.svg?react';
import ArrowLeftIcon from '@assets/img/arrow_left.svg?react';
import ArrowRightIcon from '@assets/img/arrow_right.svg?react';
import RestartIcon from '@assets/img/restart.svg?react';
import TrashIcon from '@assets/img/trash.svg?react';
import EditIcon from '@assets/img/edit.svg?react';
import QuestionIcon from '@assets/img/question.svg?react';

/** Типы */
export type IconType =
  | 'plus'
  | 'trash'
  | 'edit'
  | 'restart'
  | 'arrowLeft'
  | 'arrowRight'
  | 'question';

/** Пропсы компонента */
export interface IconProps {
  type: IconType;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  svgClassName?: string;
  size?: number | string;
  color?: string;
  stroke?: string;
  activeColor?: string;
  activeStroke?: string;
  active?: boolean;
  border?: boolean;
}

/** Маппинг иконок */
const iconMap: Record<IconType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  plus: PlusIcon,
  trash: TrashIcon,
  edit: EditIcon,
  restart: RestartIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  question: QuestionIcon,
};

export const Icon: React.FC<IconProps> = (
  {
    type,
    className = '',
    svgClassName = '',
    size = 24,
    color = 'currentColor',
    stroke = 'currentColor',
    activeColor = '#000',
    activeStroke = '#000',
    active = false,
    border = false,
  }) => {
  const SvgIcon = iconMap[type];

  return (
    <div
      className={cn(`inline-flex items-center justify-center`, className)}
      style={{
        width: size,
        height: size,
        color: active ? activeColor : color,
        border: border ? '2px solid' : 'none',
        borderColor: active ? activeColor : color,
        padding: border ? '10px' : '0',
        borderRadius: '20px',
      }}
    >
      <SvgIcon
        width={size}
        height={size}
        className={svgClassName}
        stroke={active ? activeStroke : stroke}
      />
    </div>
  );
};
