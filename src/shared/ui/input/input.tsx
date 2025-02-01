import {
  InputHTMLAttributes,
  ForwardRefExoticComponent,
  forwardRef,
  PropsWithoutRef,
  RefAttributes,
  DetailedHTMLProps,
} from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

interface typeInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: 'text';
}

type InputProps = PropsWithoutRef<typeInputProps> &
  RefAttributes<HTMLInputElement>;

export const Input: ForwardRefExoticComponent<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const { children, disabled, type = 'text', className, ...otherProps } = props;

  return (
    <input
      ref={ref}
      className={clsx(className, classes.input)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </input>
  );
});
