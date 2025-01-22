import { forwardRef, useContext } from 'react';
import cls from './Input.module.css';
import clsx from 'clsx';
import { ThemeContext } from '../../app/App';

const Input = forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({ className, type, ...props }, ref) => {
  const isLight = useContext<boolean>(ThemeContext);
  return <input type={type} className={clsx(className, cls.input, { [cls.dark]: !isLight })} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input };
