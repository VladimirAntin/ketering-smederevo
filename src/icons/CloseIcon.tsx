import {FC, memo} from 'react';

const Icon: FC<Icon> = ({width = 64, height = 64, className}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={"0 0 32 32"}
      className={className}>
      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"M2 30L30 2m0 28L2 2"}></path>
    </svg>
  );
};

export default memo(Icon);
