import { useEffect, useState } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

interface ProgressBarProps {
  progress: number;
  segment?: 1 | 2 | 4 | 5;
}

export const ProgressBar: React.FC<ProgressBarProps> = props => {
  const {
    progress,
    // segment = 4
  } = props;

  // const startValues = [];
  // for (let i = 1; i <= segment; ++i) {
  //   startValues.push(0);
  // }

  const [segmentProgress, setSegmentProgress] = useState<number[]>([
    0, 0, 0, 0,
  ]);

  // const section = [25, 50, 75, 100];
  const segmentPercentage = 100 / 4;

  const fillSegment = (index: number) => {
    if (index >= segmentProgress.length) return;

    setTimeout(() => {
      setSegmentProgress(prev => {
        const newProgress = [...prev];
        const maxSegmentValue = (index + 1) * segmentPercentage;

        if (progress >= maxSegmentValue) {
          newProgress[index] = 100;
        } else if (progress > index * segmentPercentage) {
          newProgress[index] =
            ((progress - index * segmentPercentage) / segmentPercentage) * 100;
        }

        return newProgress;
      });

      if (progress > (index + 1) * segmentPercentage) {
        fillSegment(index + 1);
      }
    }, 1000);
  };

  useEffect(() => {
    fillSegment(0);
  }, [progress, segmentProgress]);

  return (
    <div className={clsx(classes['progress-bar'])}>
      {[25, 50, 75, 100].map((label, index) => (
        <div key={index} className={clsx(classes['segment'])}>
          <div className={clsx(classes['segment-label'])}>
            <div
              className={clsx(classes['segment-fill'])}
              // style={{ width: `${segmentProgress[index]}%` }}
              style={{
                clipPath: `polygon(0 0, ${segmentProgress[index]}% 0, ${segmentProgress[index]}% 100%, 0 100%)`,
              }}
            >
              {label}%
            </div>
            {label}%
          </div>
          {/* <div
            className={clsx(classes['segment-fill'])}
            style={{ width: `${segmentProgress[index]}%` }}
          ></div>
          <div className={clsx(classes['segment-label'])}>{label}%</div> */}
        </div>
      ))}
    </div>
  );
};
