// import { useState } from 'react'
import clsx from 'clsx';
import classes from './styles.module.scss';

import { ProgressBar } from '../../shared/progressbar/progressbar';
import { Currency } from '../../shared/currency/currency';
import { CurrencyTwo } from '../../shared/currency-two/currency-two';

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className={clsx(classes.page)}>
      <section className={clsx(classes.section, classes['first-rub'])}>
        {/* Первый вариант расширяющегося Инпута */}
        <Currency symbol="RUB" defaultValue={10000} />
        <ProgressBar progress={65} segment={4} />
      </section>
      <section className={clsx(classes.section, classes['section-usdt'])}>
        {/* Второй вариант расширяющегося Инпута */}
        <CurrencyTwo symbol="USDT" defaultValue={100} />
        <ProgressBar progress={37} segment={4} />
      </section>
    </div>
  );
};

export default App;
