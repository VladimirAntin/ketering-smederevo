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
        d={"M29 9v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9m26 0a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m26 0l-11.862 8.212a2 2 0 0 1-2.276 0L3 9"}></path>
    </svg>
  );
};

export default memo(Icon);
