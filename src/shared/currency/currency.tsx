import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Input } from '../ui/input/input';

interface CurrencyProps {
  symbol: 'RUB' | 'USDT';
  defaultValue?: number;
}

export const Currency: React.FC<CurrencyProps> = props => {
  const { symbol = 'RUB', defaultValue = '' } = props;

  const [value, setValue] = useState<number | ''>(defaultValue);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const symbolRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (/^\d*$/.test(e.target.value)) {
    //   setValue(e.target.value);
    // }
    const newValue = e.target.value;

    // Ограничение на количество знаков (8), чтобы цифры не уходили из поля видимости на 320
    if (newValue.length <= 8 && !isNaN(Number(newValue))) {
      setValue(newValue === '' ? '' : Number(newValue));
    }
  };

  const updateInputWidth = () => {
    if (inputRef.current && containerRef.current && symbolRef.current) {
      const parentWidth = containerRef.current.offsetWidth;
      // "28" - ширина одного символа, подобрал вручную.
      // Плохое решение, т.к. если изменится размер шрифта все сломается.
      const widthValue = value.toString().length * 28;

      const newWidth = Math.min(Math.max(80, widthValue), parentWidth);

      inputRef.current.style.width = `${newWidth}px`;
    }
  };

  useEffect(() => {
    updateInputWidth();
  }, [value]);

  return (
    <div className={clsx(classes['currency'])} ref={containerRef}>
      <div className={clsx(classes['wrapper-input'])}>
        <Input
          ref={inputRef}
          className={clsx(classes['input'])}
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="0"
        />
      </div>
      <div ref={symbolRef} className={clsx(classes['symbol'])}>
        {symbol}
      </div>
    </div>
  );
};
