import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import { Input } from '../ui/input/input';

interface CurrencyTwoProps {
  symbol: 'RUB' | 'USDT';
  // value: number;
}

export const CurrencyTwo: React.FC<CurrencyTwoProps> = props => {
  const { symbol = 'RUB' } = props;

  const [value, setValue] = useState<number | ''>('');

  const inputRef = useRef<HTMLInputElement | null>(null);
  // const containerRef = useRef<HTMLDivElement | null>(null);
  // const symbolRef = useRef<HTMLDivElement | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length <= 16 && !isNaN(Number(newValue))) {
      // setValue(newValue);  // Просто сохраняем строку
      setValue(newValue === '' ? '' : Number(newValue));
    }

    // if (newValue === '' || !isNaN(Number(newValue))) {
    //   setValue(newValue === '' ? '' : Number(newValue));
    // }

    // setValue(e.target.value);
  };

  // Обновление текста в span при изменении значения
  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.textContent = value === '' ? '' : value.toString();
    }
  }, [value]);

  // useEffect(() => {
  //   if (inputRef.current && containerRef.current && symbolRef.current) {
  //     const valueWidth = (inputRef.current.defaultValue.length + 1) * 8;
  //     // Получаем ширину родительского элемента
  //     const containerWidth = containerRef.current.offsetWidth;
  //     const symbolWidth = symbolRef.current.offsetWidth;

  //     // Устанавливаем ширину input по содержимому, но ограничиваем максимальной шириной контейнера
  //     // inputRef.current.style.width = `${Math.min(inputRef.current.scrollWidth, containerWidth)}px`;

  //     // Устанавливаем ширину input с учетом символа, ограничиваем шириной контейнера
  //     const inputWidth = Math.min(
  //       // inputRef.current.scrollWidth,
  //       valueWidth,
  //       // inputRef.current.scrollWidth + symbolWidth,
  //       containerWidth,
  //     );

  //     // Устанавливаем новую ширину для input
  //     inputRef.current.style.width = `${inputWidth}px`;
  //     // inputRef.current.style.width = `100px`;

  //     console.log('Ref', valueWidth);
  //   }
  // }, [value]);

  return (
    <div
      className={clsx(classes['currency'])}
      // ref={containerRef}
    >
      <div className={clsx(classes['wrapper-input'])}>
        <span className="resize-text" ref={spanRef} aria-hidden="true"></span>
        <Input
          type="text"
          ref={inputRef}
          className={clsx(classes['input'])}
          value={value}
          onChange={handleInputChange}
          placeholder="0"
        />
      </div>
      <div
        // ref={symbolRef}
        className={clsx(classes['symbol'])}
      >
        {symbol}
      </div>
    </div>
  );
};
