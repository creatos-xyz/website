import React, { FC } from "react";

import CloseIcon from "./svg/close.svg";
import DiscordLogoIcon from "./svg/discord-logo.svg";
import InfoIcon from "./svg/info.svg";

type IconsMap = {
  [key: string]: SVGSVGElement;
};

const ICONS_MAP: IconsMap = {
  close: CloseIcon,
  "discord-logo": DiscordLogoIcon,
  info: InfoIcon,
};

interface Props {
  type: string;
  className?: string;
}

const Icon: FC<Props> = ({ type, className }: Props) => {
  if (!ICONS_MAP[type]) {
    return <i className={`${type} ${className}`}></i>;
  }

  const IconSvg: any = ICONS_MAP[type];

  return (
    <i className={className}>
      <IconSvg />
    </i>
  );
};

export default Icon;
