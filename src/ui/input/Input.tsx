import { forwardRef } from 'react';
import cls from './Input.module.css';

const Input = forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({ className, type, ...props }, ref) => {
  return <input type={type} className={[className, cls.input].join(' ')} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input };
