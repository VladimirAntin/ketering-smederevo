import {FC, memo} from 'react';

// Ketering Smederevo — fork & knife logo
const LogoIcon: FC<Icon> = ({width = 40, height = 40, className}) => (
  <svg
    width={width}
    height={height}
    viewBox={'0 0 24 24'}
    fill={'none'}
    xmlns={'http://www.w3.org/2000/svg'}
    className={className}>
    <g
      stroke={'currentColor'}
      strokeWidth={'1.5'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}>
      {/* Knife — right side */}
      <line
        x1={'17'}
        y1={'2'}
        x2={'17'}
        y2={'22'}
      />
      <path d={'M17 6c2.5-.5 3.8 1 3.8 3.5S19.5 13.5 17 12'} />
      {/* Fork — left side */}
      <line
        x1={'7'}
        y1={'8'}
        x2={'7'}
        y2={'22'}
      />
      <line
        x1={'5'}
        y1={'2'}
        x2={'5'}
        y2={'5'}
      />
      <line
        x1={'7'}
        y1={'2'}
        x2={'7'}
        y2={'5'}
      />
      <line
        x1={'9'}
        y1={'2'}
        x2={'9'}
        y2={'5'}
      />
      <path d={'M5 5c0 1.1.9 2 2 2s2-.9 2-2'} />
    </g>
  </svg>
);

export default memo(LogoIcon);
