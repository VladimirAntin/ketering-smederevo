const WaveDivider = ({fill, inverted = false}: {fill: string; inverted?: boolean}) => (
  <div className={'absolute bottom-0 left-0 w-full overflow-hidden leading-none'} aria-hidden={'true'}>
    <svg
      viewBox={'0 0 1440 110'}
      preserveAspectRatio={'none'}
      className={'block h-24 w-full sm:h-32 lg:h-40'}
      fill={fill}
      style={inverted ? {transform: 'scaleX(-1)'} : undefined}>
      <path d={'M0,55 C180,110 360,0 540,55 C720,110 900,0 1080,55 C1260,110 1380,20 1440,55 L1440,110 L0,110 Z'} />
    </svg>
  </div>
);

export default WaveDivider;
