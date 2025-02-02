import { useEffect, useState } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

interface ProgressBarProps {
  progress: number;
  segments?: 1 | 2 | 4 | 5;
}

export const ProgressBar: React.FC<ProgressBarProps> = props => {
  const { progress, segments = 4 } = props;

  const valueDictionary = {
    1: { start: [0], values: [100] },
    2: { start: [0, 0], values: [50, 100] },
    4: { start: [0, 0, 0, 0], values: [25, 50, 75, 100] },
    5: { start: [0, 0, 0, 0, 0], values: [20, 40, 60, 80, 100] },
  };

  const [segmentProgress, setSegmentProgress] = useState<number[]>(
    // [0, 0, 0, 0],
    valueDictionary[segments]['start'],
  );

  // const segmentPercentage = 100 / 4;
  const segmentPercentage = 100 / valueDictionary[segments]['start'].length;

  const fillSegment = (index: number) => {
    // if (index >= segmentProgress.length) return;
    if (index >= valueDictionary[segments]['start'].length) return;

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
  }, [progress]);

  return (
    <div className={clsx(classes['progress-bar'])}>
      {/* {[25, 50, 75, 100].map((label, index) => ( */}
      {valueDictionary[segments]['values'].map((label, index) => (
        <div key={index} className={clsx(classes['segment'])}>
          <div className={clsx(classes['segment-label'])}>
            <div
              className={clsx(classes['segment-fill'])}
              style={{
                clipPath: `polygon(0 0, ${segmentProgress[index]}% 0, ${segmentProgress[index]}% 100%, 0 100%)`,
              }}
              aria-hidden="true"
            >
              {label}%
            </div>
            {label}%
          </div>
        </div>
      ))}
    </div>
  );
};
