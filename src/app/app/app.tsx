// import { useState } from 'react'
import clsx from 'clsx';
import classes from './styles.module.scss';

import { ProgressBar } from '../../shared/progressbar/progressbar';

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className={clsx(classes.page)}>
      <ProgressBar progress={62} segment={2} />
    </div>
  );

  //     return (
  //         <div className="app-container">
  //             <ProgressBar progress={65} />
  //         </div>
  //     );
};

export default App;
