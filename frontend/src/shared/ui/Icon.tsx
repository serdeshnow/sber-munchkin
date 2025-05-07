import React from 'react';
import cn from 'classnames';
/** Импорт иконок */
import PlusIcon from '@assets/img/plus.svg?react';
import WarningIcon from '@assets/img/warning.svg?react';
import ClockIcon from '@assets/img/clock.svg?react';
import BuildingIcon from '@assets/img/building.svg?react';
import SupportIcon from '@assets/img/support.svg?react';
import TableIcon from '@assets/img/table.svg?react';
import SliderIcon from '@assets/img/slider.svg?react';
import EmailIcon from '@assets/img/email.svg?react';
import UserCardIcon from '@assets/img/usercard.svg?react';
import UsersGroupIcon from '@assets/img/usersgroup.svg?react';
import StatusXIcon from '@assets/img/status_x.svg?react';
import MoreVerticalIcon from '@assets/img/more_vertical.svg?react';
import TrashIcon from '@assets/img/trash.svg?react';
import EditIcon from '@assets/img/edit.svg?react';
import DragVerticalIcon from '@assets/img/drag_vertical.svg?react';
import ArrowIcon from '@assets/img/arrow.svg?react';
import UploadIcon from '@assets/img/upload.svg?react';
import AddCircle from '@assets/img/add_circle.svg?react';

/** Типы */
export type IconType =
  | 'plus'
  | 'warning'
  | 'clock'
  | 'building'
  | 'support'
  | 'email'
  | 'status_x'
  | 'table'
  | 'slider'
  | 'usercard'
  | 'usersgroup'
  | 'more_vertical'
  | 'trash'
  | 'edit'
  | 'drag_vertical'
  | 'arrow'
  | 'upload'
  | 'add_circle';

/** Пропсы компонента */
interface IconProps {
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
  warning: WarningIcon,
  clock: ClockIcon,
  building: BuildingIcon,
  support: SupportIcon,
  email: EmailIcon,
  status_x: StatusXIcon,
  table: TableIcon,
  slider: SliderIcon,
  usercard: UserCardIcon,
  usersgroup: UsersGroupIcon,
  more_vertical: MoreVerticalIcon,
  trash: TrashIcon,
  edit: EditIcon,
  drag_vertical: DragVerticalIcon,
  arrow: ArrowIcon,
  upload: UploadIcon,
  add_circle: AddCircle,
};

export const Icon: React.FC<IconProps> = ({
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
