import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Input } from '../ui/input/input';

interface CurrencyTwoProps {
  symbol: 'RUB' | 'USDT';
  defaultValue?: number;
}

export const CurrencyTwo: React.FC<CurrencyTwoProps> = props => {
  const { symbol = 'RUB', defaultValue = '' } = props;

  const [value, setValue] = useState<number | ''>(defaultValue);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length <= 6 && !isNaN(Number(newValue))) {
      setValue(newValue === '' ? '' : Number(newValue));
    }
  };

  const updateSpanContent = () => {
    if (spanRef.current) {
      spanRef.current.textContent = value === '' ? '' : value.toString();
    }
  };

  useEffect(() => {
    updateSpanContent();
  }, [value]);

  return (
    <div className={clsx(classes['currency'])}>
      <div className={clsx(classes['wrapper-input'])}>
        <span
          className={clsx(classes['resize-text'])}
          ref={spanRef}
          aria-hidden="true"
        ></span>
        <Input
          type="text"
          ref={inputRef}
          className={clsx(classes['input'])}
          value={value}
          onChange={handleInputChange}
          placeholder="0"
        />
      </div>
      <div className={clsx(classes['symbol'])}>{symbol}</div>
    </div>
  );
};
