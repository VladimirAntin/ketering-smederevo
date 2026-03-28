import {FC, memo} from 'react';

const Icon: FC<Icon> = ({width = 64, height = 64, className}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={"0 0 24 24"}
      className={className}>
      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"1.5"}
        d={"M17.25 4.75H6.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h10.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5m-14 4.5h17.5M7.361 4.75v-2m9.25 2v-2"}></path>
    </svg>
  );
};

export default memo(Icon);
