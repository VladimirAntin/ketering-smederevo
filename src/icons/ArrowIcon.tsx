import {FC, memo} from 'react';

const Icon: FC<Icon> = ({width = 64, height = 64, className}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={"0 0 24 24"}
      className={className}>
      <path
        fill={"currentColor"}
        d={"M11 20V7.75L5.75 13L5 12.34l6.5-6.5l6.5 6.5l-.75.66L12 7.75V20z"}></path>
    </svg>
  );
};

export default memo(Icon);
